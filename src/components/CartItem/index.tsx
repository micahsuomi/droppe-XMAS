import React, { useState } from 'react'
import moment from 'moment'

import useProducts from '../../hooks/useProducts'
import ProductItem from '../ProductItem'
import User from '../User'
import { CartItemProps } from '../../types'

export default function CartItem({
  id,
  userId,
  user,
  date,
  products,
}: CartItemProps, props: any) {
  const [productData] = useProducts()
  const [viewUser, setViewUser] = useState(false)
  const viewUserOnClick = () => {
    setViewUser(!viewUser)
  }
  return (
    <div>
      <div>
        <p>username: {user && user.username}</p>
        <button onClick={viewUserOnClick}>View User</button>
      </div>
      {viewUser && (
        <>
          <User
            firstName={user.name.firstname}
            lastName={user.name.lastname}
            email={user.email}
          />
        </>
      )}
      <p>Date Saved: {moment(date).format("MMM Do YYYY")}</p>
      <p>Products: {products.length}</p>
      <ul>
        {' '}
        {products.map((productItem: any) => (
          <>
            <>
              {productData.map((product: any) => {
                const {
                  id,
                  image,
                  title,
                  price,
                  category,
                  description,
                } = product
                if (productItem.productId === product.id) {
                  //   console.log('these are matching', productItem, product)
                  return (
                    <>
                      <ProductItem
                        id={id}
                        image={image}
                        title={title}
                        price={parseInt(price)}
                        category={category}
                        description={description}
                        quantity={productItem.quantity}
                      />
                    </>
                  )
                }
                return null
              })}
            </>
            <li>Qty: {productItem.quantity}</li>
            <li>Total: </li>
          </>
        ))}
      </ul>
    </div>
  )
}
