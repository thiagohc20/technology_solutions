import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-system-employees',
  imports: [
    TableModule,
    DialogModule,
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

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome: new FormControl('', [Validators.required]),
    });
  }

  get nome() {
    return this.formulario.get('nome');
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
