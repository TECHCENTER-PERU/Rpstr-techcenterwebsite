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
  submenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (!this.isMenuOpen) {
      this.submenuOpen = false; // cerrar submenu cuando cierro menú general
    }
  }

  toggleSubmenu(event: Event) {
    event.preventDefault();
    event.stopPropagation(); // evita que el click burbujee y cierre menú general
    this.submenuOpen = !this.submenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.submenuOpen = false;
  }
}
