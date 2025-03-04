import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

interface Login {
  cpf: string;
  password: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'http://localhost:3000/api';
  private isLoggeding = new BehaviorSubject<boolean>(false);
  isLoggeding$ = this.isLoggeding.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  removeMask(value: string): string {
    return value.replace(/\D/g, ''); // Remove qualquer coisa que não seja número
  }

  login(payload: Login) {
    const payloadNormalize = {
      ...payload,
      cpf: this.removeMask(payload.cpf),
    };

    return this.http.post<any>(`${this.baseUrl}/auth/login`, payloadNormalize);
  }

  logout() {
    this.removeToken();
    this.router.navigateByUrl('/sistema/login');
  }

  refreshToken(refreshToken: string) {
    return this.http.post<string>(`${this.baseUrl}/auth/login`, {
      refreshToken: refreshToken,
    });
  }

  me() {
    return this.http.get<any>(`${this.baseUrl}/auth/me`);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  removeToken() {
    localStorage.removeItem('token');
  }
  getToken(token: string) {
    localStorage.getItem('token');
  }
  setCookie(token: string) {
    document.cookie = `refreshToken=${token}`;
  }
}
