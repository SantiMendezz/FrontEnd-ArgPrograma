import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Hard_Skill } from 'src/app/Modelo/Hard_Skill';
import { HardSkillService } from 'src/app/service/hard-skill.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-hskill',
  templateUrl: './listar-hskill.component.html',
  styleUrls: ['./listar-hskill.component.css']
})
export class ListarHskillComponent {
  skill:Hard_Skill[];

  constructor(private skillService: HardSkillService,private router: Router, private loginService: LoginService) {};

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
    this.router.navigate(['editar-hard-skill',id]);
  }

  cerrarSesion(){
    this.loginService.logoutUser();
  }

  comprobarSesion() {
    return this.loginService.consultarSesion();
  }
}
