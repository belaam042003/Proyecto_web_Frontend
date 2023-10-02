import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {
  currentStep: string = 'step1';
  formData: any = {};

  constructor() { }

  ngOnInit(): void {
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
