import { Component } from '@angular/core';
import { SkillService } from 'src/app/service/skill.service';
import { Router } from '@angular/router';
import { Skill } from 'src/app/Modelo/Skill';
import { Tipo_Skill } from 'src/app/Modelo/Tipo_Skill';
import {Observable } from 'rxjs';

@Component({
  selector: 'app-registrar-skill',
  templateUrl: './registrar-skill.component.html',
  styleUrls: ['./registrar-skill.component.css']
})
export class RegistrarSkillComponent {
  skill:  Skill = new Skill();
  tipo_skills: Tipo_Skill[];

  constructor(private skillService: SkillService,private router: Router) {};

  ngOnInit(): void {
    this.queryTipoSkill();
  }

  //Llamamos al servicio para que envie la educacion al BackEnd
  guardarSkill() {
     this.skillService.registrarSkill(this.skill).subscribe(data => {
       console.log(data);
       this.irALaListaDeSkill();
      },error => console.log(error));
    console.log(this.skill);
  }

  queryTipoSkill() {
    this.skillService.obtenerListaTipoSkill().subscribe(data => {
      this.tipo_skills = data;
    })
  }

  //Me redirige a la pagina inicial una vez ingresada la Educacion
  irALaListaDeSkill(){
    this.router.navigate(['/menu']);
  } 

  onSubmit() {
    this.guardarSkill();
  }
}
