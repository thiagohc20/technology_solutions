import { Component } from '@angular/core';
import { SystemEmployeesComponent } from './system-employees/system-employees.component';
import { SystemLoginComponent } from './system-login/system-login.component';
import { SystemInviteComponent } from './system-invite/system-invite.component';

@Component({
  selector: 'app-system',
  imports: [
    SystemEmployeesComponent,
    SystemLoginComponent,
    SystemInviteComponent,
  ],
  templateUrl: './system.component.html',
  styleUrl: './system.component.css',
})
export class SystemComponent {}
