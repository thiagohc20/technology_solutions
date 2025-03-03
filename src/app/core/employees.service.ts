import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

interface Employee {
  id: number;
  name: string;
  email: string;
  cpf: string;
}

interface EmployeeSelected extends Employee {
  telephone: string;
  zipcode: string;
  uf: string;
  neighborhood: string;
  publicPlace: string;
  locality: string;
  userId: number;
  created_at: string;
  user: User;
}

interface User {
  id: number;
  profile: Profile;
  created_at: string;
  updated_at: string;
}
interface Profile {
  id: number;
  name: string;
}

interface UpdateEmployee {
  userId: number;
  employeeId: number;
  profileId: Profile;
  password?: string;
}
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private baseUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<any>(`${this.baseUrl}/employees`);
  }

  getEmployee(id: number): Observable<EmployeeSelected> {
    return this.http.get<any>(`${this.baseUrl}/employees/${id}`);
  }

  export(value: string): Observable<Blob> {
    return this.http.get<any>(`${this.baseUrl}/excel/export`, {
      params: new HttpParams().set('search', value),
      responseType: 'blob' as 'json',
    });
  }

  updateEmploye(employee: UpdateEmployee): Observable<UpdateEmployee> {
    return this.http.put<any>(`${this.baseUrl}/users/${employee.userId}`, {
      employeeId: employee.employeeId,
      profileId: employee.profileId.id,
      password: employee.password,
    });
  }
}
