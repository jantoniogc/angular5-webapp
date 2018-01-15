import { Producto } from '../app/Models/producto';

export interface AppState {
  productos: Producto[];
  producto: Producto;
  filter: string;
}
