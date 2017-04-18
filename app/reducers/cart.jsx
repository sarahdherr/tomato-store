import axios from 'axios'
import Promise from 'bluebird'

// Cart reducer
const reducer = (state={}, action) => {
  
  switch (action.type) {
  case GET_CART:
    return action.cart;
  }

  return state;
}

// Cart constants
const GET_CART = "GET_CART"

// Cart action creators
export const getCart = cart => ({
  type: GET_CART,
  cart
}) 

const by = function(delta) {
  return (quantity) => {
    return (quantity || 0) + delta 
  }
}

const to = function(value) {
  return (quantity) => {
    return value
  }
}

// Dispatchers
export const changeItemQuantity = (productId, mutator) =>
  dispatch => {
    const cart = getCartLocal()
    cart[productId] = mutator(cart[productId])

    if (cart[productId] < 1) delete cart[productId]
    setCartLocal(cart)
  }

export const fetchCart = () => 
  dispatch => {
    const cartKeys = Object.keys(getCartLocal())

    Promise.map(cartKeys, key => {
      return axios.get(`/api/products/${key}`)

    })
      .then(products => products.map(product => product.data))
      .then(products => dispatch(getCart(products)))
      .catch(err => console.error(err))
  }


export default reducer

const getCartLocal = function() {
  if (localStorage.cart) {
    return JSON.parse(localStorage.cart)
  } else {
    return {}
  }
}

const setCartLocal = function(cart) {
  localStorage.setItem("cart", JSON.stringify(cart))
}

window.changeItemQuantity = changeItemQuantity
window.fetchCart = fetchCart
window.by = by
window.to = to
