import React from 'react'

import useUsers from '../../hooks/useUsers'
import CartItem from '../CartItem'

export default function WishListCartTable(props: any) {
  console.log(props.data)
  const [userData] = useUsers()
  return (
    <div>
      <h1>Wish List</h1>
      {props.data.map((cart: any) => {
        const { id, userId, date, products } = cart
        return (
          <CartItem
            key={id}
            id={id}
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
