import { connect } from 'react-redux'
import PayPal from 'APP/app/components/PayPal'
import store from 'APP/app/store'
// import {  } from 'APP/app/reducers/receipt'
import { clearCart } from 'APP/app/reducers/cart'

const mapStateToProps = (state) =>
    ({
      orderId: state.cart.orderId,
    })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createGuest(guestInfo) {
//       dispatch(createGuest(guestInfo))
//     }
//   }
// }

export default connect(mapStateToProps, null)(PayPal)
