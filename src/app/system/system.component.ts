import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-system',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './system.component.html',
  styleUrl: './system.component.css',
})
export class SystemComponent {}
