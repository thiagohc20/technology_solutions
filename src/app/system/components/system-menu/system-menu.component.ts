import { Component, Output } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemMenuService } from './system-menu.service';
import { RouterLink } from '@angular/router';
import { MenuItemComponent } from './components/menu-item/menu-item.component';

@Component({
  imports: [CommonModule, NgFor, MenuItemComponent, RouterLink],
  selector: 'app-system-menu',
  templateUrl: './system-menu.component.html',
  styleUrls: ['./system-menu.component.css'],
})
export class SystemMenuComponent {
  routes: any;
  currentRoute: any;
  isMenuExpand: boolean = false;

  constructor(private router: Router, private menuService: SystemMenuService) {
    // Para obter a URL completa da rota atual:
    this.routes = this.router.config
      .find((item) => item.path == 'sistema')
      ?.children?.filter((item) => item.path != 'login' && item.path != '');
    this.currentRoute = window.location.pathname;

    this.menuService.state$.subscribe((newState) => {
      this.isMenuExpand = newState;
    });
  }

  isActive(routePath: string): boolean {
    return this.router.url.includes(routePath);
  }

  // handleMenu(): void {
  //   this.isMenuExpand = !this.isMenuExpand;
  // }

  toggleState(): void {
    const currentState = this.menuService.getCurrentState();
    this.menuService.changeState(!currentState);
  }
}
