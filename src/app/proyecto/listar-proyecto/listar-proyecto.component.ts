import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelo/Proyecto';
import { LoginService } from 'src/app/service/login.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-listar-proyecto',
  templateUrl: './listar-proyecto.component.html',
  styleUrls: ['./listar-proyecto.component.css']
})
export class ListarProyectoComponent {
  proyecto:Proyecto[];

  constructor(private proyectoService: ProyectoService,private router: Router, private loginService: LoginService) {};

  //Llamo al metodo una sola vez al ejecutar al App
  ngOnInit(): void {
    this.obtenerProyecto();
  }
  
  eliminarProyecto(id:number){
    if(confirm("Esta seguro de la eliminacion?")) {
      this.proyectoService.eliminarProyecto(id).subscribe(dato => {
        console.log(dato);
        this.obtenerProyecto();
      })
    }
  }

  //Obtengo los datos del Metodo de Servicio
  private obtenerProyecto() {
    this.proyectoService.obtenerListaProyecto().subscribe(data => {
      this.proyecto = data;
    })
  }

  verEdicionDeProyecto(id:number){
    this.router.navigate(['editar-proyecto',id]);
  }

  cerrarSesion(){
    this.loginService.logoutUser();
  }

  comprobarSesion() {
    return this.loginService.consultarSesion();
  }
}
