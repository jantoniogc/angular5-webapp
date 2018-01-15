import { AllActions, ADD_PRODUCTOS} from './productos.actions';
import { Producto } from '../../app/Models/producto';

export function productosReducer(state: Producto[] = [], action: AllActions): Producto[] {
  if (action === null) {
    return state;
  }
  switch (action.type) {
    case ADD_PRODUCTOS: {
      console.log('action.productos' + action.productos);
      return action.productos;
    }
    default: {
      return state;
    }
  }
}
