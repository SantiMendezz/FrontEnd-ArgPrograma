import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Modelo/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  //Base de datos de Render
  private baseURL = "https://backend-argprograma-ppaj.onrender.com/proyecto";

  //Base de datos local
  //private baseURL = "http://localhost:8080/api/v1/proyecto";

  constructor(private httpClient : HttpClient) {}

  //Este metodo nos sirve para obtener toda la educacion
  obtenerListaProyecto():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(`${this.baseURL}`);
  }

  //Enviamos a la Url un empleado
  registrarProyecto(proyecto:Proyecto): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,proyecto);
  }

  eliminarProyecto(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  };

  //este metodo sirve para obtener o buscar un empleado
  obtenerProyectoPorId(id:number):Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(`${this.baseURL}/${id}`);
  }

    //este metodo sirve para actualizar el empleado
  actualizarProyecto(proyecto:Proyecto) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,proyecto);
  }
}
