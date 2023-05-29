import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../Modelo/Educacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //Esta Url obtiene el listado de toda la educacion en el BackEnd
  private baseURL = "http://localhost:8080/api/v1/educacion";

  constructor(private httpClient : HttpClient) {}

  //Este metodo nos sirve para obtener toda la educacion
  obtenerListaEducacion():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(`${this.baseURL}`);
  }

  //Enviamos a la Url un empleado
  registrarEducacion(educacion:Educacion): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,educacion);
  }

  eliminarEducacion(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  };

  //este metodo sirve para obtener o buscar un empleado
  obtenerEducacionPorId(id:number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(`${this.baseURL}/${id}`);
  }

    //este metodo sirve para actualizar el empleado
  actualizarEducacion(educacion:Educacion) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,educacion);
  }
}
