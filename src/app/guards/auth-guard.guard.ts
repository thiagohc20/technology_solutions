// src/app/auth.guard.ts
import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('teste');
  const router = inject(Router);

  const token = localStorage.getItem('token');

  if (!token && route.routeConfig?.path !== 'login') {
    router.navigate(['/login']);
    return false; // Bloqueia o acesso à rota
  }

  return true;
};
