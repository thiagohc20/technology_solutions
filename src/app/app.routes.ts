import { authGuard } from './guards/auth-guard.guard';
/*LandingPage */
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LandingpageAboutComponent } from './landingpage/landingpage-about/landingpage-about.component';
import { LandingpageHomeComponent } from './landingpage/landingpage-home/landingpage-home.component';
import { LandingpageServiceComponent } from './landingpage/landingpage-service/landingpage-service.component';
import { LandingpagePrivacyComponent } from './landingpage/landingpage-privacy/landingpage-privacy.component';
import { LandingpageContactComponent } from './landingpage/landingpage-contact/landingpage-contact.component';
import { LandingpageHireComponent } from './landingpage/landingpage-hire/landingpage-hire.component';
import { LandingpageRegisterComponent } from './landingpage/landingpage-register/landingpage-register.component';
/* Sistema */
import { SystemComponent } from './system/system.component';
import { SystemLoginComponent } from './system/system-login/system-login.component';
import { SystemEmployeesComponent } from './system/system-employees/system-employees.component';
import { SystemChartComponent } from './system/system-chart/system-chart.component';
import { SystemInviteComponent } from './system/system-invite/system-invite.component';

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
    path: 'login',
    component: SystemLoginComponent,
    data: {
      name: 'Login',
    },
  },
  {
    path: 'sistema',
    component: SystemComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'painel',
        pathMatch: 'full',
      },
      {
        path: 'painel',
        component: SystemChartComponent,
        data: {
          name: 'Painel',
          icon: 'fa-solid fa-chart-pie',
          to: '/sistema/painel',
        },
      },
      {
        path: 'gerencial',
        component: SystemEmployeesComponent,
        data: {
          name: 'Gerencial',
          icon: 'fa-solid fa-users',
          to: '/sistema/gerencial',
        },
      },
      {
        path: 'convites',
        component: SystemInviteComponent,
        data: {
          name: 'Convites',
          icon: 'fa-solid fa-user-plus',
          to: '/sistema/convites',
        },
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'portifolio',
  },
];
