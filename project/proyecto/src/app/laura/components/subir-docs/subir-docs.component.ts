import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, FormControl, Validators} from '@angular/forms';
import { Recurso } from '../../models/Recurso';
import { ResourceService } from '../../services/resource.service';

@Component({
  selector: 'app-subir-docs',
  templateUrl: './subir-docs.component.html',
  styleUrls: ['./subir-docs.component.css']
})
export class SubirDocsComponent  implements OnInit {
  formularioRecurso: FormGroup
  recursos: Array<Recurso>
  constructor(private fb: FormBuilder, private rService: ResourceService ){
    this.recursos = new Array<Recurso>()
    this.formularioRecurso =  fb.group({
      id : new FormControl('',[Validators.required]),
      urlImagen: new FormControl('',[Validators.required]),
      descripcion : new FormControl('',[Validators.required]),
      etiquetas : new FormControl('',[Validators.required]),
      visibilidad: new FormControl('',[Validators.required]),
      
    })
  }

  //Crear recursos
  crearRecurso(){
    if(this.formularioRecurso.valid){
      let recurso= new Recurso()
      recurso.id = this.formularioRecurso.get("id")?.value
      recurso.urlImagen = this.formularioRecurso.get("urlImagen")?.value
      recurso.descripcion = this.formularioRecurso.get("descripcion")?.value
      recurso.etiquetas = this.formularioRecurso.get("etiquetas")?.value
      recurso.visibilidad = this.formularioRecurso.get("visibilidad")?.value
      this.rService.crearRecurso(recurso).subscribe(res => {
        this.formularioRecurso.reset()
      })
    }
  }

  //get recursos
  getRecursos(){
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
  
  ngOnInit(): void {
  }

  selectedContentType: string = 'documento'; // Valor predeterminado

  // Función para manejar el cambio en la opción seleccionada
  onContentTypeChange() {}
}