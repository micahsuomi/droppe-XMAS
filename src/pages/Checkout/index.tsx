import React from 'react'
import { NavLink } from 'react-router-dom'

import useCheckoutCarts from '../../hooks/useCheckoutCarts'
import CartList from '../../components/CartList'

import './style.scss'

export default function Checkout() {
  const [discardedCartData, dataApproved] = useCheckoutCarts()
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout__approved">
        <h4>Approved Carts</h4>
        <CartList cartData={dataApproved} checkout />
      </div>
      <div className="checkout__discarded">
        <h4>Discarded Cards</h4>
        <CartList cartData={discardedCartData} checkout />
      </div>
      <NavLink to ="/wishlist">Back to Wishlist</NavLink>
    </div>
  )
}
