import { Component } from '@angular/core';
import { LandingpageHeaderComponent } from './components/landingpage-header/landingpage-header.component';
import { LandingpageFooterComponent } from './components/landingpage-footer/landingpage-footer.component';
import { LandingpageHeroComponent } from './components/landingpage-hero/landingpage-hero.component';
import { LandingpageServicesComponent } from './components/landingpage-services/landingpage-services.component';
import { LandingpageEvidenceComponent } from './components/landingpage-evidence/landingpage-evidence.component';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    LandingpageHeaderComponent,
    LandingpageFooterComponent,
    LandingpageHeroComponent,
    LandingpageServicesComponent,
    LandingpageEvidenceComponent,
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css',
})
export class LandingpageComponent {}
