import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo: string;
  constructor() {
    this.titulo = 'Webapp de productos con angular 4';
  }

  ngOnInit() {
    console.log('Se ha cargado el componente home');
  }

}
