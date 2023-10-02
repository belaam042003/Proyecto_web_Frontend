import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HojaVida } from '../../models/HojaVida';
import { HojaVidaService } from '../../services/hoja-vida.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {
  currentStep: string = 'step1';
  formData: any = {};

  formularioHojaVida: FormGroup
  hojaVidas: Array<HojaVida>
  display : boolean;
  
  constructor(private fb: FormBuilder, private rService: HojaVidaService ){
    this.hojaVidas = new Array<HojaVida>();
    this.display = false;
    this.formularioHojaVida =  fb.group({
      cedula: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      apellido : new FormControl('',[Validators.required]),
      direccion : new FormControl('',[Validators.required]),
      correo: new FormControl('',[Validators.required]),
      fechaNacimiento: new FormControl('',[Validators.required]),
      twitter : new FormControl('',[Validators.required]),
      pinterest : new FormControl('',[Validators.required]),
      linkedIn: new FormControl('',[Validators.required]),
      hobbies: new FormControl('',[Validators.required]),
      trayectoria : new FormControl('',[Validators.required]),
      algoMas: new FormControl('',[Validators.required]),
      titulo: new FormControl('',[Validators.required]),
    })
  }

  //get hojaVidas
  getHojaVidas(){
    this.rService.getHojaVidas().subscribe(res =>{
      this.hojaVidas = res
    })
  }

  //Eliminar hojaVida
  eliminarHojaVida(idHojaVida: number){
    this.rService.eliminarHojaVida(idHojaVida).subscribe(res =>{
      this.getHojaVidas()
    })
  }
  //Crear hojaVidas
  crearHojaVida(){
    if(this.formularioHojaVida.valid){
      let hojaVida= new HojaVida()
      hojaVida.cedula = this.formularioHojaVida.get("cedula")?.value
      hojaVida.nombre = this.formularioHojaVida.get("nombre")?.value
      hojaVida.apellido = this.formularioHojaVida.get("apellido")?.value
      hojaVida.direccion = this.formularioHojaVida.get("direccion")?.value
      hojaVida.correo = this.formularioHojaVida.get("correo")?.value
      hojaVida.fechaNacimiento = this.formularioHojaVida.get("fechaNacimiento")?.value
      hojaVida.twitter = this.formularioHojaVida.get("twitter")?.value
      hojaVida.pinterest = this.formularioHojaVida.get("pinterest")?.value
      hojaVida.linkedIn = this.formularioHojaVida.get("linkedIn")?.value
      hojaVida.hobbies = this.formularioHojaVida.get("hobbies")?.value
      hojaVida.trayectoria= this.formularioHojaVida.get("trayectoria")?.value
      hojaVida.algoMas = this.formularioHojaVida.get("algoMas")?.value
      hojaVida.titulo = this.formularioHojaVida.get("titulo")?.value
      this.rService.crearHojaVida(hojaVida).subscribe(res => {
        this.getHojaVidas()
        this.formularioHojaVida.reset()
      })
    }
  }

  ngOnInit(): void {
    this.getHojaVidas();
  }
  
  activador(hojaVida: HojaVida){
    this.formularioHojaVida.get("cedula")?.setValue(hojaVida.cedula)
    this.formularioHojaVida.get("nombre")?.setValue(hojaVida.nombre)
    this.formularioHojaVida.get("apellido")?.setValue(hojaVida.apellido)
    this.formularioHojaVida.get("direccion")?.setValue(hojaVida.direccion)
    this.formularioHojaVida.get("correo")?.setValue(hojaVida.correo)
    this.formularioHojaVida.get("fechaNacimiento")?.setValue(hojaVida.fechaNacimiento)
    this.formularioHojaVida.get("twitter")?.setValue(hojaVida.twitter)
    this.formularioHojaVida.get("pinterest")?.setValue(hojaVida.pinterest)
    this.formularioHojaVida.get("linkedIn")?.setValue(hojaVida.linkedIn)
    this.formularioHojaVida.get("hobbies")?.setValue(hojaVida.hobbies)
    this.formularioHojaVida.get("trayectoria")?.setValue(hojaVida.trayectoria)
    this.formularioHojaVida.get("algoMas")?.setValue(hojaVida.algoMas)
    this.formularioHojaVida.get("titulo")?.setValue(hojaVida.titulo)
    this.display = !this.display
  }

  //Actualizar
  actualizarHojaVida(){
    if(this.formularioHojaVida.valid){
      let hojaVida= new HojaVida()
      hojaVida.cedula = this.formularioHojaVida.get("cedula")?.value
      hojaVida.nombre = this.formularioHojaVida.get("nombre")?.value
      hojaVida.apellido = this.formularioHojaVida.get("apellido")?.value
      hojaVida.direccion = this.formularioHojaVida.get("direccion")?.value
      hojaVida.correo = this.formularioHojaVida.get("correo")?.value
      hojaVida.fechaNacimiento = this.formularioHojaVida.get("fechaNacimiento")?.value
      hojaVida.twitter = this.formularioHojaVida.get("twitter")?.value
      hojaVida.pinterest = this.formularioHojaVida.get("pinterest")?.value
      hojaVida.linkedIn = this.formularioHojaVida.get("linkedIn")?.value
      hojaVida.hobbies = this.formularioHojaVida.get("hobbies")?.value
      hojaVida.trayectoria= this.formularioHojaVida.get("trayectoria")?.value
      hojaVida.algoMas = this.formularioHojaVida.get("algoMas")?.value
      hojaVida.titulo = this.formularioHojaVida.get("titulo")?.value
      this.rService.actualizarHojaVida(hojaVida).subscribe(res => {
        this.getHojaVidas()
        this.formularioHojaVida.reset()
        this.display = !this.display
      })
    }
  }

  nextStep(): void {
    if (this.currentStep === 'step1') {
      this.currentStep = 'step2';
    } else if (this.currentStep === 'step2') {
      this.currentStep = 'step3';
    }
  }

  prevStep(): void {
    if (this.currentStep === 'step2') {
      this.currentStep = 'step1';
    } else if (this.currentStep === 'step3') {
      this.currentStep = 'step2';
    }
  }

  submitForm(): void {
    // Aquí puedes enviar los datos del formulario
    console.log('Formulario enviado:', this.formData);
  }
}
