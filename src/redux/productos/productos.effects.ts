import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import {
  REQUEST_PRODUCTOS,
  AddProductosAction,
  RequestProductosAction,
} from './productos.actions';

import { mergeMap, map } from 'rxjs/operators';
import { ProductoService } from '../../app/Services/producto.service';

@Injectable()
export class ProductosEffects {
  @Effect()
  requestProductos$: Observable<Action> = this.actions$
    .ofType(REQUEST_PRODUCTOS)
    .pipe(
      mergeMap((action: RequestProductosAction) => {
        return this.productosService.getProductos().pipe(
          map((response: any) => {
            console.log(response);
            return new AddProductosAction(response);
          })
        );
      })
    );

  constructor(
    private productosService: ProductoService,
    private actions$: Actions
  ) {}
}
