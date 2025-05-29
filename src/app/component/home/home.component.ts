import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
@Component({
  selector: 'app-home',
  imports: [CommonModule, NavbarComponent, FooterComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{


  logos = [
    { src: 'assets/img/marcas/tecnomin.png', alt: 'tecnomin', url: 'https://tecnomindata.com/' },
    { src: 'assets/img/marcas/danper.png', alt: 'danper', url: 'https://www.danper.com' },
    { src: 'assets/img/marcas/kampfer.png', alt: 'kampfer', url: 'https://kampfer.pe/' },
    { src: 'assets/img/marcas/pachamama.png', alt: 'pachamama', url: 'https://www.pachamamafarms.com/' },
    { src: 'assets/img/marcas/formavena.png', alt: 'formavena', url: 'https://formavenaconsergen.com/' },
    { src: 'assets/img/marcas/remanso.png', alt: 'remanso', url: 'https://elremanso.com.pe/' },
    { src: 'assets/img/marcas/segusa.png', alt: 'segusa', url: 'https://segurindustria.pe/' },
    { src: 'assets/img/marcas/fpf.png', alt: 'fpf', url: 'https://fpf.org.pe/' }

  ]

  ngOnInit(): void {
    let currentIndex = 0;
    setInterval(() => {
      currentIndex = (currentIndex + 1) % this.logos.length;
      const carousel = document.querySelector('.carousel');
      if (carousel) {
        carousel.scrollTo({
          left: currentIndex * 100, // Ajusta el valor según el tamaño de cada item
          behavior: 'smooth'
        });
      }
    }, 3000);
  
  }
}
