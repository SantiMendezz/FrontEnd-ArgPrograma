import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ListarEducacionComponent } from './educacion/listar-educacion/listar-educacion.component';
import { RegistrarEducacionComponent } from './educacion/registrar-educacion/registrar-educacion.component';
import { EditarEducacionComponent } from './educacion/editar-educacion/editar-educacion.component';
import { ListarPersonaComponent } from './persona/listar-persona/listar-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component';
import { RegistrarPersonaComponent } from './persona/registrar-persona/registrar-persona.component';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { EditarTrabajoComponent } from './trabajo/editar-trabajo/editar-trabajo.component';
import { ListarTrabajoComponent } from './trabajo/listar-trabajo/listar-trabajo.component';
import { RegistrarTrabajoComponent } from './trabajo/registrar-trabajo/registrar-trabajo.component';
import { ListarHskillComponent } from './hard-skill/listar-hskill/listar-hskill.component';
import { EditarHskillComponent } from './hard-skill/editar-hskill/editar-hskill.component';
import { RegistrarHskillComponent } from './hard-skill/registrar-hskill/registrar-hskill.component';
import { ListarSskillComponent } from './soft-skill/listar-sskill/listar-sskill.component';
import { RegistrarSskillComponent } from './soft-skill/registrar-sskill/registrar-sskill.component';
import { EditarSskillComponent } from './soft-skill/editar-sskill/editar-sskill.component';
import { ListarProyectoComponent } from './proyecto/listar-proyecto/listar-proyecto.component';
import { RegistrarProyectoComponent } from './proyecto/registrar-proyecto/registrar-proyecto.component';
import { EditarProyectoComponent } from './proyecto/editar-proyecto/editar-proyecto.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    HeaderComponent,
    ListarEducacionComponent,
    RegistrarEducacionComponent,
    EditarEducacionComponent,
    ListarPersonaComponent,
    EditarPersonaComponent,
    RegistrarPersonaComponent,
    EditarTrabajoComponent,
    ListarTrabajoComponent,
    RegistrarTrabajoComponent,
    ListarHskillComponent,
    EditarHskillComponent,
    RegistrarHskillComponent,
    ListarSskillComponent,
    RegistrarSskillComponent,
    EditarSskillComponent,
    ListarProyectoComponent,
    RegistrarProyectoComponent,
    EditarProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //Rutas de los componentes para el Router Outlet
    RouterModule.forRoot([
      {path:'login', component:LoginComponent},
      {path:'menu', component:MenuComponent},
      {path: '', redirectTo: '/login', pathMatch: 'full'},
    ]),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    // SweetAlert2Module.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
