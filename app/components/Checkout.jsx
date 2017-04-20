import React from 'react'
import { Link } from 'react-router'

const Checkout = (props) => {
  function onClick(e) {
    console.log('This is the event object: ', e)
  }

  const handleInputValue = function(e) {
  e.preventDefault()
  console.log('target is', e.target)
  //set orderId to req.body.orderId
}

  return (
        <div>
        {/* redirect to Register Page 
        <button>Register</button>

        // <button>Login</button>*/}
        <form className="form-horizontal" onSubmit={props.handleInputValue}>
          <fieldset>
          <legend>Shipping Info</legend>
          <div className="form-group">
            <label className="col-lg-2 control-label">Name</label>
            <div className="col-lg-4">
              <input type="text" className="form-control" id="inputEmail" placeholder="name" />
            </div>
          </div>
          Address: <input type="text" name="address" /><br />
          City: <input type="text" name="city" /><br />
          State: <input type="text" name="state" /><br />
          Zip: <input type="text" name="zip" /><br />
          Email: <input type="text" name="email" /><br />
          <input type="submit" value="Submit" />
        <label>Order Review</label>
        {/*  information */}
          </fieldset>
        </form>
        <button onClick={props.handlePaymentSubmit}>Pay Pal</button>
        </div>
  )
}

export default Checkout
