import axios from 'axios'
import { browserHistory } from 'react-router'

const reducer = (state=null, action) => {
  switch (action.type) {
  case AUTHENTICATED:
    return action.user
  }
  return state
}

const AUTHENTICATED = 'AUTHENTICATED'
export const authenticated = user => ({
  type: AUTHENTICATED, user
})

export const login = (username, password) =>
  dispatch =>
    axios.post('/api/auth/login/local',
      {username, password})
      .then(() => dispatch(whoami()))
      // Once logged in, redirects to the cart view
      .then(() => browserHistory.push('/cart'))
      .catch(() => dispatch(whoami()))

export const logout = () =>
  dispatch =>
    axios.post('/api/auth/logout')
      .then(() => dispatch(whoami()))
      // Once logged out, redirects to the home page view of all products
      .then(() => browserHistory.push('/products'))
      .catch(() => dispatch(whoami()))

export const whoami = () =>
  dispatch =>
    axios.get('/api/auth/whoami')
      .then(response => {
        const user = response.data
        dispatch(authenticated(user))
      })
      .catch(failed => dispatch(authenticated(null)))

export const setUser = (user) =>
  dispatch =>
    axios.post('api/users', user)
      .then(response => {
        dispatch(authenticated(response.data))
      })
      .then(() => browserHistory.push('/products'))
      .catch(err => console.error(err))

export default reducer
