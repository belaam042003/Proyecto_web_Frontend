import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Estudios } from '../models/estudios';
import { EstudiosService } from '../services/estudios.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit{
  formularioEstudios: FormGroup
  estudioss: Array<Estudios>
  display : boolean;
  
  constructor(private fb: FormBuilder, private rService: EstudiosService ){
    this.estudioss = new Array<Estudios>();
    this.display = false;
    this.formularioEstudios =  fb.group({
      nivelEducacion: new FormControl('',[Validators.required]),
      carrera: new FormControl('',[Validators.required]),
      universidad : new FormControl('',[Validators.required]),
      idiomas : new FormControl('',[Validators.required]),
    })
  }

  //get estudioss
  getEstudioss(){
    this.rService.getEstudioss().subscribe(res =>{
      this.estudioss = res
    })
  }

  //Eliminar estudios
  eliminarEstudios(idEstudios: String){
    this.rService.eliminarEstudios(idEstudios).subscribe(res =>{
      this.getEstudioss()
    })
  }
  //Crear estudioss
  crearEstudios(){
    if(this.formularioEstudios.valid){
      let estudios= new Estudios()
      estudios.nivelEducacion = this.formularioEstudios.get("nivelEducacion")?.value
      estudios.carrera = this.formularioEstudios.get("carrera")?.value
      estudios.universidad = this.formularioEstudios.get("universidad")?.value
      estudios.idiomas = this.formularioEstudios.get("idiomas")?.value
      this.rService.crearEstudios(estudios).subscribe(res => {
        this.getEstudioss()
        this.formularioEstudios.reset()
      })
    }
  }

  ngOnInit(): void {
    this.getEstudioss();
  }
  
  activador(estudios: Estudios){
    this.formularioEstudios.get("nivelEducacion")?.setValue(estudios.nivelEducacion)
    this.formularioEstudios.get("carrera")?.setValue(estudios.carrera)
    this.formularioEstudios.get("universidad")?.setValue(estudios.universidad)
    this.formularioEstudios.get("idiomas")?.setValue(estudios.idiomas)
    this.display = !this.display
  }

  //Actualizar
  actualizarEstudios(){
    if(this.formularioEstudios.valid){
      let estudios= new Estudios()
      estudios.nivelEducacion = this.formularioEstudios.get("nivelEducacion")?.value
      estudios.carrera = this.formularioEstudios.get("carrera")?.value
      estudios.universidad = this.formularioEstudios.get("universidad")?.value
      estudios.idiomas = this.formularioEstudios.get("idiomas")?.value
      this.rService.actualizarEstudios(estudios).subscribe(res => {
        this.getEstudioss()
        this.formularioEstudios.reset()
        this.display = !this.display
      })
    }
  }
}