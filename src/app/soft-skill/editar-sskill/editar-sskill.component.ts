import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Soft_Skill } from 'src/app/Modelo/Soft_Skill';
import { SoftSkillService } from 'src/app/service/soft-skill.service';

@Component({
  selector: 'app-editar-sskill',
  templateUrl: './editar-sskill.component.html',
  styleUrls: ['./editar-sskill.component.css']
})
export class EditarSskillComponent {
  id:number;
  skill:Soft_Skill;

  constructor(private route:ActivatedRoute,private softSkillService:SoftSkillService, private router:Router) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.skill = new Soft_Skill();
      this.softSkillService.obtenerSkillPorId(this.id).subscribe(data => {
        this.skill = data;
      });
  }

  actualizarSoftSkill(){
    this.softSkillService.actualizarSkill(this.skill).subscribe(data => {
      console.log(data);
      this.router.navigate(['menu']);
    });
  }
}
