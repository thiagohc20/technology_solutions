import { Component } from '@angular/core';
import { FloatLabel } from 'primeng/floatlabel';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-landingpage-register',
  imports: [
    TextareaModule,
    HttpClientModule,
    InputTextModule,
    FloatLabel,
    ButtonModule,
    InputMaskModule,
  ],
  templateUrl: './landingpage-register.component.html',
  styleUrl: './landingpage-register.component.css',
})
export class LandingpageRegisterComponent {}
