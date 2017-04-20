import axios from 'axios'
import Promise from 'bluebird'

const initialState = {
  list: []
}

// Cart reducer
const reducer = (state=initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case GOT_CART:
    newState.list = action.cart
    break
  }

  return newState
}

// Cart constants
const GOT_CART = 'GOT_CART'

// Cart action creators
// gotCart takes a cart [{quantity: int, product{}}, ...] and triggers the cart reducer with action type GOT_CART
export const gotCart = cart => ({
  type: GOT_CART,
  cart
})

const changeBy = function(delta) {
  return (quantity) =>
    (quantity || 0) + delta
}

const changeTo = function(value) {
  return (quantity) =>
    value
}

// Dispatchers
export const changeItemQuantity = (productId, mutator) =>
  dispatch => {
    const cart = getCartLocal()
    cart[productId] = mutator(cart[productId])

    if (cart[productId] < 1) delete cart[productId]
    setCartLocal(cart)
    dispatch(fetchCart())
  }

export const fetchCart = () =>
  dispatch => {
    const uxCart = getCartLocal()
    const cartKeys = Object.keys(uxCart)

    Promise.map(cartKeys, key => {
      return axios.get(`/api/products/${key}`)
    })
      .then(products => {
        return products.map(product => product.data)
      })
      .then(products => {
        // output from here will be a formatted cart in format [{qty: int, product: {from db}}, ...]
        return products.map(product => ({quantity: uxCart[product.id], product}))
      })
      .then(formattedCart => {
        dispatch(gotCart(formattedCart))
      })
      .catch(err => console.error(err))
  }
export const checkoutCart = (cart) =>
  dispatch => {
    axios.post('api/orders', { cart })
    .then(() => setCartLocal({})) // wipeout cart on localStorage
    .then(() => dispatch(gotCart({}))) // wipout cart on redux state
    .catch(err => console.error(err))
  }

export default reducer

const localStorage = window.localStorage
const getCartLocal = function() {
  if (localStorage.cart) {
    return JSON.parse(localStorage.cart)
  } else {
    return {}
  }
}

// Temporary Helper function takes a whole cart object of the form:
// { prdId1:  qty1, prdId2: qty2, ... }
const setCartLocal = function(cart) {
  localStorage.setItem('cart', JSON.stringify(cart))
}

window.changeItemQuantity = changeItemQuantity
window.changeTo = changeTo
window.fetchCart = fetchCart
