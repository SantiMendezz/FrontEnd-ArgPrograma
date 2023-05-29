import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Educacion } from 'src/app/Modelo/Educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {
  id:number;
  educacion:Educacion;

  constructor(private route:ActivatedRoute,private educacionService:EducacionService, private router:Router) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.educacion = new Educacion();
      this.educacionService.obtenerEducacionPorId(this.id).subscribe(data => {
        this.educacion = data;
      });
  }

  actualizarEducacion(){
    this.educacionService.actualizarEducacion(this.educacion).subscribe(data => {
      console.log(data);
      this.router.navigate(['menu']);
    });
  }

}

