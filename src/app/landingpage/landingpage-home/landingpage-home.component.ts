import { Component } from '@angular/core';
import { LandingpageEvidenceComponent } from '../components/landingpage-evidence/landingpage-evidence.component';
import { LandingpageHeroComponent } from '../components/landingpage-hero/landingpage-hero.component';
import { LandingpageServicesComponent } from '../components/landingpage-services/landingpage-services.component';

@Component({
  selector: 'app-landingpage-home',
  imports: [
    LandingpageEvidenceComponent,
    LandingpageHeroComponent,
    LandingpageServicesComponent,
  ],
  templateUrl: './landingpage-home.component.html',
  styleUrl: './landingpage-home.component.css',
})
export class LandingpageHomeComponent {}
