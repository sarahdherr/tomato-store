import axios from 'axios'

// Products reducer
const reducer = (state={}, action) => {
  switch (action.type) {
  case CREATE_GUEST:
    return action.guest
  }

  return state
}

// Products constants
const CREATE_GUEST = 'CREATE_GUEST'

// Products action creators
export const createGuest = guest => ({
  type: CREATE_GUEST,
  guest
})

// Dispatchers
export const postGuest = (id) =>
  dispatch =>
    axios.post(`/api/guests`)
      .then(response => {
        dispatch(postGuest(response.data))
      })
      .catch(err => console.error(err))

export default reducer
