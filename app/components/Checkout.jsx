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
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAddress = this.handleAddress.bind(this)
    this.handleSubmitOrder = this.handleSubmitOrder.bind(this)
    this.handleSaveAndPay = this.handleSaveAndPay.bind(this)
    // NOTE MAYBE SHOULD PUT REDUCER-USING SUBMIT ORDER BACK IN CONTAINER
  }

  handleAddress = function() {
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



  handleSaveAndPay = function(e) {
    e.preventDefault()
    handleAddress() // acts as a break with the alerts about address if necessary
    if (this.state.validAddress) {
      this.props.createGuest(this.state.guestEntry, this.props.orderId)
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
              <option value="PR">Puerto Rico</option>
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
        <legend>Please Pay via PayPal</legend>
        <br />
        <hr/>
          <button className="btn-danger" type="submit" form="guest-address" onClick={this.handleSaveAndPay}><Link to={`/paypal/${this.props.orderId}`}>Submit</Link></button>
        </fieldset>
      </form>) : }
    </div>
    )
  }
}
