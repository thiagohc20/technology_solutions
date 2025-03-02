import { LandingpageComponent } from './landingpage/landingpage.component';
import { LandingpageAboutComponent } from './landingpage/landingpage-about/landingpage-about.component';
import { LandingpageHomeComponent } from './landingpage/landingpage-home/landingpage-home.component';
import { LandingpageServiceComponent } from './landingpage/landingpage-service/landingpage-service.component';
import { LandingpagePrivacyComponent } from './landingpage/landingpage-privacy/landingpage-privacy.component';
import { LandingpageContactComponent } from './landingpage/landingpage-contact/landingpage-contact.component';
import { LandingpageHireComponent } from './landingpage/landingpage-hire/landingpage-hire.component';
import { LandingpageRegisterComponent } from './landingpage/landingpage-register/landingpage-register.component';
import { Routes } from '@angular/router';

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
      {
        path: 'servicos',
        component: LandingpageServiceComponent,
      },
      {
        path: 'privacidade',
        component: LandingpagePrivacyComponent,
      },
      {
        path: 'contato',
        component: LandingpageContactComponent,
      },
      {
        path: 'vagas',
        component: LandingpageHireComponent,
      },
      {
        path: 'cadastrar',
        component: LandingpageRegisterComponent,
      },
    ],
  },
  {
    path: 'sistema',
    component: LandingpageComponent,
    children: [
      {
        path: '',
        component: LandingpageServiceComponent,
      },
      {
        path: 'cadastrar',
        component: LandingpageServiceComponent,
      },
      {
        path: 'convites',
        component: LandingpageServiceComponent,
      },
      {
        path: 'colaboradores',
        component: LandingpageServiceComponent,
      },
    ],
  },
];
