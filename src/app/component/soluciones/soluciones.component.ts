import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { NavbarColorComponent } from '../navbar-color/navbar-color.component';
@Component({
  selector: 'app-soluciones',
  imports: [NavbarColorComponent, FooterComponent, RouterModule],
  templateUrl: './soluciones.component.html',
  styleUrl: './soluciones.component.css'
})
export class SolucionesComponent {

}
