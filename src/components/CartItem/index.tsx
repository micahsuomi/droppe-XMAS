import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import useProducts from '../../hooks/useProducts'
import ProductItem from '../ProductItem'
import User from '../User'
import Button from '../Button'
import { CartItemProps, Cart } from '../../types'
import { removeProductFromCart, deleteCart } from '../../redux/actions/cart'
import { iconsLocale } from '../../utils/locale/icons'

import './style.scss'

export default function CartItem({
  id,
  cart,
  user,
  date,
  products,
  checkout,
}: CartItemProps) {
  const dispatch = useDispatch()
  const [productData] = useProducts()
  const [viewCart, setViewCart] = useState(true)
  const [viewUser, setViewUser] = useState(false)
  const totalCart = useRef(0)
  const discount = useRef('None')

  const viewCartOnClick = () => {
    setViewCart(!viewCart)
  }

  const viewUserOnClick = () => {
    setViewUser(!viewUser)
  }

  const discardItemOnClick = (product: any) => {
    const approvedCartProducts = cart.products.filter((p) => {
      return p.productId !== product.id
    })

    const dismissedCartProduct = cart.products.find(
      (p) => p.productId === product.id
    )
    if (dismissedCartProduct) {
      dispatch(
        removeProductFromCart(cart, approvedCartProducts, dismissedCartProduct)
      )
    }
  }

  useEffect(() => {
    if (products.length < 1) {
      dispatch(deleteCart(cart))
    }
  }, [dispatch, cart, products.length])

  const calculateTotalProducts = (totalPrice: number, quantity: number) => {
    if (quantity > 1 && quantity <= 3) {
      discount.current = '-20%'
      return totalPrice - totalPrice * 0.2
    }
    if (quantity === 3 && quantity < 4) {
      discount.current = '-30%'
      return totalPrice - totalPrice * 0.3
    }
    if (quantity === 4 && quantity < 5) {
      discount.current = '-40%'
      return totalPrice - totalPrice * 0.4
    }
    if (quantity > 4) {
      discount.current = '-50%'
      return totalPrice - totalPrice * 0.5
    }
    discount.current = 'None'
    return totalPrice
  }

  const calculateTotalCart = (cart: Cart) => {
    let count = 0
    if (cart !== undefined) {
      for (const product of cart.products) {
        count += product.total
      }
      totalCart.current = count
    }
  }

  return (
    <div className="cart-item">
      <div className="cart-item__header">
        <span>Cart: {id}</span>
        <i className={iconsLocale.shoppingCart.iconClass}></i>
        <p>
          <span>Saved On:</span> {moment(date).format('MMM Do YYYY')}
        </p>
      </div>
      <hr></hr>
      <div className="cart-item__user animate-modal">
        <div>
          <p>
            <span>Cart user: {user && user.username} </span>
            <i className={iconsLocale.user.iconClass}></i>
          </p>
          {viewUser && (
            <>
              <User
                firstName={user.name.firstname}
                lastName={user.name.lastname}
                email={user.email}
              />
            </>
          )}
        </div>
        <div>
          {!checkout && (
            <>
              {viewUser ? (
                <Button
                  onClickRes={viewUserOnClick}
                  text="Hide User"
                  size="sm"
                  noBackgroundColor
                  withIcon
                  icon={iconsLocale.arrowUp.iconClass}
                />
              ) : (
                <Button
                  onClickRes={viewUserOnClick}
                  text="View User"
                  size="sm"
                  noBackgroundColor
                  withIcon
                  icon={iconsLocale.arrowDown.iconClass}
                />
              )}
            </>
          )}
        </div>
      </div>
      <hr></hr>
      <div className="cart-item__expand">
        <p>
          <span>Products:</span> {products.length}
        </p>
        {viewCart ? (
          <Button
            onClickRes={viewCartOnClick}
            text="Collapse"
            size="sm"
            backgroundColor="secondary"
            withIcon
            icon={iconsLocale.arrowUp.iconClass}
          />
        ) : (
          <Button
            onClickRes={viewCartOnClick}
            text="Expand"
            size="sm"
            backgroundColor="primary"
            withIcon
            icon={iconsLocale.arrowDown.iconClass}
          />
        )}
      </div>
      {viewCart && (
        <ul className="animate-modal">
          {' '}
          {products.map((productItem: any) => (
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
                  const total = parseInt(price) * productItem.quantity
                  calculateTotalProducts(total, productItem.quantity)
                  product.total = total
                  productItem.total = calculateTotalProducts(
                    total,
                    productItem.quantity
                  )
                  calculateTotalCart(cart)
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
                        discardItemOnClick={discardItemOnClick}
                        checkout={checkout}
                        totalPrice={productItem.total}
                        totalDiscount={discount.current}
                      />
                    </>
                  )
                }
                return null
              })}
            </>
          ))}
        </ul>
      )}

      <h3>Total Cart: €{totalCart.current} </h3>
    </div>
  )
}
