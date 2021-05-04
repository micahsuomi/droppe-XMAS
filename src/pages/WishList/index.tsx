import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'

import useCarts from '../../hooks/useCarts'
import CartList from '../../components/CartList'
import Button from '../../components/Button'
import { getAllCarts } from '../../redux/actions/cart'
import { pagesLocale } from '../../utils/locale/pages'
import { iconsLocale } from '../../utils/locale/icons'

import './style.scss'

export default function WishList() {
  const dispatch = useDispatch()
  const [cartData] = useCarts()

  const undoOnClick = () => {
    dispatch(getAllCarts())
  }
  const { headers, callToAction } = pagesLocale.wishList
  return (
    <div className="wish-list">
      <div className="wish-list__header">
        <h1>{headers}</h1>
        <Button
          backgroundColor="secondary"
          size="sm"
          text={callToAction.undo}
          withIcon
          icon={iconsLocale.undoAll.iconClass}
          onClickRes={undoOnClick}
        />
      </div>
      <CartList cartData={cartData} />
      <div className="wish-list__checkout">
        <NavLink to="/checkout">
          <Button
            backgroundColor="primary"
            size="lg"
            text={callToAction.proceedToCheckout}
            withMargin
            withIcon
            icon={iconsLocale.arrowRight.iconClass}
          />
        </NavLink>
      </div>
    </div>
  )
}
