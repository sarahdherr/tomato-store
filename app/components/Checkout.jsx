import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

export default class Checkout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guestEntry: {
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: ''
      },
      validAddress: false,
      showPayment: false,
      validPayment: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePaypalButton = this.handlePaypalButton.bind(this)
    this.handleAddress = this.handleAddress.bind(this)
    this.handlePaymentSubmit = this.handlePaymentSubmit.bind(this)
    this.handlePaypalLogin = this.handlePaypalLogin.bind(this)
  }

  handleAddress = function(e) {
    e.preventDefault()

    let emptyFieldsArr = []
    Object.keys(this.state.guestEntry).map(key => {
      if (this.state.guestEntry[key] === '') {
        emptyFieldsArr.push(key)
      }
    })

    if (emptyFieldsArr.length) {
      alert('Please fill in empty feilds: ' + emptyFieldsArr.join(', '))
    } else {
      alert('Shipping information accepted.')
      this.setState({ validAddress: true })
    }
  }

  handleChange = function(e) {
    e.preventDefault()
    this.setState({
      guestEntry: { ...this.state.guestEntry, [e.target.name]: e.target.value }
    })
  }

  handlePaymentSubmit = function(e) {
    e.preventDefault()
    console.log(this.state)
    if (!this.state.validAddress) {
      alert('Please fill in shipping info first.')
    } else {
      this.setState({ showPayment: true })
    }
  }

  handlePaypalLogin = function(e) {
    e.preventDefault()
    this.setState({ showPayment: false, validPayment: true })
  }

  handlePaypalButton = function(e) {
    e.preventDefault()
    // use props.orderId to change order's status to confirmed
    axios.put(`api/orders/${this.props.orderId}`, {status: 'confirmed'})
    .then(() => this.setState({ showPayment: true, validPayment: true }))
    .catch(err => console.error(err))
  }

  handleSubmit = function(e) {
    console.log('IN HANDLE SUBMIT', this.state)
    e.preventDefault()
    if (this.state.validAddress && this.state.validPayment) {
      this.props.handleSubmitOrder(this.state.guestEntry, this.props.orderId)
    } else {
      alert('Please complete shipping and payment information.')
    }
  }

  render() {
    return (
      <div>

      { !this.state.showPayment ?
            (<form id="guest-address" className="form-horizontal">
        <fieldset>
          <legend>Shipping Info</legend>
          <div className="form-group">
            <label className="col-lg-2 control-label">Name</label>
            <div className="col-lg-4">
              <input type="text"
                      placeholder="name"
                      className="form-control"
                      onChange={ this.handleChange }
                      name="name"
                      value={this.state.guestEntry.name} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Address</label>
            <div className="col-lg-4">
              <input type="text"
                      className="form-control"
                      placeholder="address"
                      onChange={ this.handleChange }
                      name="address"
                      value={this.state.guestEntry.address} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">City</label>
            <div className="col-lg-4">
              <input type="text"
                      className="form-control"
                      placeholder="city"
                      onChange={ this.handleChange }
                      name="city"
                      value={this.state.guestEntry.city} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">State</label>
            <div className="col-lg-4">
              { /* <input type="text"
                      className="form-control"
                      placeholder="state"

                      onChange={ this.handleChange}
                      name="state" /> */ }
              <select className="form-control"
                      placeholder="state"
                      onChange={ this.handleChange}
                      name="state" >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Zip</label>
            <div className="col-lg-4">
              <input type="text"
                      className="form-control"
                      placeholder="zip"
                      onChange={ this.handleChange}
                      name="zip"
                      pattern="[0-9]{5}"/>
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Email Address</label>
            <div className="col-lg-4">
              <input type="text"
                      className="form-control"
                      placeholder="email"
                      onChange={ this.handleChange }
                      name="email"
                      value={this.state.guestEntry.email} />
            </div>
          </div>
          <button className="btn" onClick={this.handleAddress}>Submit Address</button>
        <legend>Payment Info</legend>
        <button className="btn" onClick={this.handlePaypalButton}>Paypal</button>
        <br />
        <hr/>
          <button className="btn-danger" type="submit" form="guest-address" onClick={this.handleSubmit}><Link to={`/receipt/${this.props.orderId}`}>Submit Order</Link></button>
        </fieldset>
      </form>) : (
      <div>
        <h1>Welcome to PayPal</h1>
        <h3>Please log in</h3>
        <form onSubmit={this.handlePaypalLogin}>
          <label>Username: </label>
          <input />

          <label>Password: </label>
          <input />

          <button type="submit">Log In</button>
        </form>
      </div>)}
    </div>
    )
  }
}
