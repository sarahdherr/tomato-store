import axios from 'axios'

const reducer = (state=null, action) => {
  switch (action.type) {
  case GET_USER:
    return action.user
  }

  return state
}

// User constants
const GET_USER = 'GET_USER'

// User action creators
export const getUser = user => ({
  type: GET_USER,
  user
})

// Dispatchers
export const setUser = user =>
  dispatch =>
    axios.post('/api/users', user)
      .then(response => {
        dispatch(getUser(response.data))
      })
      .catch(err => console.error(err))

export default reducer
