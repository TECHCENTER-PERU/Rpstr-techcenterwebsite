import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
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