import { Component, OnInit } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../core/register.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landingpage-register',
  providers: [RegisterService, MessageService],
  imports: [
    ToastModule,
    TextareaModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    FloatLabel,
    CommonModule,
    ButtonModule,
    InputMaskModule,
  ],
  templateUrl: './landingpage-register.component.html',
  styleUrl: './landingpage-register.component.css',
})
export class LandingpageRegisterComponent implements OnInit {
  form!: FormGroup;
  loading: boolean = false;

  constructor(
    private registerService: RegisterService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      id: new FormControl(''),
      token: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', [Validators.required]),
      telephone: new FormControl(''),
      uf: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{5}-\d{3}$/),
      ]),
      neighborhood: new FormControl('', [Validators.required]),
      locality: new FormControl('', [Validators.required]),
      publicPlace: new FormControl('', [Validators.required]),
    });

    this.route.queryParamMap.subscribe((params) => {
      const token = params.get('token');
      const email = params.get('email');

      this.form.patchValue({
        email: email,
        token: token,
      });
    });
  }

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get cpf() {
    return this.form.get('cpf');
  }
  get telephone() {
    return this.form.get('telephone');
  }
  get uf() {
    return this.form.get('uf');
  }
  get zipcode() {
    return this.form.get('zipcode');
  }
  get neighborhood() {
    return this.form.get('neighborhood');
  }
  get locality() {
    return this.form.get('locality');
  }
  get publicPlace() {
    return this.form.get('publicPlace');
  }

  getCep() {
    const zipcode = this.form.get('zipcode')?.value;

    this.registerService.getCepData(zipcode).subscribe(
      (data) => {
        if (data && !data.erro) {
          this.form.patchValue({
            publicPlace: data.logradouro,
            neighborhood: data.bairro,
            locality: data.localidade,
            uf: data.uf,
          });
        } else {
        }
      },
      (error) => {}
    );
  }

  onSubmit() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
      life: 3000,
    });
    if (this.form.valid) {
      this.registerService.postRegister(this.form.value).subscribe(
        (data: any) => {
          alert('Usuário cadastrado com sucesso');
          this.form.reset();
        },
        (error: any) => {
          alert(error.error.message);
        }
      );
    }
  }
}
