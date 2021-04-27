import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/index'
import WishList from './pages/WishList/WishList'


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
  </Switch>
)

export default Routes


