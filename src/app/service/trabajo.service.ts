import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trabajo } from '../Modelo/Trabajo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {
  //Esta Url obtiene el listado de toda la educacion en el BackEnd
  //private baseURL = "http://localhost:8080/api/v1/trabajo";

  //Base de datos de render
  private baseURL = "https://backend-argprograma-ppaj.onrender.com/trabajo";

  constructor(private httpClient : HttpClient) {}

  //Este metodo nos sirve para obtener toda la educacion
  obtenerListaTrabajo():Observable<Trabajo[]>{
    return this.httpClient.get<Trabajo[]>(`${this.baseURL}`);
  }

  //Enviamos a la Url un empleado
  registrarTrabajo(trabajo:Trabajo): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,trabajo);
  }

  eliminarTrabajo(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  };

  //este metodo sirve para obtener o buscar un empleado
  obtenerTrabajoPorId(id:number):Observable<Trabajo>{
    return this.httpClient.get<Trabajo>(`${this.baseURL}/${id}`);
  }

    //este metodo sirve para actualizar el empleado
  actualizarTrabajo(trabajo:Trabajo) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,trabajo);
  }
}
