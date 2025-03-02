import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SystemHeaderComponent } from './components/system-header/system-header.component';
import { SystemMenuComponent } from './components/system-menu/system-menu.component';
@Component({
  selector: 'app-system',
  imports: [
    RouterOutlet,
    ButtonModule,
    SystemHeaderComponent,
    SystemMenuComponent,
    CommonModule,
  ],
  templateUrl: './system.component.html',
  styleUrl: './system.component.css',
})
export class SystemComponent {
  currentRoute: string = window.location.pathname;
}
