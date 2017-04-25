import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { checkoutCart, itemIncrement, itemDecrement, removeItem } from '../reducers/cart'

const mapStateToProps = (state) => {
  return {
    cart: state.cart.list,
    userId: state.user && state.user.id
  }
}

const mapDispatchToProps = (dispatch) => {
  // return a destructured object where checkoutCart is set to a function that dispatches the checkoutCart reducer imported above.
  return {
    checkoutCart(cart, id) {
      dispatch(checkoutCart(cart, id))
    },

    itemIncrement(productId) {
      dispatch(itemIncrement(productId))
    },

    itemDecrement(productId) {
      dispatch(itemDecrement(productId))
    },

    removeItem(productId) {
      dispatch(removeItem(productId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
