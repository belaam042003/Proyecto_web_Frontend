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
  formularioRecurso: FormGroup
  recursos: Array<Recurso>
  display : boolean;
  
  constructor(private fb: FormBuilder, private rService: ResourceService ){
    this.recursos = new Array<Recurso>();
    this.display = false;
    this.formularioRecurso =  fb.group({
      id : new FormControl('',[Validators.required]),
      urlImagen: new FormControl('',[Validators.required]),
      descripcion : new FormControl('',[Validators.required]),
      etiquetas : new FormControl('',[Validators.required]),
      visibilidad: new FormControl('',[Validators.required]),
      
    })
  }


  descargarArchivo() {
    // Reemplaza 'ruta_del_archivo' con la URL de tu archivo a descargar
    const rutaArchivo = 'ruta_del_archivo';
    window.open(rutaArchivo, '_blank');
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
        this.getRecursos()
        this.formularioRecurso.reset()
      })
    }
  }

  ngOnInit(): void {
    this.getRecursos();
  }
  
  activador(recurso: Recurso){
    this.formularioRecurso.get("id")?.setValue(recurso.id)
    this.formularioRecurso.get("urlImagen")?.setValue(recurso.urlImagen)
    this.formularioRecurso.get("descripcion")?.setValue(recurso.descripcion)
    this.formularioRecurso.get("etiquetas")?.setValue(recurso.etiquetas)
    this.formularioRecurso.get("visibilidad")?.setValue(recurso.visibilidad)
    this.display = !this.display
  }

  //Actualizar
  actualizarRecurso(){
    if(this.formularioRecurso.valid){
      let recurso= new Recurso()
      recurso.id = this.formularioRecurso.get("id")?.value
      recurso.urlImagen = this.formularioRecurso.get("urlImagen")?.value
      recurso.descripcion = this.formularioRecurso.get("descripcion")?.value
      recurso.etiquetas = this.formularioRecurso.get("etiquetas")?.value
      recurso.visibilidad = this.formularioRecurso.get("visibilidad")?.value
      this.rService.actualizarRecurso(recurso).subscribe(res => {
        this.getRecursos()
        this.formularioRecurso.reset()
        this.display = !this.display
      })
    }
  }
  selectedContentType: string = 'documento'; // Valor predeterminado
  // Función para manejar el cambio en la opción seleccionada
  onContentTypeChange() {}
}
