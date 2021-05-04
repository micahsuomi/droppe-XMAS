import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from '../../components/Button'
import { pagesLocale } from '../../utils/locale/pages'
import { iconsLocale } from '../../utils/locale/icons'

import './style.scss'

export default function Home() {
  const { headers, subHeaders, callToAction } = pagesLocale.home
  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__wrapper--container">
          <h1>{headers}</h1>
          <h2>{subHeaders}</h2>
          <NavLink to="/wishlist" className="home__link">
            <Button
              size="lg"
              text={callToAction}
              backgroundColor="primary"
              withIcon
              icon={iconsLocale.shoppingCart.iconClass}
              withMargin
            />
          </NavLink>
        </div>
      </div>
    </div>
  )
}
