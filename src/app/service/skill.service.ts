import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../Modelo/Skill';
import { Tipo_Skill } from '../Modelo/Tipo_Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  //Esta Url obtiene el listado de toda la educacion en el BackEnd
  private baseURL = "http://localhost:8080/api/v1/skill";

  constructor(private httpClient : HttpClient) {}

  //Este metodo nos sirve para obtener toda la educacion
  obtenerListaSkill():Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(`${this.baseURL}`);
  }
  
  obtenerListaTipoSkill():Observable<Tipo_Skill[]>{
    return this.httpClient.get<Tipo_Skill[]>(`${this.baseURL}/tipo_skills_obtener`);
  }

  //Enviamos a la Url un empleado
  registrarSkill(skill:Skill): Observable<Object> {
    return this.httpClient.post<Skill>(`${this.baseURL}`,skill);
  }

  eliminarSkill(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  };

  //este metodo sirve para obtener o buscar un empleado
  obtenerSkillPorId(id:number):Observable<Skill>{
    return this.httpClient.get<Skill>(`${this.baseURL}/${id}`);
  }

    //este metodo sirve para actualizar el empleado
  actualizarSkill(skill:Skill) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`,skill);
  }
}
