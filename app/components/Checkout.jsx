import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

export default class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }
    // HARDCODED ORDER ID HERE:
    props.orderId = 1

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleConfirmOrder = this.handleConfirmOrder.bind(this)
  }

  handleChange = function(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
    // set orderId to req.body.orderId
  }
  handleConfirmOrder = function(e) {
    e.preventDefault()
    // use props.orderId to change order's status to confirmed
    console.log('IN CHECKOUT TRYING TO GET ORDERID OFF STATE', this.props)
    axios.put(`api/orders/${this.props.orderId}`, {status: 'confirmed'})
      .catch(err => console.error(err))
  }

  handleSubmit = function(e) {
    e.preventDefault()
    this.props.handleSubmitOrder(this.state)
  }

  render() {
    return (
      <div>
      <form id="guest-address" className="form-horizontal" onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Shipping Info</legend>
          <div className="form-group">
            <label className="col-lg-2 control-label">Name</label>
            <div className="col-lg-4">
              <input type="text"
                      className="form-control"
                      placeholder="name"
                      onChange={ this.handleChange}
                      name="name" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Address</label>
            <div className="col-lg-4">
              <input type="text"
                      className="form-control"
                      placeholder="address"
                      onChange={ this.handleChange}
                      name="address" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">City</label>
            <div className="col-lg-4">
              <input type="text"
                      className="form-control"
                      placeholder="city"
                      onChange={ this.handleChange}
                      name="city" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">State</label>
            <div className="col-lg-4">
              <input type="text"
                      className="form-control"
                      placeholder="state"
                      onChange={ this.handleChange}
                      name="state" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Zip</label>
            <div className="col-lg-4">
              <input type="text"
                      className="form-control"
                      placeholder="zip"
                      onChange={ this.handleChange}
                      name="zip" />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Email Address</label>
            <div className="col-lg-4">
              <input type="text"
                      className="form-control"
                      placeholder="email"
                      onChange={ this.handleChange}
                      name="email" />
            </div>
          </div>
         {/* <button type="submit" form="guest-address" value="Submit"> Submit Address </button>
         */}
        <legend>Payment Info</legend>
        <input type="submit" value="Paypal" onClick={this.handleConfirmOrder}/>
        <br />
        <hr/>
          <button type="submit" form="guest-address" value="Submit"><Link to=`/receipt/${this.props.orderId}`>Submit Order</Link></button>
        </fieldset>
      </form>
      </div>
    )
  }
}
