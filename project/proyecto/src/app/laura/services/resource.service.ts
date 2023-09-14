import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recurso } from '../models/Recurso';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  rutaGloblal = "http://localhost:8080/recurso/"
  
  constructor(private http: HttpClient) { }

    // Crear recurso:
    crearPersona(recurso: Recurso){
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
      this.http.post<Boolean>(this.rutaGloblal + id , {
        observe: 'response'
      })
    }

}
