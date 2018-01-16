import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";

import {
  REQUEST_PROD,
  AddProdAction,
  RequestProdAction,
  EditProdAction,
  EDIT_PROD
} from "./producto.actions";

import { mergeMap, map } from "rxjs/operators";
import { ProductoService } from "../../app/Services/producto.service";
import { Producto } from "../../app/Models/producto";

@Injectable()
export class ProductoEffects {
  @Effect()
  requestProd$: Observable<Action> = this.actions$.ofType(REQUEST_PROD).pipe(
    mergeMap((action: RequestProdAction) => {
      return this.productosService.getProducto(action.userId, action.id).pipe(
        map((response: any) => {
          console.log(response[0]);
          return new AddProdAction(response[0]);
        })
      );
    })
  );

  @Effect()
  editProd$: Observable<Action> = this.actions$.ofType(EDIT_PROD).pipe(
    mergeMap((action: EditProdAction) => {
      return this.productosService.editProducto(action.producto).pipe(
        map((response: Producto) => {
          console.log(response[0]);
          return new RequestProdAction(response.userId, response.id);
        })
      );
    })
  );

  constructor(
    private productosService: ProductoService,
    private actions$: Actions
  ) {}
}
