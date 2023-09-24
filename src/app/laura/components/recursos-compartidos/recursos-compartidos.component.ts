import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recursos-compartidos',
  templateUrl: './recursos-compartidos.component.html',
  styleUrls: ['./recursos-compartidos.component.css']
})

export class RecursosCompartidosComponent implements OnInit {
  
  @ViewChild('plusButton') plusButton!: ElementRef;
  @ViewChild('socialButtonsTwitter') socialButtonsTwitter!: ElementRef;
  @ViewChild('socialButtonsFacebook') socialButtonsFacebook!: ElementRef;
  @ViewChild('socialButtonsPinterest') socialButtonsPinterest!: ElementRef;
  @ViewChild('socialButtonsInsta') socialButtonsInsta!: ElementRef;

  ngAfterViewInit() {
    // Agregar clases CSS y eventos al botón más ("plus-button")
    this.renderer.listen(this.plusButton.nativeElement, 'click', () => {
      this.plusButton.nativeElement.classList.toggle('open');
      this.socialButtonsTwitter.nativeElement.classList.toggle('active');
      this.socialButtonsFacebook.nativeElement.classList.toggle('active');
      this.socialButtonsPinterest.nativeElement.classList.toggle('active');
      this.socialButtonsInsta.nativeElement.classList.toggle('active');
    });
  }

  constructor(private route: Router, private renderer: Renderer2){
  }
  
  ngOnInit(): void {
  }

  direccionarPag(titulo: string): void {
    this.route.navigate([titulo]);
  }









}

