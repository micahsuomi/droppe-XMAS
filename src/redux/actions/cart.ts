import { Dispatch } from 'redux'

import {
  GET_CARTS,
  REMOVE_CART_PRODUCT,
  REMOVE_CART,
  Cart,
  CartActions,
  Product,
  ProductInCart,
} from '../../types'

export function getCarts(carts: Cart[]): CartActions {
  return {
    type: GET_CARTS,
    payload: {
      carts,
    },
  }
}

export function removeCartProduct(
  cart: Cart,
  approvedCartProducts: ProductInCart[],
  dismissedCartProduct: ProductInCart | undefined
): CartActions {
  return {
    type: REMOVE_CART_PRODUCT,
    payload: {
      cart,
      approvedCartProducts,
      dismissedCartProduct,
    },
  }
}

export function removeCart(cart: Cart): CartActions {
  return {
    type: REMOVE_CART,
    payload: {
      cart,
    },
  }
}

export function getAllCarts() {
  return async (dispatch: Dispatch) => {
    const url = 'https://fakestoreapi.com/carts?limit=5'
    const res = await fetch(url)
    const data = await res.json()    
    dispatch(getCarts(data))
  }
}

export function removeProductFromCart(
  cart: Cart,
  approvedCartProducts: ProductInCart[],
  dismissedCartProduct?: ProductInCart | undefined
) {
  return async (dispatch: Dispatch) => {
    dispatch(removeCartProduct(cart, approvedCartProducts, 
      dismissedCartProduct
    ))
  }
}

export function deleteCart(cart: Cart) {
  return async (dispatch: Dispatch) => {
    const url = 'https://fakestoreapi.com/carts?limit=5'
    const res = await fetch(url)
    const data = await res.json()
    const foundCart = await data.find((c: Cart) => c.id === cart.id)
    dispatch(removeCart(foundCart))
  }
}
