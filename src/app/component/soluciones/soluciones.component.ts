import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { NavbarColorComponent } from '../navbar-color/navbar-color.component';
@Component({
  selector: 'app-soluciones',
  imports: [NavbarColorComponent, FooterComponent],
  templateUrl: './soluciones.component.html',
  styleUrl: './soluciones.component.css'
})
export class SolucionesComponent {

}
