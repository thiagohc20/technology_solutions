import { Component, OnInit } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../core/auth.service';
import { ToastModule } from 'primeng/toast';
import { Router } from '@angular/router';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  providers: [AuthService],
  selector: 'app-system-login',
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
  templateUrl: './system-login.component.html',
  styleUrl: './system-login.component.css',
})
export class SystemLoginComponent implements OnInit {
  form!: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      password: new FormControl('', [Validators.required]),
      cpf: new FormControl('', [Validators.required]),
    });
  }

  get password() {
    return this.form.get('password');
  }
  get cpf() {
    return this.form.get('cpf');
  }

  login() {
    if (this.form.valid) {
      this.loading = true;
      this.authService.login(this.form.value).subscribe(
        (data) => {
          console.log(data);
          this.authService.setToken(data.token);
          this.router.navigate(['/sistema/painel']);
        },
        (error) => {
          alert(error.error.message);
        }
      );
      this.loading = false;
    }
  }
}
