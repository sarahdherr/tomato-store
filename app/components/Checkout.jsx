import React, { Component } from 'react'
import { Link } from 'react-router'

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

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = function(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
    // set orderId to req.body.orderId
  }

  handleSubmit = function(e) {
    e.preventDefault()
    this.props.handleSubmitOrder(this.state)
  }

  render() {
    return (
      <div>
      <form className="form-horizontal" >
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
          <input type="submit" value="Submit Address" onClick={console.log('Address Confirmed')} />
        {/*  information */}
        </fieldset>
        <legend>Payment Info</legend>
        <input type="submit" value="Paypal" onClick={this.handlePaymentSubmit}/>
        <br />
        <hr />
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
      </form>
      </div>
    )
  }
}

       // redirect to Register Page 
       //<button>Register</button> 

       // <button>Login</button>*/ 
