import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Soft_Skill } from 'src/app/Modelo/Soft_Skill';
import { SoftSkillService } from 'src/app/service/soft-skill.service';

@Component({
  selector: 'app-registrar-sskill',
  templateUrl: './registrar-sskill.component.html',
  styleUrls: ['./registrar-sskill.component.css']
})
export class RegistrarSskillComponent {
  skill:  Soft_Skill = new Soft_Skill();

  constructor(private skillService: SoftSkillService,private router: Router) {};

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
