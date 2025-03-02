import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface PostEmployee {
  name: string;
  email: string;
  cpf: string;
  telephone: string;
  uf: string;
  publicPlace: string;
  locality: string;
  neighborhood: string;
  zipcode: string;
}

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

  removeMask(value: string): string {
    return value.replace(/\D/g, ''); // Remove qualquer coisa que não seja número
  }

  postRegister(value: PostEmployee) {
    const data = {
      ...value,
      zipcode: this.removeMask(value.zipcode),
      cpf: this.removeMask(value.cpf),
    };
    return this.http.post<any>(`${this.baseUrl}/employees`, data);
  }
}
