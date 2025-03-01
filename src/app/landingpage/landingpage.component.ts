import { Component } from '@angular/core';
import { LandingpageHeaderComponent } from './components/landingpage-header/landingpage-header.component';
import { LandingpageFooterComponent } from './components/landingpage-footer/landingpage-footer.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [LandingpageHeaderComponent, LandingpageFooterComponent],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
})
export class LandingpageComponent {}
