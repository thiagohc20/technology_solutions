import { NgModule } from '@angular/core';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LandingpageAboutComponent } from './landingpage/landingpage-about/landingpage-about.component';
import { LandingpageHomeComponent } from './landingpage/landingpage-home/landingpage-home.component';
import { RouterModule, Routes } from '@angular/router';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
