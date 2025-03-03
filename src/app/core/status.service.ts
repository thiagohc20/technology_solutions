import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

interface Status {
  id: number;
  name: string;
}
@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private baseUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getStatus(): Observable<Status[]> {
    return this.http.get<any>(`${this.baseUrl}/status`);
  }
}
