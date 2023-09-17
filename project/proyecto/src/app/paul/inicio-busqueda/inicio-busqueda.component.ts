import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-inicio-busqueda',
  templateUrl: './inicio-busqueda.component.html',
  styleUrls: ['./inicio-busqueda.component.css']
})

export class InicioBusquedaComponent implements OnInit {
  handleSearch(value:string){
    this.filtro_valor=value
  }

    filtro_valor = ''

 
  constructor(
    private _http: HttpClient
  )
  {}

  ngOnInit(){
    this._http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (users: any[]) => this.usuarios=users)
      
            }
     usuarios: any[]=[]  
}