import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { NavbarColorComponent } from '../navbar-color/navbar-color.component';
@Component({
  selector: 'app-contacto',
  imports: [NavbarColorComponent, FooterComponent, RouterModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
