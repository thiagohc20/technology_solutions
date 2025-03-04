import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthService } from '../../../core/auth.service';
@Component({
  selector: 'app-landingpage-header',
  imports: [RouterLink, ButtonModule],
  providers: [AuthService],
  templateUrl: './landingpage-header.component.html',
  styleUrl: './landingpage-header.component.css',
})
export class LandingpageHeaderComponent {
  constructor() {}
}
