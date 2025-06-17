import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarColorComponent } from './component/navbar-color/navbar-color.component';
import { WhatsappButtonComponent } from './component/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HttpClientModule, NavbarComponent, HomeComponent, FooterComponent, WhatsappButtonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'web-techcenter';
}
