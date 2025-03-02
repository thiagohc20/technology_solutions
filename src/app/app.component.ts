import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { ImportsModule } from './imports';
import { ComponentsModule } from './landingpage/landingpage.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'technology_solutions';
}
