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

    phoneNumber: string = '51950963557'; 
  showPopup: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.showPopup = false;
    }, 5000);
  }

  openWhatsApp(): void {
    const message = `Hola TECHCENTER, estoy navegando en tu página https://techcenterperu.com/politica-de-cookies-ue/. Quiero comunicarme con un asesor.`;
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }
}
