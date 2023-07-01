import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/Modelo/Proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent {
  id:number;
  proyecto:Proyecto;

  constructor(private route:ActivatedRoute,private proyectoService:ProyectoService, private router:Router) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.proyecto = new Proyecto();
      this.proyectoService.obtenerProyectoPorId(this.id).subscribe(data => {
        this.proyecto = data;
      });
  }

  actualizarProyecto(){
    this.proyectoService.actualizarProyecto(this.proyecto).subscribe(data => {
      console.log(data);
      this.router.navigate(['menu']);
    });
  }
}
