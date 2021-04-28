import { Dispatch } from 'redux'

import {
  GET_CARTS,
  REMOVE_CART_PRODUCT,
  Cart,
  CartActions,
  Product
} from '../../types'


export function getCarts(carts: Cart[]): CartActions {
  return {
    type: GET_CARTS,
    payload: {
      carts,
    },
  }
}

export function removeCartProduct(cart: Cart): CartActions {
  return {
    type: REMOVE_CART_PRODUCT,
    payload: {
      cart
    },
  }
}

 
const buildCart = async (dataCart: any, dataProducts: any, dataUsers: any) => {
  await dataCart.map((cart: Cart) => {
    dataUsers.forEach((user: any) => {
      dataProducts.forEach((product: any) => {
        if(cart.userId === user.id) {
          cart.cartUser = user
        }
        cart.products.forEach((p) => {
          if(p.productId === product.id) {
            p.product = product
          }
        })
      })
    

    })
    return cart
    
  })
}
export function testAPIProduct() {
  return async (dispatch: Dispatch) => {
    const urlOne = 'https://fakestoreapi.com/carts?limit=5'
    const urlTwo = 'https://fakestoreapi.com/products'
    const urlUsers = 'https://fakestoreapi.com/users'
    const resOne = await fetch(urlOne)
    const resTwo = await fetch(urlTwo)
    const resUsers = await fetch(urlUsers)

    const dataCart = await resOne.json()
    const dataProducts = await resTwo.json()
    const dataUsers = await resUsers.json()
    const copiedDataCart = [...dataCart]
    const copiedDataProducts = [...dataProducts]
    const copiedDataUsers = [...dataUsers]

    const cartAPI = await buildCart(copiedDataCart, copiedDataProducts, copiedDataUsers)
    console.log(cartAPI)
    const builtCart = await dataCart.map((cart: Cart) => {
      dataUsers.forEach((user: any) => {
        dataProducts.forEach((product: any) => {
          if(cart.userId === user.id) {
            cart.cartUser = user
          }
          cart.products.forEach((p) => {
            if(p.productId === product.id) {
              p.product = product
            }
          })
        })

      })
      return cart
    })
    console.log('here is the cart', builtCart)

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

export function removeProductFromCart(cart: Cart, product: Product) {
  return async (dispatch: Dispatch) => {
    console.log(cart, product)
    dispatch(removeCartProduct(cart))
  }
}