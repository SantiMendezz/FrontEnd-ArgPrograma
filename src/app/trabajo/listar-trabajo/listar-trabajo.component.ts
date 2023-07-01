import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajo } from 'src/app/Modelo/Trabajo';
import { LoginService } from 'src/app/service/login.service';
import { TrabajoService } from 'src/app/service/trabajo.service';

@Component({
  selector: 'app-listar-trabajo',
  templateUrl: './listar-trabajo.component.html',
  styleUrls: ['./listar-trabajo.component.css']
})
export class ListarTrabajoComponent implements OnInit {
  trabajo:Trabajo[];

  constructor(private trabajoService: TrabajoService,private router: Router, private loginService: LoginService) {};

  //Llamo al metodo una sola vez al ejecutar al App
  ngOnInit(): void {
    this.obtenerTrabajo();
  }
  
  //Mediante el confirm se utiliza la alert propia de js
  eliminarTrabajo(id:number){
    if(confirm("Esta seguro de la eliminacion?")) {
      this.trabajoService.eliminarTrabajo(id).subscribe(dato => {
        console.log(dato);
        this.obtenerTrabajo();
      })
    }
  }

  //Obtengo los datos del Metodo de Servicio
  private obtenerTrabajo() {
    this.trabajoService.obtenerListaTrabajo().subscribe(data => {
      this.trabajo = data;
    })
  }

  verEdicionDeTrabajo(id:number){
    this.router.navigate(['editar-trabajo',id]);
  }

  cerrarSesion(){
    this.loginService.logoutUser();
  }

  comprobarSesion() {
    return this.loginService.consultarSesion();
  }
}
