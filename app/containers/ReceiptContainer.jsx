import { connect } from 'react-redux'
import Receipt from '../components/Receipt'
import { checkoutReceipt } from '../reducers/receipt'


const mapStateToProps = (state) => {
  // console.log('State in Receipt container ', state)
  // FOR VALIDATION WE ARE LOOKING ONLY IN STATE.ORDER, A FRESH DB PULL
  return {
    orderId: state.order.cart[0].order_id,
    status: state.order.status,
    cart: state.order.cart,
    guest: state.order.guest,
  }
}

// OPTIONAL TEMPLATE FOR MAPDISPATCH IN THE FUTURE
// const mapDispatchToProps = (dispatch) => {
//   // return a destructured object where checkoutReceipt is set to a function that dispatches the checkoutReceipt reducer imported above.
//   return {
//     checkoutReceipt(receipt) {
//       dispatch(checkoutReceipt(receipt))
//     }
//   }
// }

export default connect(mapStateToProps, null)(Receipt)
