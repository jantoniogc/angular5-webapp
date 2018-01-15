import { Action } from '@ngrx/store';

import { Producto } from '../../app/Models/producto';
import { forEach } from '@angular/router/src/utils/collection';

export const REQUEST_PRODUCTOS = '[PRODUCTOS] REQUEST_PRODUCTOS';
export const ADD_PRODUCTOS = '[PRODUCTOS] ADD_PRODUCTOS';


export class RequestProductosAction implements Action {
  readonly type = REQUEST_PRODUCTOS;

  constructor() {}
}

export class AddProductosAction implements Action {
  readonly type = ADD_PRODUCTOS;

  constructor(
    public productos: Producto[]
  ) {
  }
}


export type AllActions = RequestProductosAction | AddProductosAction;
