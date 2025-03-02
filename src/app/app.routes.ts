import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LandingpageAboutComponent } from './landingpage/landingpage-about/landingpage-about.component';
import { LandingpageHomeComponent } from './landingpage/landingpage-home/landingpage-home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'portifolio',
    pathMatch: 'full',
  },
  {
    path: 'portifolio',
    component: LandingpageComponent,
    children: [
      {
        path: '',
        component: LandingpageHomeComponent,
      },
      {
        path: 'sobre',
        component: LandingpageAboutComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LandingpageComponent,
  },
];
