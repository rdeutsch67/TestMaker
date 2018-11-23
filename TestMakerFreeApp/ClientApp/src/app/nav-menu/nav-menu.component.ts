import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  styleUrls: ['./nav-menu.component.css'],
  templateUrl: './nav-menu.component.html'
})

export class NavMenuComponent {
  isCollapsed = true;

  collapse() {
    this.isCollapsed = true;
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }
}
