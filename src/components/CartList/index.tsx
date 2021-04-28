import React from 'react'

import useUsers from '../../hooks/useUsers'
import CartItem from '../CartItem'

import './style.scss'

export default function CartList(props: any) {
  const [userData] = useUsers()
  
  return (  
    <div className="wish-list-wrapper">
      {props.data.map((cart: any) => {
        const { id, userId, date, products } = cart
        return (
          <CartItem
            key={id}
            id={id}
            cart={cart}
            userId={userId}
            user={userData.find((user: any) => (user.id === userId))}
            date={date}
            products={products}
          />
        )
      })}
    </div>
  )
}
