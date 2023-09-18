import { Component, OnInit } from '@angular/core';
import { Recurso } from '../../models/Recurso';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-lista-prueba',
  templateUrl: './lista-prueba.component.html',
  styleUrls: ['./lista-prueba.component.scss']
})

export class ListaPruebaComponent {

  recursos: Array<Recurso>
  constructor(private rService: ResourceService ){
    this.recursos = new Array<Recurso>()
  }

  //get recursos
  public getRecursos(){
    this.rService.getRecursos().subscribe(res =>{
      this.recursos = res
    })
  }

  //Eliminar recurso
  eliminarRecurso(idRecurso: number){
    this.rService.eliminarRecurso(idRecurso).subscribe(res =>{
      this.getRecursos()
    })
  }
}
