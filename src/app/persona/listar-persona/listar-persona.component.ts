// import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {
  persona:Persona[];

  constructor(private personaService: PersonaService,private router: Router, private loginService: LoginService) {};

  //Llamo al metodo una sola vez al ejecutar al App
  ngOnInit(): void {
    this.obtenerPersona();
  }

  eliminarPersona(id:number){
    if(confirm("Esta seguro de eliminar a la persona?")) {
      this.personaService.eliminarPersona(id).subscribe(dato => {
        console.log(dato);
        this.obtenerPersona();
      })
    }
  }

  //Obtengo los datos del Metodo de Servicio
  private obtenerPersona() {
    this.personaService.obtenerListaPersona().subscribe(data => {
      this.persona = data;
    })
  }

  checkearPersona():Boolean{
    if(this.personaService.obtenerListaPersona().subscribe(data => {
      this.persona = data;
    }) == null){
      return true;
    } else {
      return false;
    }
  }

  verEdicionDePersona(id:number){
    this.router.navigate(['editar-persona',id]);
  }

  cerrarSesion(){
    this.loginService.logoutUser();
  }

  comprobarSesion() {
    return this.loginService.consultarSesion();
  }
}
