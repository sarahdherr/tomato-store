import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { checkoutCart, itemIncrement, itemDecrement, removeItem } from '../reducers/cart'

const mapStateToProps = (state) => {
  return {
    cart: state.cart.list,
    userId: state.user && state.user.id
  }
}

const mapDispatchToProps = { checkoutCart, itemIncrement, itemDecrement, removeItem }

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
