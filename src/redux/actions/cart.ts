import { Dispatch } from 'redux'

import {
  GET_CARTS,
  Cart,
  CartActions
} from '../../types'


export function getCarts(carts: Cart[]): CartActions {
  return {
    type: GET_CARTS,
    payload: {
      carts,
    },
  }
}

// Async action processed by redux-thunk middleware
export function getAllCarts() {
  return async (dispatch: Dispatch) => {
    const url = 'https://fakestoreapi.com/carts?limit=5'
    const res = await fetch(url)
    const data = await res.json()
    dispatch(getCarts(data))
  }
}
