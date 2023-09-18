import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recursos-compartidos',
  templateUrl: './recursos-compartidos.component.html',
  styleUrls: ['./recursos-compartidos.component.css']
})

export class RecursosCompartidosComponent implements OnInit {
  
  constructor(private route: Router ){
      console.log('hi');
  }
  
  ngOnInit(): void {
    console.log("hola");
  }

  direccionarPag(titulo : string): void{
    this.route.navigate([titulo])
  }

}

