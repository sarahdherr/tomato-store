import React from 'react'
import {Link, browserHistory} from 'react-router'
import axios from 'axios'
import { clearCart } from 'APP/app/reducers/cart'
import store from 'APP/app/store'

export default class PayPal extends React.Component {
  constructor(props) {
    super()
    this.handlePaypalButton= this.handlePaypalButton.bind(this)
  }

  handlePaypalButton = function(e) {
    e.preventDefault()
    // use props.orderId to change order's status to confirmed
    axios.put(`/api/orders/${this.props.params.orderId}`, {status: 'confirmed'})
    .then(() => store.dispatch(clearCart()))
    .then(() => browserHistory.push(`/receipt/${this.props.orderId}`))
    .catch(err => console.error(err))
  }
  // do some text verifaction later
  render() {
    return (
      <div>
        <h1>Welcome to PayPal</h1>
        <h3>Please log in</h3>
        <form>
          <label>Username: </label>
          <input />

          <label>Password: </label>
          <input />

          <button type="submit" onClick={this.handlePaypalButton}>Complete Payment</button>
        </form>
      </div>
    )
  }
}
