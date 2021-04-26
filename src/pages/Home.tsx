import React from 'react'
import { NavLink } from 'react-router-dom'

import useCarts from '../hooks/useCarts'
import useProducts from '../hooks/useProducts'
import useWishListCart from '../hooks/useWishListCart'

export default function Home() {
  const [cartData] = useCarts()
  const [productData] = useProducts()
  const [wishListData] = useWishListCart()

  console.log(cartData )
  console.log(productData)
  console.log(wishListData)
  /*
  useEffect(() => {
    cartData && cartData.forEach((cart: any) => {
      cart.products.forEach((cartProduct: any) => {
        productData.forEach((product: any) => {
          if(cartProduct.productId === product.id) {
            console.log('these are matching', cartProduct, product)
          }
        })
      })
     
    })
    
  }, [cartData, productData])*/
  return (
    <>
      <h1>Droppe XMAS</h1>
      <h2>An intuitive Cart Shopping Experience</h2>
      <NavLink to ="/wishlist">Enter</NavLink>

    </>
  )
}
