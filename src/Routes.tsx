import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import WishList from './pages/WishList/index'
import Checkout from './pages/Checkout'


const Routes = () => (
  <Switch>
    <Route
      exact
      path='/'
      component={ Home }
    />

    <Route
      exact
      path='/wishlist'
      component={ WishList }
    />

    <Route
      exact
      path='/checkout'
      component={ Checkout }
    />
  </Switch>
)

export default Routes


