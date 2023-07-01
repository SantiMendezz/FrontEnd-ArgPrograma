import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajo } from 'src/app/Modelo/Trabajo';
import { TrabajoService } from 'src/app/service/trabajo.service';

@Component({
  selector: 'app-registrar-trabajo',
  templateUrl: './registrar-trabajo.component.html',
  styleUrls: ['./registrar-trabajo.component.css']
})
export class RegistrarTrabajoComponent implements OnInit {
  trabajo:  Trabajo = new Trabajo();

  constructor(private trabajoServicio:TrabajoService,private router: Router) {};

  ngOnInit(): void {

  }

  //Llamamos al servicio para que envie la educacion al BackEnd
  guardarTrabajo() {
     this.trabajoServicio.registrarTrabajo(this.trabajo).subscribe(data => {
       console.log(data);
       this.irALListaDeTrabajo();
      },error => console.log(error));
    console.log(this.trabajo);
  }

  //Me redirige a la pagina inicial una vez ingresada la Educacion
  irALListaDeTrabajo(){
    this.router.navigate(['/menu']);
  } 

  onSubmit() {
    this.guardarTrabajo();
  }
}
