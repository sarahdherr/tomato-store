import { connect } from 'react-redux'
import Checkout from 'APP/app/components/Checkout'
import store from 'APP/app/store'
import { postGuest, createGuest } from 'APP/app/reducers/guest'
import { clearCart } from 'APP/app/reducers/cart'

const handleSubmitOrder = (guestEntry, orderId) => {
  store.dispatch(postGuest(guestEntry, orderId))
  store.dispatch(clearCart())
}

const mapStateToProps = (state) =>
    ({
      orderId: state.cart.orderId,
      handleSubmitOrder
    })

const mapDispatchToProps = (dispatch) => {
  return {
    createGuest(guestInfo) {
      dispatch(createGuest(guestInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
