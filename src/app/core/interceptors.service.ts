import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorsService {
  private apiUrl = 'https://viacep.com.br/ws'; // URL base da API ViaCEP

  constructor(private http: HttpClient) {}

  // Método que faz a requisição para buscar o endereço pelo CEP
  buscarEndereco(cep: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${cep}/json/`);
  }
}
