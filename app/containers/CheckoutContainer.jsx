import { connect } from 'react-redux'
import Checkout from 'APP/app/components/Checkout'
import store from 'APP/app/store'
import { createGuest } from 'APP/app/reducers/guest'
// dispatcher;

const mapStateToProps = (state) =>
    ({
      orderId: state.cart.orderId,
    })

const mapDispatchToProps = (dispatch) => {
  return {
    createGuest(guestEntry, orderId) {
      dispatch(createGuest(guestEntry, orderId))
      // we dispatch the dispatcher, which dispatches the action creator,
      // which triggers the reducer ( changes the state )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
