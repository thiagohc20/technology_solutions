import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing_page',
    pathMatch: 'full',
  },
  {
    path: 'landing_page',
    component: LandingpageComponent,
  },
  {
    path: 'login',
    component: LandingpageComponent,
  },
];
