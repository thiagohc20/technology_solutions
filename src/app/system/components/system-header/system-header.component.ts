import { Component, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../core/auth.service';

@Component({
  selector: 'app-system-header',
  providers: [AuthService],
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
export class SystemHeaderComponent implements OnInit {
  currentRoute: string;
  me: any;

  constructor(private authService: AuthService) {
    this.currentRoute = window.location.pathname;
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.getMe();
  }

  getMe() {
    this.authService.me().subscribe((data) => {
      this.me = data;
    });
  }
}
