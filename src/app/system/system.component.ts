import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SystemHeaderComponent } from './components/system-header/system-header.component';
@Component({
  selector: 'app-system',
  imports: [RouterOutlet, ButtonModule, SystemHeaderComponent],
  templateUrl: './system.component.html',
  styleUrl: './system.component.css',
})
export class SystemComponent {}
