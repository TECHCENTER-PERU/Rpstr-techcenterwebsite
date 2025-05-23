import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{


  logos = [
    {src: 'assets/img/tecnomin.png', alt: 'tecnomin'},
    {src: 'assets/img/danper.png', alt: 'danper'},
    {src: 'assets/img/kampfer.png', alt: 'kampfer'},
    {src: 'assets/img/pachamama.png', alt: 'pachamama'},
    {src: 'assets/img/formavena.png', alt: 'formavena'},
    {src: 'assets/img/remanso.png', alt: 'remanso'},
    {src: 'assets/img/segusa.png', alt: 'segusa'},
    {src: 'assets/img/fpf.png', alt: 'fpf'},

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
