import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { NavbarColorComponent } from '../navbar-color/navbar-color.component';

@Component({
  selector: 'app-nosotros',
  imports: [NavbarColorComponent, FooterComponent, RouterModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
