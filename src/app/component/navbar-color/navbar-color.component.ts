import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-color',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar-color.component.html',
  styleUrl: './navbar-color.component.css'
})
export class NavbarColorComponent {

  isMenuOpen = false;
  submenuOpen: string | null = null;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubmenu(event: Event, menu: string) {
    event.preventDefault();
    event.stopPropagation();
    this.submenuOpen = this.submenuOpen === menu ? null : menu;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.submenuOpen = null;
  }
}
