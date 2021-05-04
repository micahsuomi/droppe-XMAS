import React, { useRef } from 'react'

import useUsers from '../../hooks/useUsers'
import CartItem from '../CartItem'
import { CartListProps } from '../../types'

import './style.scss'

export default function CartList({
  cartData,
  checkout
}: CartListProps) {
  const [userData] = useUsers()
  let totalCarts = useRef(0)

  const calculateTotalPurchase = (totalCart: any) => {
    let count = 0
    for(const cart of cartData) {
      cart.total = totalCart
      count += cart.total
    }
    totalCarts.current = count
  }
  
  return (  
    <div className="wish-list-wrapper">
      {cartData.map((cart: any) => {
        const { id, userId, date, products } = cart
        if(cart.products.length > 0) {
          return (
            <CartItem
              key={id}
              id={id}
              cart={cart}
              userId={userId}
              user={userData.find((user: any) => (user.id === userId))}
              date={date}
              products={products}
              checkout={checkout}
              calculateTotalPurchase={calculateTotalPurchase}
            />
          )
        }
        return null
      })}
      {/* {totalLoaded ?       
        <h3>Total Purchase: {totalCarts.current}</h3> : 'Loading Total'
      } */}
    </div>
  )
}
