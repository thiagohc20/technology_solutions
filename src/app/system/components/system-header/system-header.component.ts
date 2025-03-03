import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-system-header',
  providers: [AuthService],
  imports: [
    HttpClientModule,
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
  constructor(private authService: AuthService) {
    this.currentRoute = window.location.pathname;
  }

  logout() {
    this.authService.logout();
  }
}
