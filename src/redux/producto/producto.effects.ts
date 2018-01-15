import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import {
  REQUEST_PROD,
  AddProdAction,
  RequestProdAction,
} from './producto.actions';

import { mergeMap, map } from 'rxjs/operators';
import { ProductoService } from '../../app/Services/producto.service';
import { Producto } from '../../app/Models/producto';

@Injectable()
export class ProductoEffects {
  @Effect()
  requestProd$: Observable<Action> = this.actions$
    .ofType(REQUEST_PROD)
    .pipe(
      mergeMap((action: RequestProdAction) => {
        return this.productosService.getProducto(action.userId, action.id).pipe(
          map((response: any) => {
            console.log(response);
            return new AddProdAction(response[0]);
          })
        );
      })
    );

  constructor(
    private productosService: ProductoService,
    private actions$: Actions
  ) {}
}
