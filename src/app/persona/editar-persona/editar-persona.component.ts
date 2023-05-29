import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/Modelo/Persona';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  id:number;
  persona:Persona;

  constructor(private route:ActivatedRoute,private personaService:PersonaService, private router:Router) {}

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.persona = new Persona();
      this.personaService.obtenerPersonaPorId(this.id).subscribe(data => {
        this.persona = data;
      });
  }

  actualizarPersona(){
    this.personaService.actualizarPersona(this.persona).subscribe(data => {
      console.log(data);
      this.router.navigate(['menu']);
    });
  }
}
