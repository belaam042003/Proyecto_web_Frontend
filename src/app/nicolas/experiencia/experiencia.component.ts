import { Component, OnInit } from '@angular/core';
import { Experiencias } from '../models/experiencia';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from '../services/experiencia.service';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit{
  formularioExperiencias: FormGroup
  experienciass: Array<Experiencias>
  display : boolean;
  
  constructor(private fb: FormBuilder, private rService: ExperienciaService ){
    this.experienciass = new Array<Experiencias>();
    this.display = false;
    this.formularioExperiencias =  fb.group({
      titulo: new FormControl('',[Validators.required]),
      empresa: new FormControl('',[Validators.required]),
      cargo : new FormControl('',[Validators.required]),
      duracion : new FormControl('',[Validators.required]),
    })
  }

  //get experienciass
  getExperienciass(){
    this.rService.getExperienciass().subscribe(res =>{
      this.experienciass = res
    })
  }

  //Eliminar experiencias
  eliminarExperiencias(idExperiencias: String){
    this.rService.eliminarExperiencias(idExperiencias).subscribe(res =>{
      this.getExperienciass()
    })
  }
  //Crear experienciass
  crearExperiencias(){
    if(this.formularioExperiencias.valid){
      let experiencias= new Experiencias()
      experiencias.titulo = this.formularioExperiencias.get("titulo")?.value
      experiencias.empresa = this.formularioExperiencias.get("empresa")?.value
      experiencias.cargo = this.formularioExperiencias.get("cargo")?.value
      experiencias.duracion = this.formularioExperiencias.get("duracion")?.value
      this.rService.crearExperiencias(experiencias).subscribe(res => {
        this.getExperienciass()
        this.formularioExperiencias.reset()
      })
    }
  }

  ngOnInit(): void {
    this.getExperienciass();
  }
  
  activador(experiencias: Experiencias){
    this.formularioExperiencias.get("titulo")?.setValue(experiencias.titulo)
    this.formularioExperiencias.get("empresa")?.setValue(experiencias.empresa)
    this.formularioExperiencias.get("cargo")?.setValue(experiencias.cargo)
    this.formularioExperiencias.get("duracion")?.setValue(experiencias.duracion)
    this.display = !this.display
  }

  //Actualizar
  actualizarExperiencias(){
    if(this.formularioExperiencias.valid){
      let experiencias= new Experiencias()
      experiencias.titulo = this.formularioExperiencias.get("titulo")?.value
      experiencias.empresa = this.formularioExperiencias.get("empresa")?.value
      experiencias.cargo = this.formularioExperiencias.get("cargo")?.value
      experiencias.duracion = this.formularioExperiencias.get("duracion")?.value
      this.rService.actualizarExperiencias(experiencias).subscribe(res => {
        this.getExperienciass()
        this.formularioExperiencias.reset()
        this.display = !this.display
      })
    }
  }
}
