import React, { Component } from 'react'
import { Link } from 'react-router'

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
    this.handleAddress = this.handleAddress.bind(this)
    this.handlePaymentSubmit = this.handlePaymentSubmit.bind(this)
    this.handlePaypalLogin = this.handlePaypalLogin.bind(this)
  }

  handleAddress = function(e) {
    e.preventDefault()
    
    let emptyFieldsArr = [];
    Object.keys(this.state.guestEntry).map(key => {
      if (this.state.guestEntry[key] === '') {
        emptyFieldsArr.push(key);
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

  handleSubmit = function(e) {
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
      (<form className="form-horizontal" >
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
              <input type="text"
                      className="form-control"
                      placeholder="state"
                      onChange={ this.handleChange }
                      name="state"
                      value={this.state.guestEntry.state} />
            </div>
          </div>
          <div className="form-group">
            <label className="col-lg-2 control-label">Zip</label>
            <div className="col-lg-4">
              <input type="text"
                      className="form-control"
                      placeholder="zip"
                      onChange={ this.handleChange }
                      name="zip"
                      value={this.state.guestEntry.zip} />
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
          <input type="submit" value="Submit Address" onClick={this.handleAddress} />
        {/*  information */}
        </fieldset>
        <legend>Payment Info</legend>
        <input type="submit" value="Paypal" onClick={this.handlePaymentSubmit}/>
        <br />
        <hr />
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
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

       // redirect to Register Page 
       //<button>Register</button> 

       // <button>Login</button>*/ 
