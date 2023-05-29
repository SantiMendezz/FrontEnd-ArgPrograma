import { Component, OnInit} from '@angular/core';
import { Educacion } from 'src/app/Modelo/Educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-educacion',
  templateUrl: './registrar-educacion.component.html',
  styleUrls: ['./registrar-educacion.component.css']
})
export class RegistrarEducacionComponent implements OnInit {
  educacion:  Educacion = new Educacion();

  constructor(private educacionServicio:EducacionService,private router: Router) {};

  ngOnInit(): void {

  }

  //Llamamos al servicio para que envie la educacion al BackEnd
  guardarEducacion() {
     this.educacionServicio.registrarEducacion(this.educacion).subscribe(data => {
       console.log(data);
       this.irALaListaDeEducacion();
      },error => console.log(error));
    console.log(this.educacion);
  }

  //Me redirige a la pagina inicial una vez ingresada la Educacion
  irALaListaDeEducacion(){
    this.router.navigate(['/menu']);
  } 

  onSubmit() {
    this.guardarEducacion();
  }
}
