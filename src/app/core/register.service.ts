import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiCep: string = 'https://viacep.com.br/ws'; // URL base da API ViaCEP
  private baseUrl: string = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  //Buscar dados do cep
  getCepData(cep: string): Observable<any> {
    return this.http.get<any>(`${this.apiCep}/${cep}/json/`);
  }
}
