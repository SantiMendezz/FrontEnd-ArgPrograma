import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hard_Skill } from '../Modelo/Hard_Skill';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService {
  //Base de datos de Render
  private baseURL = "https://backend-argprograma-ppaj.onrender.com/hardSkill";

  //Base de datos local
  //private baseURL = "http://localhost:8080/api/v1/hardSkill"

  constructor(private httpClient : HttpClient) {}

  //Este metodo nos sirve para obtener toda la educacion
  obtenerListaSkill():Observable<Hard_Skill[]>{
    return this.httpClient.get<Hard_Skill[]>(`${this.baseURL}`);
  }

  //Enviamos a la Url un empleado
  registrarSkill(skill:Hard_Skill): Observable<Object> {
    return this.httpClient.post<Hard_Skill>(`${this.baseURL}`,skill);
  }

  eliminarSkill(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  };

  //este metodo sirve para obtener o buscar un empleado
  obtenerSkillPorId(id:number):Observable<Hard_Skill>{
    return this.httpClient.get<Hard_Skill>(`${this.baseURL}/${id}`);
  }

    //este metodo sirve para actualizar el empleado
  actualizarSkill(skill:Hard_Skill) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,skill);
  }
}
