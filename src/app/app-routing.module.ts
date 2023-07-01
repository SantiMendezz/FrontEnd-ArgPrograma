import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarEducacionComponent } from './educacion/registrar-educacion/registrar-educacion.component';
import { EditarEducacionComponent } from './educacion/editar-educacion/editar-educacion.component';
import { RegistrarPersonaComponent } from './persona/registrar-persona/registrar-persona.component';
import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component';
import { RegistrarTrabajoComponent } from './trabajo/registrar-trabajo/registrar-trabajo.component';
import { EditarTrabajoComponent } from './trabajo/editar-trabajo/editar-trabajo.component';
import { RegistrarHskillComponent } from './hard-skill/registrar-hskill/registrar-hskill.component';
import { EditarHskillComponent } from './hard-skill/editar-hskill/editar-hskill.component';
import { RegistrarSskillComponent } from './soft-skill/registrar-sskill/registrar-sskill.component';
import { EditarSskillComponent } from './soft-skill/editar-sskill/editar-sskill.component';
import { RegistrarProyectoComponent } from './proyecto/registrar-proyecto/registrar-proyecto.component';
import { EditarProyectoComponent } from './proyecto/editar-proyecto/editar-proyecto.component';

//Agregamos las rutas de los componentes
const routes: Routes = [
  // {path : 'menu',component:MenuComponent},
  // {path:'',redirectTo:'menu',pathMatch:'full'}
  {path : 'registrar-educacion', component: RegistrarEducacionComponent},
  {path : 'editar-persona/:id', component: EditarPersonaComponent},

  {path : 'registrar-educacion', component: RegistrarPersonaComponent},
  {path : 'editar-educacion/:id', component: EditarEducacionComponent},

  {path : 'registrar-hard-skill', component: RegistrarHskillComponent},
  {path : 'editar-hard-skill/:id', component: EditarHskillComponent},

  {path : 'registrar-soft-skill', component: RegistrarSskillComponent},
  {path : 'editar-soft-skill/:id', component: EditarSskillComponent},

  {path : 'registrar-trabajo', component: RegistrarTrabajoComponent},
  {path : 'editar-trabajo/:id', component: EditarTrabajoComponent},

  {path : 'registrar-proyecto', component: RegistrarProyectoComponent},
  {path : 'editar-proyecto/:id', component: EditarProyectoComponent},

  //{path : 'login', component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
