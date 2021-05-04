import {
  CartState,
  CartActions,
  GET_CARTS,
  GET_CARTS_DISMISSED,
  REMOVE_CART_PRODUCT,
  REMOVE_CART,
  Cart,
} from '../../types'

export default function cart(
  state: CartState = {
    carts: [],
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
  case GET_CARTS_DISMISSED: {
    const { carts } = action.payload
    return {
      ...state,
      disregardedCarts: carts
    }
  }
  case REMOVE_CART_PRODUCT: {
    const { cart, approvedCartProducts, 
      dismissedCartProduct 
    } = action.payload
    // console.log('approved reducer', approvedCartProducts)
    // console.log('dismissed', dismissedCartProduct)
    const foundIndex = state.carts.findIndex((c: any) => c.id === cart.id)
    const foundCartApprove = state.carts.find((c: any) => c.id === cart.id)
    const foundCartDiscard = state.disregardedCarts.find((c: any) => c.id === cart.id)
    foundCartApprove.products = approvedCartProducts
    state.carts.slice(foundIndex, 1).push(cart)
    foundCartDiscard?.products.push(dismissedCartProduct)
    console.log('from reducer', state.disregardedCarts)
    return {
      ...state,
      carts: [...state.carts],
      approvedCarts: [...state.carts],
      disregardedCarts: state.disregardedCarts
    }
  }
  case REMOVE_CART: {
    const { cart } = action.payload
    console.log(cart)
    return {
      ...state,
      carts: state.carts.filter((c: Cart) => c.id !== cart.id),
      approvedCarts: state.approvedCarts.filter((c: Cart) => c.id !== cart.id),
      disregardedCarts: [...state.disregardedCarts.filter((c: Cart) => c.id !== cart.id)]
    }
  }

  default:
    return state
  }
}
