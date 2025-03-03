import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const http = inject(HttpClient); // Usando o inject para obter a instância do HttpClient

  if (!token) {
    return next(req); // Se não houver token, apenas passa a requisição sem modificações
  }

  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(newReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        const refreshToken = document.cookie.split('=')[1];

        if (!refreshToken) {
          return throwError(
            () => new Error('Token expired and no refresh token available')
          );
        }

        return http
          .post<any>('http://localhost:3000/api/auth/refreshToken', {
            refreshToken,
          })
          .pipe(
            switchMap((response: any) => {
              const newRefreshToken = response.refreshToken;

              const clonedReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${newRefreshToken}`,
                },
              });

              return next(clonedReq); // Repete a requisição original com o novo token
            }),
            catchError(() => {
              console.log(token);
              return throwError(
                () => new Error('Refresh token expired or invalid')
              );
            })
          );
      }

      return throwError(() => error); // Propaga qualquer outro erro
    })
  );
};
