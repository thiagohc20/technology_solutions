import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ImportsModule } from './imports';
import { ComponentsModule } from './landingpage/landingpage.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule, HttpClientModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'technology_solutions';
}
