import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publicacion } from '../models/Publicacion';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  rutaGlobal = 'http://localhost:8080/publicacion/'
  constructor(private http: HttpClient) { }


  //create publicacion


  // get publicaciones
  getPublicaciones(){
    return this.http.get<Publicacion[]>(this.rutaGlobal + 'mostrar')
  }

  // update publicaciones
  updatePublicacion(publicacion: Publicacion) {
    return this.http.put<Publicacion>(this.rutaGlobal + 'update/' + publicacion.id, publicacion, {
      observe: 'response'
    })
  }
  
  //delete publicacion
  deletePublicacion(id: number){
    this.http.post<Boolean>(this.rutaGlobal + 'delete/' + id, {
      observe:'response'
    })
  }

}
