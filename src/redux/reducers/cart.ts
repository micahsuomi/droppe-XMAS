import {
  CartState,
  CartActions,
  GET_CARTS,
} from '../../types'
  
export default function cart(
  state: CartState = {
    carts: [],
  },
  action: CartActions
): CartState {
  switch (action.type) {
  case GET_CARTS: {
    const { carts } = action.payload
    return {
      ...state,
      carts: carts
    }
  }
  
  default:
    return state
  }
}
  