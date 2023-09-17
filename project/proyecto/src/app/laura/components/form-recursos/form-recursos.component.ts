import { Component, OnInit } from '@angular/core';
import { Resource } from '../../interfaces/resource';

@Component({
  selector: 'app-form-recursos',
  templateUrl: './form-recursos.component.html',
  styleUrls: ['./form-recursos.component.css']
})
export class FormRecursosComponent implements OnInit {
  listResources: Resource[] = [
    {description:"Raro",imagen: "https://marketplace.canva.com/EAFI171fL0M/1/0/1003w/canva-portada-de-libro-de-novela-ilustrado-color-azul-aqua-PQeWaiiK0aA.jpg", archivo: "hola",etiquetas: "#laura",visibilidad: "publico"},
    {description:"Raro2",imagen: "https://marketplace.canva.com/EAFGf9027eM/1/0/1003w/canva-portada-libro-infantil-bosque-ilustrado-azul-P3McSjgOm1I.jpg", archivo: "hola",etiquetas: "#laura",visibilidad: "publico"},
    {description:"Raro3",imagen: "https://marketplace.canva.com/EAE8SCCNlvo/1/0/1003w/canva-verde-y-rosa-ciencia-ficci%C3%B3n-portada-de-libro-SSKxUZUBOJg.jpg", archivo: "hola",etiquetas: "#laura",visibilidad: "publico"},
    {description:"Raro4",imagen: "https://i.pinimg.com/736x/ab/7a/1d/ab7a1d8d8ac9e4bcf501689ad50dda9d.jpg", archivo: "hola",etiquetas: "#laura",visibilidad: "publico"},
  
  ]  

  constructor(){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   
}
