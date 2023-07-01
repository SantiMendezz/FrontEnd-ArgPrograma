import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';
import { Credentials } from '../Modelo/Credentials';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //Base de datos local
  //private baseURL = "http://localhost:8080/login";

  //Base de datos de render
  private baseURL = 'https://backend-argprograma-ppaj.onrender.com/login';

  constructor(private http: HttpClient, private router: Router) { }

  login(creds: Credentials) {
    return this.http.post(this.baseURL,creds,{
      observe: 'response'
    }).pipe(map((response: HttpResponse<any>) => {
      const body = response.body;
      const headers = response.headers;

      const bearerToken = headers.get('Authorization')!;
      const token = bearerToken.replace('Bearer ', '');

      localStorage.setItem('token', token);

      return body;
    }))
  }

  //Permite obtener el token desde el almacenamiento local que se puede ver en Inspeccionar del navegador
  getToken() {
    return localStorage.getItem('token');
  }

  //Permite cerrar la sesion del usuario
  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

  consultarSesion() {
    if(this.getToken()) {
      return true;
    } else {
      return false;
    }
  }
}