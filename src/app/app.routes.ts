import { LandingpageComponent } from './landingpage/landingpage.component';
import { LandingpageAboutComponent } from './landingpage/landingpage-about/landingpage-about.component';
import { LandingpageHomeComponent } from './landingpage/landingpage-home/landingpage-home.component';
import { LandingpageServiceComponent } from './landingpage/landingpage-service/landingpage-service.component';
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
        path: 'politica',
        component: LandingpageServiceComponent,
      },
      {
        path: 'contato',
        component: LandingpageServiceComponent,
      },
      {
        path: 'vagas',
        component: LandingpageServiceComponent,
      },
    ],
  },
  {
    path: 'sistema',
    component: LandingpageComponent,
    children: [
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
      {
        path: 'login',
        component: LandingpageServiceComponent,
      },
    ],
  },
];
