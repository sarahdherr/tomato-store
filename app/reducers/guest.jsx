import axios from 'axios'

// Dispatchers
export const postGuest = (guestAddress) =>
  dispatch => {
    console.log('GUEST ADDRESS', guestAddress)
    axios.post(`/api/guests`, guestAddress)
      .then(response => {
        dispatch(postGuest(response.data))
      })
      .catch(err => console.error(err))
  }

// Products constants
const CREATED_GUEST = 'CREATED_GUEST'

// Products action creators
export const createGuest = guest => ({
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
