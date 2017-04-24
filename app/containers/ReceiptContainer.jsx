import { connect } from 'react-redux'
import Receipt from '../components/Receipt'
import { checkoutReceipt } from '../reducers/receipt'

// note that dispatch to props has nothing to do with receipt but is copy / pasted

const mapStateToProps = (state) => {
  console.log('State in Receipt container ', state)
  // later let's figure out why it's order inside order
  // FOR VALIDATION WE ARE LOOKING ONLY IN STATE.ORDER, A FRESH DB PULL
  // FOR REFACTORING: A SMALL CHALLENGE
  return {
    orderId: state.order.order.cart.data[0].order_id,
    status: state.order.order.status.data,
    cart: state.order.order.cart.data,
    guest: state.order.order.guest.data,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   // return a destructured object where checkoutReceipt is set to a function that dispatches the checkoutReceipt reducer imported above.
//   return {
//     checkoutReceipt(receipt) {
//       dispatch(checkoutReceipt(receipt))
//     }
//   }
// }

export default connect(mapStateToProps, null)(Receipt)
