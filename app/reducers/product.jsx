import axios from 'axios'

// Products reducer
const reducer = (state={}, action) => {
  switch (action.type) {
  case GET_PRODUCT:
    return action.product
  }

  return state
}

// Products constants
const GET_PRODUCT = 'GET_PRODUCT'

// Products action creators
export const getProduct = product => ({
  type: GET_PRODUCT,
  product
})

// Dispatchers
export const fetchProduct = (id) =>
  dispatch =>
    axios.get(`/api/products/${id}`)
      .then(response => {
        dispatch(getProduct(response.data))
      })
      .catch(err => console.error(err))

export default reducer
