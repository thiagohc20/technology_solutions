import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { InputMaskModule } from 'primeng/inputmask';
@Component({
  selector: 'app-system-login',
  imports: [InputMaskModule, InputTextModule, ButtonModule, FloatLabel],
  templateUrl: './system-login.component.html',
  styleUrl: './system-login.component.css',
})
export class SystemLoginComponent {}
