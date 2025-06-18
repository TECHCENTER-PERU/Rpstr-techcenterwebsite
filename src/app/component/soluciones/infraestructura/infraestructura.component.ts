import { Component, OnInit } from '@angular/core';
import { NavbarColorComponent } from '../../navbar-color/navbar-color.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-infraestructura',
  imports: [NavbarColorComponent, FooterComponent],
  templateUrl: './infraestructura.component.html',
  styleUrl: './infraestructura.component.css'
})
export class InfraestructuraComponent implements OnInit{

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
