import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products').default,
<<<<<<< HEAD
  product: require('./product').default
=======
  cart: require('./cart').default
>>>>>>> 0c8d15ea4748e69faba06088f53a7d0965305eb8
})

export default rootReducer
