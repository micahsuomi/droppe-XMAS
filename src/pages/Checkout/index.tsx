import React from 'react'
import { NavLink } from 'react-router-dom'

import useCheckoutCarts from '../../hooks/useCheckoutCarts'
import CartList from '../../components/CartList'
import Button from '../../components/Button'

import './style.scss'

export default function Checkout() {
  const [discardedCartData, dataApproved] = useCheckoutCarts()
  console.log('dataApproved', dataApproved)
  console.log('discardedCartData', discardedCartData)
  console.log(discardedCartData.length)
  
  return (
    <div className="wish-list">
      <h1>Checkout</h1>
      <div>
        <h4>Approved Carts</h4>
        <CartList cartData={dataApproved} checkout />
      </div>
      <div>
        <h2>Discarded Items</h2>
        <CartList cartData={discardedCartData} checkout /> 
      </div>
      {/* <NavLink to="/checkout">
        <Button
          backgroundColor="secondary"
          size="lg"
          text="Proceed to Payment"
        />
      </NavLink> */}
    </div>
  )
}
