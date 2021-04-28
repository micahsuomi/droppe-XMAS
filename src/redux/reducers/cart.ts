import {
  CartState,
  CartActions,
  GET_CARTS,
  REMOVE_CART_PRODUCT,
  Cart,
} from '../../types'

export default function cart(
  state: CartState = {
    carts: [],
    cart: {} as Cart,
    approvedCarts: [],
    disregardedCarts: [],
  },
  action: CartActions
): CartState {
  switch (action.type) {
  case GET_CARTS: {
    const { carts } = action.payload
    return {
      ...state,
      carts: carts,
    }
  }
  case REMOVE_CART_PRODUCT: {
    const { cart } = action.payload
    const foundIndex = state.carts.findIndex((c: any) => c.id === cart.id)
    // if (foundIndex >= 0) {
    state.carts.slice(foundIndex, 1).push(cart)
    return {
      ...state,
      carts: [...state.carts],
    }
    // }
    // return state
  }

  default:
    return state
  }
}
