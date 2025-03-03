import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

interface Profile {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private baseUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile[]> {
    return this.http.get<any>(`${this.baseUrl}/profiles`);
  }
}
