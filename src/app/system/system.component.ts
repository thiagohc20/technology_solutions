import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Observable } from 'rxjs';
import { SystemMenuService } from './components/system-menu/system-menu.service';
import { SystemHeaderComponent } from './components/system-header/system-header.component';
import { SystemMenuComponent } from './components/system-menu/system-menu.component';
@Component({
  selector: 'app-system',
  imports: [
    RouterOutlet,
    ButtonModule,
    SystemHeaderComponent,
    SystemMenuComponent,
    CommonModule,
  ],
  templateUrl: './system.component.html',
  styleUrl: './system.component.css',
})
export class SystemComponent implements OnInit {
  currentRoute: string = window.location.pathname;
  isMenuExpand: boolean = false;

  constructor(private menuService: SystemMenuService) {}

  ngOnInit(): void {
    // Se inscrevendo no serviço para monitorar mudanças
    this.menuService.state$.subscribe((newState) => {
      this.isMenuExpand = newState;
    });
  }

  // Método para alternar o estado da variável
  toggleState(): void {
    const currentState = this.menuService.getCurrentState();
    this.menuService.changeState(!currentState);
  }
}
