import { Action } from '@ngrx/store';

import { Producto } from '../../app/Models/producto';

export const REQUEST_PROD = '[PROD] REQUEST_PROD';
export const ADD_PROD = '[PROD] ADD_PROD';
export const EDIT_PROD = '[PROD] EDIT PROD';
export const DELETE_PROD = '[PROD] DELETE PROD';


export class RequestProdAction implements Action {
  readonly type = REQUEST_PROD;

  constructor(
    public userId: number,
    public id: number
  ) {}
}

export class AddProdAction implements Action {
  readonly type = ADD_PROD;

  constructor(
    public producto: Producto
  ) {
  }
}

export class EditProdAction implements Action {
  readonly type = EDIT_PROD;

  constructor(
    public producto: Producto
  ) {}
}

export class DeleteProdAction implements Action {
  readonly type = DELETE_PROD;

  constructor(
    public producto: Producto
  ) {}
}


export type AllActions = RequestProdAction | AddProdAction | EditProdAction | DeleteProdAction;
