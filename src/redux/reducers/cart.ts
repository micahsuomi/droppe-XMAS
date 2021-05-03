import {
  CartState,
  CartActions,
  GET_CARTS,
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
    console.log(carts)
    // const disregardedEmpty = disregardedCartsArr.forEach((cart) => cart.products = emptyCartProducts)
    // console.log(disregardedEmpty)
    return {
      ...state,
      carts: carts,
    }
  }
  case REMOVE_CART_PRODUCT: {
    const { cart, approvedCartProducts, 
      dismissedCartProduct 
    } = action.payload
    console.log('approved reducer', approvedCartProducts)
    console.log('dismissed', dismissedCartProduct)
    const foundIndex = state.carts.findIndex((c: any) => c.id === cart.id)
    const foundCartApprove = state.carts.find((c: any) => c.id === cart.id)
    const foundCartDiscard = state.carts.find((c: any) => c.id === cart.id)
    console.log(foundCartDiscard)
    foundCartApprove.products = approvedCartProducts
    // foundCartDiscard.products.push(dismissedCartProduct)
    // const filterCartDiscard = foundCartDiscard.products.filter((p: any) => p.productId === dismissedCartProduct?.productId)
    // console.log(filterCartDiscard)
    // foundCart.products.push(dismissedCartProduct)
    // if (foundIndex >= 0) {
    state.carts.slice(foundIndex, 1).push(cart)
    return {
      ...state,
      carts: [...state.carts],
      approvedCarts: [...state.carts],
      // disregardedCarts: [...state.disregardedCarts, filterCartDiscard]
    }
    // }
    // return state
  }
  case REMOVE_CART: {
    const { cart } = action.payload
    return {
      ...state,
      carts: state.carts.filter((c: Cart) => c.id !== cart.id),
      disregardedCarts: [...state.disregardedCarts, cart]
    }
  }

  default:
    return state
  }
}
