import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  //Base de datos de Render
  private baseURL = "https://backend-argprograma-ppaj.onrender.com/persona";

  //Base de datos local
  //private baseURL = "http://localhost:8080/api/v1/persona";

  constructor(private httpClient : HttpClient) {}

  //Este metodo nos sirve para obtener toda la educacion
  obtenerListaPersona():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.baseURL}`);
  }

  //Enviamos a la Url un empleado
  registrarPersona(persona:Persona): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,persona);
  }

  eliminarPersona(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  };

  //este metodo sirve para obtener o buscar un empleado
  obtenerPersonaPorId(id:number):Observable<Persona>{
    return this.httpClient.get<Persona>(`${this.baseURL}/${id}`);
  }

    //este metodo sirve para actualizar el empleado
  actualizarPersona(persona:Persona) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,persona);
  }
}
