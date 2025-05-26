import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-home',
  imports: [CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{


  logos = [
    {src: 'assets/img/marcas/tecnomin.png', alt: 'tecnomin'},
    {src: 'assets/img/marcas/danper.png', alt: 'danper'},
    {src: 'assets/img/marcas/kampfer.png', alt: 'kampfer'},
    {src: 'assets/img/marcas/pachamama.png', alt: 'pachamama'},
    {src: 'assets/img/marcas/formavena.png', alt: 'formavena'},
    {src: 'assets/img/marcas/remanso.png', alt: 'remanso'},
    {src: 'assets/img/marcas/segusa.png', alt: 'segusa'},
    {src: 'assets/img/marcas/fpf.png', alt: 'fpf'},

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
