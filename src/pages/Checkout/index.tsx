import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import useCheckoutCarts from '../../hooks/useCheckoutCarts'
import CartList from '../../components/CartList'
import Button from '../../components/Button'
import { Cart } from '../../types'

import './style.scss'

export default function Checkout() {
  const [discardedCartData, dataApproved] = useCheckoutCarts() as any
  const [showDiscarded, setShowDiscarded] = useState(false)

  useEffect(() => {
    discardedCartData.forEach((cart: Cart) => {
      if(cart && cart.products.length > 0) {
        setShowDiscarded(true)
      }
    })
  }, [discardedCartData])
  
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="checkout__approved">
        <h4>Approved Carts</h4>
        <CartList cartData={dataApproved} checkout />
      </div>
      { showDiscarded && 
      <div className="checkout__discarded">
        <h4>Discarded Cards</h4>
        <CartList cartData={discardedCartData} checkout />
      </div>
      }
      <NavLink to ="/wishlist">
        <Button 
          size="lg"
          backgroundColor="secondary"
          text="Back to Wishlist"
          withMargin
          withIcon
        />
      </NavLink>
    </div>
  )
}
