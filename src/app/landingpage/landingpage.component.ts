import { Component } from '@angular/core';
import { LandingpageHeaderComponent } from './components/landingpage-header/landingpage-header.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [LandingpageHeaderComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
})
export class LandingpageComponent {}
