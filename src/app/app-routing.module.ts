import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarEducacionComponent } from './educacion/registrar-educacion/registrar-educacion.component';
import { EditarEducacionComponent } from './educacion/editar-educacion/editar-educacion.component';
import { RegistrarPersonaComponent } from './persona/registrar-persona/registrar-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component';
import { RegistrarSkillComponent } from './skill/registrar-skill/registrar-skill.component';
import { EditarSkillComponent } from './skill/editar-skill/editar-skill.component';
import { LoginComponent } from './components/login/login.component';

//Agregamos las rutas de los componentes
const routes: Routes = [
  // {path : 'menu',component:MenuComponent},
  // {path:'',redirectTo:'menu',pathMatch:'full'}
  {path : 'registrar-educacion', component: RegistrarEducacionComponent},
  {path : 'editar-persona/:id', component: EditarPersonaComponent},

  {path : 'registrar-educacion', component: RegistrarPersonaComponent},
  {path : 'editar-educacion/:id', component: EditarEducacionComponent},

  {path : 'registrar-skill', component: RegistrarSkillComponent},
  {path : 'editar-skill/:id', component: EditarSkillComponent},

  //{path : 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
