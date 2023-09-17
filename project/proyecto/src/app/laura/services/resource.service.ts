import { Injectable } from '@angular/core';
import { Recurso } from '../models/Recurso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  rutaGloblal = "http://localhost:8080/recurso/"
    
    constructor(private http: HttpClient) { }
  
      // Crear recurso:
      crearRecurso(recurso: Recurso){
        return this.http.post<Recurso>(this.rutaGloblal + 'nuevoRecurso', recurso, {
          observe: 'response'
        })
      }
  
      //  Obtener recurso:
      getRecursos(){
        return this.http.get<Recurso[]>(this.rutaGloblal +  'mostrarRecurso')
      }
  
      //  Modificar recurso:
      actualizarRecurso(recurso : Recurso){
          return this.http.post<Recurso>(this.rutaGloblal + 'modificarRecurso', recurso, {
            observe : 'response'
          })
      }
  
      //  Eliminar recurso:
      eliminarRecurso(id: number){
         return this.http.post<Boolean>(this.rutaGloblal + id , {
          observe: 'response'
        })
      }
}
