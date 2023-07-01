import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Soft_Skill } from 'src/app/Modelo/Soft_Skill';
import { LoginService } from 'src/app/service/login.service';
import { SoftSkillService } from 'src/app/service/soft-skill.service';

@Component({
  selector: 'app-listar-sskill',
  templateUrl: './listar-sskill.component.html',
  styleUrls: ['./listar-sskill.component.css']
})
export class ListarSskillComponent {
  skill:Soft_Skill[];

  constructor(private skillService: SoftSkillService,private router: Router, private loginService: LoginService) {};

  //Llamo al metodo una sola vez al ejecutar al App
  ngOnInit(): void {
    this.obtenerSkill();
  }
  
  eliminarSkill(id:number){
    if(confirm("Esta seguro de la eliminacion?")) {
      this.skillService.eliminarSkill(id).subscribe(dato => {
        console.log(dato);
        this.obtenerSkill();
      })
    }
  }

  //Obtengo los datos del Metodo de Servicio
  private obtenerSkill() {
    this.skillService.obtenerListaSkill().subscribe(data => {
      this.skill = data;
    })
  }

  verEdicionDeSkill(id:number){
    this.router.navigate(['editar-soft-skill',id]);
  }

  cerrarSesion(){
    this.loginService.logoutUser();
  }

  comprobarSesion() {
    return this.loginService.consultarSesion();
  }
}
