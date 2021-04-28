import React, { useState, useEffect } from 'react'
import {useSelector,  useDispatch } from 'react-redux'

import { AppState, Product } from '../types'
import { getAllCarts } from '../redux/actions/cart'
import { getAllProducts } from '../redux/actions/product'

export default function useWishListCart() {
  const dispatch = useDispatch()
  const carts = useSelector((state: AppState) => state.cart.carts)
  const products = useSelector((state: AppState) => state.product.products)

  const [err, setErr] = useState('')
  const [data, setData] = useState(Array)
  const [product, setProduct] = useState({} as Product)

  useEffect(() => {
    if(err) {
      setErr('error loading data')
    }
    const wishList = carts && carts.forEach((cart: any) => {
      cart.products.forEach((cartProduct: any) => {
        products.forEach((product: any) => {
          
          if(cartProduct.productId === product.id) {
            // console.log('these are matching', cartProduct, product)
            // setProduct(product)
            // cart.products.push(product)
          }
        })
      })
       
    })
    console.log(wishList)
    // setData(wishList)
  }, [carts, err, products, product])

  return [data]
}
