'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import axios from 'axios'

import store from './store'
import { fetchProducts } from './reducers/products'

import AppContainer from './containers/AppContainer'
import ProductsContainer from './containers/ProductsContainer'

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
// const onAppEnter = function(nextRouterState) {
//   axios.get('/session')
//     .then(session => {
//       console.log("SESSION", session.data)
//     })
//     .catch(err => console.error(err))
// }

// const onJokeEnter = function(nextRouterState) {
//   axios.get('/session')
//     .then(session => {
//       console.log("SESSION", session.data)
//     })
//     .catch(err => console.error(err))
// }

const onProductsEnter = function (nextRouterState) {
  store.dispatch(fetchProducts())
}

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} >
        <IndexRedirect to="/jokes" />
        <Route path="/jokes" component={Jokes}  />
        <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter}/>
      </Route>
      <Route path='*' component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('main')
)
