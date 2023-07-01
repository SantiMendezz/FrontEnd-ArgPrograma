import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelo/Proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-registrar-proyecto',
  templateUrl: './registrar-proyecto.component.html',
  styleUrls: ['./registrar-proyecto.component.css']
})
export class RegistrarProyectoComponent {
  proyecto:Proyecto = new Proyecto();
  @ViewChild('tercer_imagen') tercerImagen: any;
  @ViewChild('segundo_imagen') segundoImagen: any;
  @ViewChild('primer_imagen') primerImagen: any;

  constructor(private proyectoService: ProyectoService,private router: Router) {};

  ngOnInit(): void {
    
  }

  //Llamamos al servicio para que envie la educacion al BackEnd
  guardarProyecto() {
     this.proyectoService.registrarProyecto(this.proyecto).subscribe(data => {
       console.log(data);
       this.irALaListaDeProyecto();
      },error => console.log(error));
    console.log(this.proyecto);
  }

  //Me redirige a la pagina inicial una vez ingresada la Educacion
  irALaListaDeProyecto(){
    this.router.navigate(['/menu']);
  } 

  onSubmit() {
    this.guardarProyecto();
  }

  onFileChange(event: any, fieldName: string) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.proyecto[fieldName] = file;
    }
  }
  
}
