import axios from 'axios'
import Promise from 'bluebird'

const initialState = {
  list: [],
  orderId: 0,
  size: 0
}

// Cart reducer
const reducer = (state=initialState, action) => {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case GOT_CART:
    newState.list = action.cart
    break

  case GOT_ORDER_ID:
    newState.orderId = action.orderId
    break

  case GOT_CART_SIZE:
    newState.size = action.size
    break

  case CLEARED_CART:
    newState.size = action.size
    break
  }

  return newState
}

// Cart constants
const GOT_CART = 'GOT_CART'
const GOT_ORDER_ID = 'GOT_ORDER_ID'
const GOT_CART_SIZE = 'GOT_CART_SIZE'
const CLEARED_CART = 'CLEARED_CART'

// Cart action creators
// gotCart takes a cart [{quantity: int, product{}}, ...] and triggers the cart reducer with action type GOT_CART
export const gotCart = cart => ({
  type: GOT_CART,
  cart
})

export const gotOrderId = orderId => ({
  type: GOT_ORDER_ID,
  orderId
})

// sets cart size on state
export const gotCartSize = size => ({
  type: GOT_CART_SIZE,
  size
})
// clears ocalStorage cart (to "")
export const clearedCart = () => ({
  type: CLEARED_CART,
  size: 0
})

// export const changeBy = function(delta) {
//   return (quantity) => {
//     return (quantity || 0) + delta
//   }
// }

// const changeTo = function(value) {
//   return (quantity) => {
//     return value
//   }
// }

// Dispatchers
// export const changeItemQuantity = (productId, mutator) =>
//   dispatch => {
//     const cart = getCartLocal()
//     cart[productId] = mutator(cart[productId])
//     if (cart[productId] < 1) delete cart[productId]
//     setCartLocal(cart)
//     dispatch(fetchCart())
//   }

export const itemIncrement = (productId) =>
  dispatch => {
    const cart = getCartLocal()
    !cart[productId] ? cart[productId] = 1 : cart[productId]++
    // if (cart[productId] < 1) delete cart[productId]
    setCartLocal(cart)
    dispatch(fetchCart())
  }

export const itemDecrement = (productId) =>
  dispatch => {
    const cart = getCartLocal()
    !cart[productId] ? cart[productId] = 0 : cart[productId]--
    if (cart[productId] < 1) delete cart[productId]
    setCartLocal(cart)
    dispatch(fetchCart())
  }

export const removeItem = (productId) =>
  dispatch => {
    const cart = getCartLocal()
    delete cart[productId]
    setCartLocal(cart)
    dispatch(fetchCart())
  }

// Later should figure out how to make this dispatch an action creator without breaking everything
export const getCartSize = () =>
  dispatch => {
    const cart = getCartLocal()
    let cartSize = 0

    for (var productId in cart) {
      cartSize += cart[productId]
    }
    dispatch(gotCartSize(cartSize))
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
        dispatch(getCartSize())
      })
      .catch(err => console.error(err))
  }

// WILL BE MOVED TO CONFIRMATION PAGE, WIPES OUT ORDER DATA
// export const checkoutCart = (cart) =>
//   dispatch => {
//     axios.post('api/orders', { cart })
//     .then(() => setCartLocal({})) // wipeout cart on localStorage
//     .then(() => dispatch(gotCart({}))) // wipout cart on redux state
//     .catch(err => console.error(err))
//   }

export const checkoutCart = (cart, userId) =>
  dispatch => {
    axios.post('api/orders', { cart, userId })
    .then((res) => {
      const orderId = res.data[0].order_id
      dispatch(gotOrderId(orderId))
    })
    .catch(err => console.error(err))
  }

export const clearCart = () =>
  dispatch => {
    window.localStorage.cart = ''
    dispatch(clearedCart())
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
