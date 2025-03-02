import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-landingpage-contact',
  imports: [InputTextModule, TextareaModule, FloatLabel, ButtonModule],
  templateUrl: './landingpage-contact.component.html',
  styleUrl: './landingpage-contact.component.css',
})
export class LandingpageContactComponent {}
