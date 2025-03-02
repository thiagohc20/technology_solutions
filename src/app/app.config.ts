import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { PrimeIcons } from 'primeng/api';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes.module';

export const appConfig: ApplicationConfig = {
  providers: [
    PrimeIcons,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
  ],
};
