import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

import useCarts from '../../hooks/useCarts'
import useWishListCart from '../../hooks/useWishListCart'
import CartList from '../../components/CartList'
import Button from '../../components/Button'

import './style.scss'

export default function Checkout() {
  const [cartData] = useCarts()
  const [discardedCartData, dataApproved] = useWishListCart()
  const [discardedItems, setDiscardedItems] = useState(false)
  const [loadData, setLoadData] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoadData(true)
    }, 4000)
  }, [])
  console.log('cartData', cartData)
  console.log('dataApproved', dataApproved)
  console.log('discardedCartData', discardedCartData)
  console.log(discardedCartData.length)
  const showDiscardedItems = () => {
    setDiscardedItems(!discardedItems)
  }
  return (
    <div className="wish-list">
      <h1>Checkout</h1>
      {!discardedItems ? (
        <>
          <p>Approved Carts</p>
          <div>
            <CartList cartData={cartData} checkout />
          </div>
        </>
      ) : (
        <>
          <h2>Discarded Items</h2>
          <CartList cartData={discardedCartData} checkout />
        </>
      )}
      {discardedCartData.length > 0 && <button onClick={showDiscardedItems}>Show Discarded Items</button> }
      <NavLink to="/checkout">
        <Button
          backgroundColor="secondary"
          size="lg"
          text="Proceed to Payment"
        />
      </NavLink>
    </div>
  )
}
