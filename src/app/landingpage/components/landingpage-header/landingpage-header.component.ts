import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-landingpage-header',
  imports: [RouterLink, ButtonModule],
  templateUrl: './landingpage-header.component.html',
  styleUrl: './landingpage-header.component.css',
})
export class LandingpageHeaderComponent {}
