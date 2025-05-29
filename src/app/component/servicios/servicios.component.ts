import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { NavbarColorComponent } from '../navbar-color/navbar-color.component';
@Component({
  selector: 'app-servicios',
  imports: [NavbarColorComponent, FooterComponent, RouterModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

}
