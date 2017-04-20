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

    this.onClick = this.onClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  onClick = function(e) {
    console.log('This is the event object: ', e)
  }

  handleChange = function(e) {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('state', this.state)
    // set orderId to req.body.orderId
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
                    id="inputEmail"
                    placeholder="name"
                    onChange={ this.handleChange}
                    name="name" />
          </div>
        </div>
        Address: <input type="text" name="address" onChange={ this.handleChange} /><br />
        City: <input type="text" name="city" /><br />
        State: <input type="text" name="state" /><br />
        Zip: <input type="text" name="zip" /><br />
        Email: <input type="text" name="email" /><br />
        <input type="submit" value="Submit" />
      <label>Order Review</label>
      {/*  information */}
        </fieldset>
      </form>
      <button onClick={this.props.handlePaymentSubmit}>Pay Pal</button>
      </div>
    )
  }
}

       // redirect to Register Page 
       //<button>Register</button> 

       // <button>Login</button>*/ 
