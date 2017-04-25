import { connect } from 'react-redux'
import Checkout from 'APP/app/components/Checkout'
import store from 'APP/app/store'
import { createGuest, createdGuest } from 'APP/app/reducers/guest'
// dispatcher; action creator pair

const mapStateToProps = (state) =>
    ({
      orderId: state.cart.orderId,
      createGuest
    })

const mapDispatchToProps = (dispatch) => {
  return {
    createdGuest(guestInfo) {
      dispatch(createdGuest(guestInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
