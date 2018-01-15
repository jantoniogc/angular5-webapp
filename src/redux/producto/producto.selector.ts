import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { Producto } from '../../app/Models/producto';



export const selectProducto = (state: AppState) => state.producto;
export const selectFilter = (state: AppState) => state.filter;

export const getSelectorProducto = createSelector(
  selectProducto,
  selectFilter,
  (producto: Producto, filter: string) => {
    console.log(filter);
    if (filter === 'SHOW_ACTIVE') {
      return producto;
    }
    if (filter === 'SHOW_NOACTIVE') {
      return producto;
    }
    console.log(producto);
    return producto;
  }
);
