import { connect } from 'react-redux'
import Receipt from '../components/Receipt'
import { checkoutReceipt } from '../reducers/receipt'

// note that dispatch to props has nothing to do with receipt but is copy / pasted

const mapStateToProps = (state) => {
  return {
    // orderId: state.orderId, // state.orderId as per Elsa and Sarah ?
    orderId: 1,
    status: state.order.status,
    cart: state.order.cart,
    guest: state.order.guest,
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
