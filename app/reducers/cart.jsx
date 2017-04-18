import axios from 'axios'

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

// Dispatchers
export const changeItemQuantity = (productId, quantity=1) =>
  dispatch => {
  	const cart = getCartLocal()
  	cart[productId] = (cart[productId] || 0) + quantity
  	if (cart[productId] < 1) delete cart[productId]
  	setCartLocal(cart)
  }

export const fetchCart = () => 
	dispatch => {
		dispatch(getCart(getCartLocal()))
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
