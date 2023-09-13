import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    { src: 'https://images.theconversation.com/files/502439/original/file-20221221-15-rseen2.jpg?ixlib=rb-1.1.0&rect=0%2C229%2C5472%2C2736&q=45&auto=format&w=1356&h=668&fit=crop' },
    { src: 'https://sarrauteducacion.com/wp-content/uploads/2023/02/Santander-educacion.jpeg' },
    { src: 'https://realcup.org/wp-content/uploads/2022/12/enfoque-de-la-educacion-superior.jpg' }
  ];

  currentIndex = 0;

  ngOnInit() {
    // Iniciar la transición automática cada 5 segundos
    setInterval(() => {
      this.nextImage();
    }, 5000); // Cambia 5000 a la cantidad de milisegundos que deseas para el intervalo
  }

  showImage(index: number) {
    this.currentIndex = index;
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Vuelve al primer elemento al llegar al final
    }
  }

  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1; // Vuelve al último elemento al llegar al principio
    }
  }
}
