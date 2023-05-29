import { Component, OnInit} from '@angular/core';
import { Persona } from 'src/app/Modelo/Persona';
import { PersonaService } from 'src/app/service/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.css']
})
export class RegistrarPersonaComponent implements OnInit {
  persona:  Persona = new Persona();

  constructor(private personaServicio:PersonaService,private router: Router) {};

  ngOnInit(): void {

  }

  //Llamamos al servicio para que envie la educacion al BackEnd
  guardarPersona() {
     this.personaServicio.registrarPersona(this.persona).subscribe(data => {
       console.log(data);
       this.irALaListaDePersona();
      },error => console.log(error));
    console.log(this.persona);
  }

  //Me redirige a la pagina inicial una vez ingresada la Educacion
  irALaListaDePersona(){
    this.router.navigate(['/menu']);
  } 

  onSubmit() {
    this.guardarPersona();
  }
}
