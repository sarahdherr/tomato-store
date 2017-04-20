'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios'

import store from './store'
import { fetchProducts } from './reducers/products'
import { fetchProduct } from './reducers/product'

import AppContainer from './containers/AppContainer'
import ProductsContainer from './containers/ProductsContainer'
import ProductContainer from './containers/ProductContainer'
import CheckoutContainer from './containers/CheckoutContainer'

import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'

// const ExampleApp = connect(
//   ({ auth }) => ({ user: auth })
// )(
//   ({ user, children }) =>
//     <div>
//       <nav>
//         {user ? <WhoAmI/> : <Login/>}
//       </nav>
//       {children}
//     </div>
// )

// onEnter takes three arguments in order to prevent route rendering until onEnter has finished. This prevents you from hitting an incomplete state during route render.
const onProductsEnter = (nextRouterState, _, done) => {
  store.dispatch(fetchProducts())
  .then(done)
}

const onProductEnter = (nextRouterState, _, done) => {
  store.dispatch(fetchProduct(nextRouterState.params.id))
    .then(done)
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} >
        <IndexRedirect to="/products" />
        <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter} />
        <Route path="/products/:id" component={ProductContainer} onEnter={onProductEnter} />
        <Route path="/checkout" component={CheckoutContainer} />
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
