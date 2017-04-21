import axios from 'axios'
import Promise from 'bluebird'

// DISPATCHERS
// have to verify what the returned order looks like with console log
export const fetchOrder = (orderId) =>
  dispatch => {
    axios.get(`/api/orders/${orderId}`)
    .then(order => {
      console.log('ORDER', order)
      dispatch(gotOrder(order))
    })
    .catch(err => console.error(err))
  }

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
  const newState = Object.assign({}, state)
  switch (action.type) {
  case GOT_ORDER:
    newState.order = action.order
    break
  }

  return newState
}

export default reducer
