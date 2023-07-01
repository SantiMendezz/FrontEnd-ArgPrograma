import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hard_Skill } from 'src/app/Modelo/Hard_Skill';
import { HardSkillService } from 'src/app/service/hard-skill.service';

@Component({
  selector: 'app-editar-hskill',
  templateUrl: './editar-hskill.component.html',
  styleUrls: ['./editar-hskill.component.css']
})
export class EditarHskillComponent {
  id:number;
  skill:Hard_Skill;

  constructor(private route:ActivatedRoute,private hardSkillService:HardSkillService, private router:Router) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.skill = new Hard_Skill();
      this.hardSkillService.obtenerSkillPorId(this.id).subscribe(data => {
        this.skill = data;
      });
  }

  actualizarHardSkill(){
    this.hardSkillService.actualizarSkill(this.skill).subscribe(data => {
      console.log(data);
      this.router.navigate(['menu']);
    });
  }
}
