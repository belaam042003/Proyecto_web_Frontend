import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images = [
    { src: 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-760w/public/images/mpx/2019/03/01/190115_3863731_Las_5_mejores_universidades_de_EEUU__en_2019.jpg?ramen_itok=iqwQftIcTf' },
    { src: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/06/04154134/universidad-clase-2.jpg' },
    { src: 'https://img.freepik.com/fotos-premium/grupo-graduados-graduacion_109549-881.jpg' }
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
