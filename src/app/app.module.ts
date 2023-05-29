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
import { ListarSkillComponent } from './skill/listar-skill/listar-skill.component';
import { RegistrarSkillComponent } from './skill/registrar-skill/registrar-skill.component';
import { EditarSkillComponent } from './skill/editar-skill/editar-skill.component';
import { AuthInterceptor } from './helpers/auth.interceptor';

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
    ListarSkillComponent,
    RegistrarSkillComponent,
    EditarSkillComponent
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
    HttpClientModule
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
