import React from 'react'
import { NavLink } from 'react-router-dom'

import useCarts from '../../hooks/useCarts'
import useProducts from '../../hooks/useProducts'
import useWishListCart from '../../hooks/useWishListCart'

import './style.scss'

export default function Home() {
  const [cartData] = useCarts()
  const [productData] = useProducts()
  const [wishListData] = useWishListCart()

  console.log(cartData )
  console.log(productData)
  console.log(wishListData)

  return (
    <div className="home">
      <div className="home__wrapper">
        <h1>Droppe XMAS</h1>
        <h2>An intuitive Cart Shopping Experience</h2>
        <NavLink to ="/wishlist">Enter</NavLink>
      </div>
    </div>
  )
}
