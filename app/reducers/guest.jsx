import axios from 'axios'

// Dispatchers
export const createGuest = (guestEntry, orderId) =>
  dispatch => {
    axios.post(`/api/guests`, { orderId, guestEntry }) // !
      .then(response => {
        dispatch(createdGuest(response.data))
      })
      .catch(err => console.error(err))
  }

// Products constants
const CREATED_GUEST = 'CREATED_GUEST'

// Products action creators
export const createdGuest = guest => ({
  type: CREATED_GUEST,
  guest
})

// Products reducer
const reducer = (state={}, action) => {
  switch (action.type) {
  case CREATED_GUEST:
    return action.guest
  }

  return state
}

export default reducer
