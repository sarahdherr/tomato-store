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
