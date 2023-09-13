import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subir-docs',
  templateUrl: './subir-docs.component.html',
  styleUrls: ['./subir-docs.component.css']
})
export class SubirDocsComponent  implements OnInit {
  
  constructor( ){
  }
  
  ngOnInit(): void {
  }

  selectedContentType: string = 'documento'; // Valor predeterminado

  // Función para manejar el cambio en la opción seleccionada
  onContentTypeChange() {}
}