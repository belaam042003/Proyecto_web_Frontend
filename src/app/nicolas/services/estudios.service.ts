import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estudios } from '../models/estudios';

@Injectable({
  providedIn: 'root'
})
export class EstudiosService {

  rutaGloblal = "http://localhost:8080/estudios/"
    
    constructor(private http: HttpClient) { }
  
      // Crear estudios:
      crearEstudios(estudios: Estudios){
        console.log(estudios)
        return this.http.post<Estudios>(this.rutaGloblal + 'nuevoEstudios', estudios, {
          observe: 'response'
        })
      }
  
      //  Obtener estudios:
      getEstudioss(){
        return this.http.get<Estudios[]>(this.rutaGloblal +  'mostrarEstudios')
      }
  
      //  Modificar estudios:
      actualizarEstudios(estudios : Estudios){
          return this.http.post<Estudios>(this.rutaGloblal + 'modificarEstudios', estudios, {
            observe : 'response'
          })
      }
  
      //  Eliminar estudios:
      eliminarEstudios(id: number){
        
          return this.http.post<Boolean>(this.rutaGloblal +id , {
          observe: 'response'
        })
      }
}