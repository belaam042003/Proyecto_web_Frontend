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

