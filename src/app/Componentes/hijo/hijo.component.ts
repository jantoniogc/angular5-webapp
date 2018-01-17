import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  public titulo: string;
  @Input() prop1: string;
  @Input() prop2: string;

  @Output() salida_desde_hijo = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    this.titulo = 'Componente Hijo';
    console.log(this.prop1);
    console.log(this.prop2);
  }

  enviar() {
    this.salida_desde_hijo.emit({
      nombre: 'Juan Antonio desde el hijo al padre',
      web: 'www.opencanarias.es'
    });
  }
}
