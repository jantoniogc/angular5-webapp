import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { Profile } from 'selenium-webdriver/firefox';
import { Producto } from '../../app/Models/producto';



export const selectProductos = (state: AppState) => state.productos;
export const selectFilter = (state: AppState) => state.filter;

export const getVisiblesProductos = createSelector (
  selectProductos,
  selectFilter,
  (productos: Producto[], filter: string) => {
    if (filter === 'SHOW_ACTIVE') {
      return productos.filter(producto => (producto.userId === 1));
    }
    if (filter === 'SHOW_NOACTIVE') {
      return productos.filter(producto => (producto.userId === 2));
    }
    return productos;
  }
);
