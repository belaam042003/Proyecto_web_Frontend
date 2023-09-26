import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
constructor(){

}

search = new FormControl('')

  ngOnInit(){
this.search.valueChanges.pipe(
  debounceTime(300)
)
this.search.valueChanges.subscribe((value) =>{
  if(value!==null){
    this.searchEmmiter.emit(value);
  }
  
});
  }

@Output('search') searchEmmiter = new EventEmitter<string>()}

/*
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {
  handleSearch(value:string){
    this.filtro_valor=value
  }

    filtro_valor = ''

 
  constructor(private _http: HttpClient, private route: Router)
  {

  }

  direccionarPag(titulo: string): void{
    this.route.navigate([titulo])
  }

  ngOnInit(){
    this._http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (users: any[]) => this.usuarios=users)
    
    }
     usuarios: any[]=[]  
}

*/
