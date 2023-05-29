import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  //Construimos un route privado
  constructor(private router: Router) {}

  //Declaramos los metodos click y los hacemos navegar a la ruta establecida en app-routing.module.ts
    Listar(){
      this.router.navigate(["listar"]);
    }
  
    Nuevo(){
      this.router.navigate(["add"]);
    }
  
}
