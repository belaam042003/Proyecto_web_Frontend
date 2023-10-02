import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
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
    } else if (this.currentStep === 'step3') {
      this.currentStep = 'step4';
    } else if (this.currentStep === 'step4') {
      this.currentStep = 'step5';
    }
  }

  prevStep(): void {
    if (this.currentStep === 'step2') {
      this.currentStep = 'step1';
    } else if (this.currentStep === 'step3') {
      this.currentStep = 'step2';
    } else if (this.currentStep === 'step4') {
      this.currentStep = 'step3';
    } else if (this.currentStep === 'step5') {
      this.currentStep = 'step4';
    }
  }

  submitForm(): void {
    // Aquí puedes enviar los datos del formulario
    console.log('Formulario enviado:', this.formData);
  }
}
