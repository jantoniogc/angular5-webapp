import { AllActions, ADD_PROD } from './producto.actions';
import { Producto } from '../../app/Models/producto';

export const estadoInicial: Producto = {
  userId: 0,
  id: 0,
  body: '',
  title: ''
};

export function prodReducer(state = null, action: AllActions): Producto {
  if (action === null) {
    return state;
  }
  switch (action.type) {
    case ADD_PROD: {
      return action.producto;
    }
    default: {
      return state;
    }
  }
}
