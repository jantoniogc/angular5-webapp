import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GLOBAL } from './Services/global';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SetFilterAction } from 'angular-web-template/src/redux/filter/filter.actions';
import { AppState } from 'angular-web-template/src/redux/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public title = 'Productos Angular 5';
  public header_color: string;
  constructor() {
    this.header_color = GLOBAL.header_color;
  }

  ngOnInit() {

  }

}
