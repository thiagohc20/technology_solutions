import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { InterceptorsService } from '../../core/interceptors.service';

@Component({
  selector: 'app-system-employees',
  providers: [InterceptorsService],
  imports: [
    TableModule,
    DialogModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CommonModule,
    FloatLabel,
  ],
  templateUrl: './system-employees.component.html',
  styleUrl: './system-employees.component.css',
})
export class SystemEmployeesComponent implements OnInit {
  cep: string = '01001000';
  endereco: any = null;
  erro: string = '';

  formulario!: FormGroup;
  visible: boolean = false;
  isEditing: boolean = false;
  selectedProduct: any;
  products: Array<{
    code: number;
    name: string;
    category: string;
    quantity: number;
  }> = [
    { code: 1, name: 'numero1', category: 'categoria', quantity: 5 },
    { code: 2, name: 'numero1', category: 'categoria', quantity: 4 },
  ];

  constructor(private cepService: InterceptorsService) {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl('', [Validators.required]),
    });

    this.buscarEndereco();
  }

  get nome() {
    return this.formulario.get('nome');
  }

  buscarEndereco() {
    if (this.cep.length === 8) {
      // Verificando se o CEP tem 8 caracteres
      this.cepService.buscarEndereco(this.cep).subscribe(
        (response) => {
          console.log(response);
          this.endereco = response; // Armazenando os dados de endereço
          this.erro = ''; // Limpando erro anterior, se houver
        },
        (error) => {
          this.erro = 'Erro ao buscar o endereço! Verifique o CEP.';
          this.endereco = null; // Limpando o objeto de endereço
        }
      );
    }
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
    }
  }

  selecionado(value: {
    code: number;
    name: string;
    category: string;
    quantity: number;
  }) {
    this.isEditing = true;
    this.selectedProduct = value;
  }

  showDialog() {
    this.visible = true;
  }
}
