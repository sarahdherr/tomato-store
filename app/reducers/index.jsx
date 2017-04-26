import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products').default,
  product: require('./product').default,
  cart: require('./cart').default,
  guest: require('./guest').default,
  order: require('./receipt').default
})

export default rootReducer
