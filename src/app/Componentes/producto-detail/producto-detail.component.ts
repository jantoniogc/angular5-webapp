import { Component, OnInit, Input } from '@angular/core';
import { AppState } from '../../../redux/app.state';
import { Store } from '@ngrx/store';
import { ProductoService } from '../../Services/producto.service';
import { Producto } from '../../Models/producto';
import { Router, ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router/src/shared';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { RequestProdAction } from '../../../redux/producto/producto.actions';
import { getSelectorProducto } from '../../../redux/producto/producto.selector';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.scss'],
  providers: [ProductoService]
})
export class ProductoDetailComponent implements OnInit {
  @Input() producto: Producto;

  constructor(
    private _productoService: ProductoService,
    private _route: ActivatedRoute,
    private _router: Router,
    private store: Store<AppState>
  ) {
    this._route.params.forEach((params: Params) => {
      const userId = params['userId'];
      const id = params['id'];
      const action = new RequestProdAction(userId, id);
      this.store.dispatch(action);
    });

    this.store.select('producto').subscribe(v => this.producto = v);
  }

  ngOnInit() {
    console.log('Componente producto-detail cargado');
  }
}
