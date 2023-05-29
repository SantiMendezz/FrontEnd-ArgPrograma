// import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Modelo/Educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-listar-educacion',
  templateUrl: './listar-educacion.component.html',
  styleUrls: ['./listar-educacion.component.css']
})
export class ListarEducacionComponent implements OnInit {
  educacion:Educacion[];

  constructor(private educacionService: EducacionService,private router: Router, private loginService: LoginService) {};

  //Llamo al metodo una sola vez al ejecutar al App
  ngOnInit(): void {
    this.obtenerEducacion();
  }
  
  eliminarEducacion(id:number){
    if(confirm("Esta seguro de la eliminacion?")) {
      this.educacionService.eliminarEducacion(id).subscribe(dato => {
        console.log(dato);
        this.obtenerEducacion();
      })
    }
  }

  //Obtengo los datos del Metodo de Servicio
  private obtenerEducacion() {
    this.educacionService.obtenerListaEducacion().subscribe(data => {
      this.educacion = data;
    })
  }

  verEdicionDeEducacion(id:number){
    this.router.navigate(['editar-educacion',id]);
  }

  cerrarSesion(){
    this.loginService.logoutUser();
  }

  comprobarSesion() {
    return this.loginService.consultarSesion();
  }
}
