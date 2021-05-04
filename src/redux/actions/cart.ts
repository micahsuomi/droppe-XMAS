import { Dispatch } from 'redux'

import {
  GET_CARTS,
  GET_CARTS_DISMISSED,
  REMOVE_CART_PRODUCT,
  REMOVE_CART,
  Cart,
  CartActions,
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

export function getCartsDismissed(carts: Cart[]): CartActions {
  return {
    type: GET_CARTS_DISMISSED,
    payload: {
      carts,
    },
  }
}

export function removeCartProduct(
  cart: Cart,
  approvedCartProducts: ProductInCart[],
  dismissedCartProduct: ProductInCart
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

const url = 'https://fakestoreapi.com/carts?limit=5'

export function getAllCartsDismissed() {
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const data = await res.json()
    const copiedData = [...data]
    copiedData.map((cart) => cart.products.splice(0, cart.products.length))
    dispatch(getCartsDismissed(data))
  }
}

export function getAllCarts() {
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const data = await res.json()
    dispatch(getCarts(data))
  }
}

export function removeProductFromCart(
  cart: Cart,
  approvedCartProducts: ProductInCart[],
  dismissedCartProduct: ProductInCart
) {
  return async (dispatch: Dispatch) => {
    dispatch(
      removeCartProduct(cart, approvedCartProducts, dismissedCartProduct)
    )
  }
}

export function deleteCart(cart: Cart) {
  return async (dispatch: Dispatch) => {
    const res = await fetch(url)
    const data = await res.json()
    const foundCart = await data.find((c: Cart) => c.id === cart.id)
    dispatch(removeCart(foundCart))
  }
}
