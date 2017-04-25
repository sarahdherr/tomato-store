import axios from 'axios'
import Promise from 'bluebird'

// DISPATCHERS
// FOR VALIDATION WE ARE LOOKING ONLY IN STATE.ORDER, A FRESH DB PULL
export const fetchOrder = (orderId) =>
  dispatch =>
    Promise.all([
      axios.get(`/api/orders/status/${orderId}`),
      axios.get(`/api/orders/${orderId}`),
      axios.get(`/api/guests/${orderId}`)
    ])
    // status is a str; orderItems [{quantity: INT, product: dbProd, productId:, order_id:,  }, ... ]
    // guest is the guest instance.
    .spread((status, orderItems, guest) => {
      // format the order as we desired
      const order = {
        status: status.data,
        cart: orderItems.data,
        guest: guest.data
      }
      dispatch(gotOrder(order))
    })
    .catch(err => console.error(err))

// ORDER CONSTANTS
const GOT_ORDER = 'GOT_ORDER'

// ORDER ACTION CREATORS
export const gotOrder = order => ({
  type: GOT_ORDER,
  order
})

// ORDER REDUCER
const initialState = {
  order: {}
}
const reducer = (state=initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
  case GOT_ORDER:
    newState = action.order
    break
  }

  return newState
}

export default reducer
