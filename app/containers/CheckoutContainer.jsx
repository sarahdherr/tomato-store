import { connect } from 'react-redux'
import Checkout from 'APP/app/components/Checkout'
import store from 'APP/app/store'

const handlePaymentSubmit = function(object) {
  // post request
  window.alert('Payment Approved. Your tomatoes are on their way!')
}

const mapStateToProps = (state) => {
// order id is on state
  return {
    orderId: state.orderId,
    handlePaymentSubmit
  }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
