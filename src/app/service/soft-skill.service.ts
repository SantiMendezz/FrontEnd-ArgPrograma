import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soft_Skill } from '../Modelo/Soft_Skill';

@Injectable({
  providedIn: 'root'
})
export class SoftSkillService {
  //Base de datos de Render
  private baseURL = "https://backend-argprograma-ppaj.onrender.com/softSkill";

  //Base de datos local
  //private baseURL = "http://localhost:8080/api/v1/softSkill"

  constructor(private httpClient : HttpClient) {}

  //Este metodo nos sirve para obtener toda la educacion
  obtenerListaSkill():Observable<Soft_Skill[]>{
    return this.httpClient.get<Soft_Skill[]>(`${this.baseURL}`);
  }

  //Enviamos a la Url un empleado
  registrarSkill(skill:Soft_Skill): Observable<Object> {
    return this.httpClient.post<Soft_Skill>(`${this.baseURL}`,skill);
  }

  eliminarSkill(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  };

  //este metodo sirve para obtener o buscar un empleado
  obtenerSkillPorId(id:number):Observable<Soft_Skill>{
    return this.httpClient.get<Soft_Skill>(`${this.baseURL}/${id}`);
  }

    //este metodo sirve para actualizar el empleado
  actualizarSkill(skill:Soft_Skill) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,skill);
  }
}
