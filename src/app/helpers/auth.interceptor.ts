import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private apiService: LoginService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
const token = this.apiService.getToken();

    if(token) {
      const cloned = request.clone({
        headers: request.headers.set('Authorization','Bearer ${token}')
      })
      return next.handle(cloned);
    }

    return next.handle(request);
  }

}
