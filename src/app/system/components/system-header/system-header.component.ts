import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-system-header',
  imports: [
    AvatarModule,
    AvatarGroupModule,
    RouterLink,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './system-header.component.html',
  styleUrl: './system-header.component.css',
})
export class SystemHeaderComponent {
  currentRoute: string;
  constructor() {
    this.currentRoute = window.location.pathname;
  }
}
