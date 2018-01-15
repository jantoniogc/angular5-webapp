import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import { productosReducer } from './productos/productos.reducer';
import { filterReducer } from 'angular-web-template/src/redux/filter/filter.reducer';
import { prodReducer } from './producto/producto.reducer';

export const AppReducer: ActionReducerMap<AppState> = {
  productos: productosReducer,
  producto: prodReducer,
  filter: filterReducer
};
