import { connect } from 'react-redux'
import Checkout from 'APP/app/components/Checkout'
import store from 'APP/app/store'
import { postGuest } from 'APP/app/reducers/guest'

const handleSubmitOrder = function(guestAddress) {
  // post request
 //  window.alert('Payment Approved. Your tomatoes are on their way!')

 // Parameter is the order ID, will be changed when the cart functionality is finished
  store.dispatch(postGuest(guestAddress))
}

const mapStateToProps = (state) =>
// order id is on state
    ({
      orderId: state.orderId,
      handleSubmitOrder
    })

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
