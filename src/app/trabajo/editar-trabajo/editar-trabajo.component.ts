import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajo } from 'src/app/Modelo/Trabajo';
import { TrabajoService } from 'src/app/service/trabajo.service';

@Component({
  selector: 'app-editar-trabajo',
  templateUrl: './editar-trabajo.component.html',
  styleUrls: ['./editar-trabajo.component.css']
})
export class EditarTrabajoComponent implements OnInit {
  id:number;
  trabajo:Trabajo;

  constructor(private route:ActivatedRoute,private trabajoService:TrabajoService, private router:Router) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.trabajo = new Trabajo();
      this.trabajoService.obtenerTrabajoPorId(this.id).subscribe(data => {
        this.trabajo = data;
      });
  }

  actualizarTrabajo(){
    this.trabajoService.actualizarTrabajo(this.trabajo).subscribe(data => {
      console.log(data);
      this.router.navigate(['menu']);
    });
  }

}
