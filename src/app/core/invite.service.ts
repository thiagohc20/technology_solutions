import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

interface Invite {
  id: number;
  statusId: number;
  email: string;
  created_at: string;
  upated_at: string;
}
@Injectable({
  providedIn: 'root',
})
export class InviteService {
  private baseUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getInvites(): Observable<Invite[]> {
    return this.http.get<any>(`${this.baseUrl}/status_invitation`);
  }

  sendInvite(email: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/mail/send`, {
      params: {
        email: email,
      },
    });
  }
}
