import React from 'react'
import { NavLink } from 'react-router-dom'

import Button from '../../components/Button'
import { iconsLocale } from '../../utils/locale/icons'

import './style.scss'

export default function Home() {
  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__wrapper--container">
          <h1>Droppe XMAS</h1>
          <h2>An intuitive Cart Shopping Experience</h2>
          <NavLink to="/wishlist" className="home__link">
            <Button
              size="lg"
              text="View Cart"
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
