import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-perfil-a',
  standalone: true,
  imports: [],
  templateUrl: './perfil-a.component.html',
  styleUrl: './perfil-a.component.css',
  styles: [
    `
    :host {
      display:block;
      background-color: aliceblue;
    }
  `,
  ],
})

export class PerfilAComponent {
  constructor(private AppComponent: AppComponent, private router: Router) {}

  openDialogPerfil() {
    this.AppComponent.openDialog();
  }

  /*Funciones de navegación*/
  navegarPAmigos() {
    this.router.navigate(['/pamigos']);
  }
  navegarPerfilA(){
    this.router.navigate(["/perfA"]);
  }
  navegarMain(){
    this.router.navigate(["/inicio"]);
  }
  navegarLogin(){
    this.router.navigate(["/login"]);
  }
  navegarSettings(){
    this.router.navigate(["/settings"])
  }
}

/*export class CompAComponent {
  
}*/

