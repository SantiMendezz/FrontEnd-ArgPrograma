import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/service/skill.service';
import { Skill } from 'src/app/Modelo/Skill';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-skill',
  templateUrl: './listar-skill.component.html',
  styleUrls: ['./listar-skill.component.css']
})
export class ListarSkillComponent implements OnInit {
  skill:Skill[];

  constructor(private skillService: SkillService,private router: Router, private loginService: LoginService) {};

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
    this.router.navigate(['editar-skill',id]);
  }

  cerrarSesion(){
    this.loginService.logoutUser();
  }

  comprobarSesion() {
    return this.loginService.consultarSesion();
  }
}
