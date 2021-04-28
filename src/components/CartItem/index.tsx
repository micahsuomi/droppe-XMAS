import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import useProducts from '../../hooks/useProducts'
import ProductItem from '../ProductItem'
import User from '../User'
import Button from '../Button'
import { CartItemProps } from '../../types'
import { removeProductFromCart } from '../../redux/actions/cart'

import './style.scss'

export default function CartItem({
  id,
  userId,
  cart,
  user,
  date,
  products,
}: CartItemProps, props: any) {
  const dispatch = useDispatch()
  const [productData] = useProducts()
  const [viewCart, setViewCart] = useState(true)
  const [viewUser, setViewUser] = useState(false)

  const viewCartOnClick = () => {
    setViewCart(!viewCart)
  }
  const viewUserOnClick = () => {
    setViewUser(!viewUser)
  }

  const dismissOnClick = (product: any) => {
    console.log('clicking', product.id)
    // console.log(cart)
    // console.log('cart id', id)
    const updatedCartProducts = cart.products.filter((p) => p.productId !== product.id)
    console.log(updatedCartProducts)
    cart.products = updatedCartProducts
    dispatch(removeProductFromCart(cart, product))
    
    // dispatch(removeProductFromCart(product))
    // // const filteredProducts = products.filter((p) => p.productId !== product.id)
    // console.log(filteredProducts)

   
  }

  return (
    <div className="cart-item">
      <div>
        <p>Cart: {id}</p>
        <p>Cart user: {user && user.username}</p>
        { viewUser ? 
          <Button onClickRes={viewUserOnClick} text="Hide User" size="sm" color="secondary"/>        
          :
          <Button onClickRes={viewUserOnClick} text="View User" size="sm" color="secondary"/>        
        }      </div>
      {viewUser && (
        <>
          <User
            firstName={user.name.firstname}
            lastName={user.name.lastname}
            email={user.email}
          />
        </>
      )}
      <p>Products: {products.length}</p>
      <p>Saved On: {moment(date).format("MMM Do YYYY")}</p>
      { viewCart ? 
        <Button onClickRes={viewCartOnClick} text="Collapse Cart" size="sm" color="primary"/>        
        :
        <Button onClickRes={viewCartOnClick} text="Expand Cart" size="sm" color="primary"/>        
      }
      {
        viewCart &&
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
                      return (
                        <>
                          <ProductItem
                            id={id}
                            product={product}
                            image={image}
                            title={title}
                            price={parseInt(price)}
                            category={category}
                            description={description}
                            quantity={productItem.quantity}
                            dismissOnClick={dismissOnClick}
                          />
                        </>
                      )
                    }
                    return null
                  })}
                </>
                {/* <li>Qty: {productItem.quantity}</li> */}
              </>
            ))}
          </ul>
      }
     
      <h3>Total Cart: </h3>
    </div>
  )
}
