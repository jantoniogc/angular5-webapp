import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public titulo: string;
  public datos_hijo;
  public dato_externo = 'Juan Antonio';
  public identity = {
    id: 1,
    web: 'www.opencanarias.es',
    tematica: 'Desarrollo Web'
  };

  constructor() {
    this.titulo = 'Webapp de Productos con Angular 5';
  }

  ngOnInit() {
    console.log('Se ha cargado el componente home');
  }

  recibirDatos(event) {
    this.datos_hijo = event;
    console.log(event.nombre);
  }
}
