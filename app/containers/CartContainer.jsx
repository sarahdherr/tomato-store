import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { checkoutCart } from '../reducers/cart'

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  // return a destructured object where checkoutCart is set to a function that dispatches the checkoutCart reducer imported above.
  return {
    checkoutCart(cart) {
      dispatch(checkoutCart(cart))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
