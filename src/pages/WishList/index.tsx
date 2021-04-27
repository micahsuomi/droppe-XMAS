import React from 'react'

import useCarts from '../../hooks/useCarts'
import CartList from '../../components/CartList'

import './style.scss'

export default function WishList() {
  const [cartData] = useCarts()
  
  return (
    <div className="wish-list">
      <h1>Wish List</h1>
      <CartList data={cartData} />
    </div>
  )
}