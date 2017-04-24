import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { checkoutCart } from '../reducers/cart'

const mapStateToProps = (state) => {
  return {
    cart: state.cart.list,
    userId: state.user.userInfo.id
  }
}

const mapDispatchToProps = (dispatch) => {
  // return a destructured object where checkoutCart is set to a function that dispatches the checkoutCart reducer imported above.
  return {
    checkoutCart(cart, id) {
      dispatch(checkoutCart(cart, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
