import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hard_Skill } from 'src/app/Modelo/Hard_Skill';
import { HardSkillService } from 'src/app/service/hard-skill.service';

@Component({
  selector: 'app-registrar-hskill',
  templateUrl: './registrar-hskill.component.html',
  styleUrls: ['./registrar-hskill.component.css']
})
export class RegistrarHskillComponent {
  skill:  Hard_Skill = new Hard_Skill();

  constructor(private skillService: HardSkillService,private router: Router) {};

  ngOnInit(): void {
    
  }

  //Llamamos al servicio para que envie la educacion al BackEnd
  guardarSkill() {
     this.skillService.registrarSkill(this.skill).subscribe(data => {
       console.log(data);
       this.irALaListaDeSkill();
      },error => console.log(error));
    console.log(this.skill);
  }

  //Me redirige a la pagina inicial una vez ingresada la Educacion
  irALaListaDeSkill(){
    this.router.navigate(['/menu']);
  } 

  onSubmit() {
    this.guardarSkill();
  }
}
