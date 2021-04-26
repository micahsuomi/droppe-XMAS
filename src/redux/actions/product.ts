import { Dispatch } from 'redux'

import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  ProductActions,
  Product,
  GET_PRODUCTS,
} from '../../types'

export function getProducts(products: Product[]): ProductActions {
  return {
    type: GET_PRODUCTS,
    payload: {
      products,
    },
  }
}

export function addProduct(product: Product): ProductActions {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  }
}

export function removeProduct(product: Product): ProductActions {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

// Async action processed by redux-thunk middleware
export function getAllProducts() {
  return async (dispatch: Dispatch) => {
    const url = 'https://fakestoreapi.com/products'
    const res = await fetch(url)
    const data = await res.json()
    dispatch(getProducts(data))
  }
}

// Async action processed by redux-thunk middleware
export function fetchProduct(productId: string) {
  return (dispatch: Dispatch) => {
    return fetch(`products/${productId}`)
      .then(resp => resp.json())
      .then(product => {
        dispatch(addProduct(product))
      })
  }
}
