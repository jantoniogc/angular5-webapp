import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = 'Error!! Página no encontrada';
  }

  ngOnInit() {
    console.log('Se ha cargado el componente ErrorComponent');
  }

}
