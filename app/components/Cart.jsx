import React from 'react'
import { Link } from 'react-router'

const Cart = (props) => {
  function onClick(e) {
    console.log('This is the event object: ', e)
  }

  return (
        <div>
        <h2>Cart</h2>
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Column content</td>
                <td>Column content</td>
                <td>Column content</td>
              </tr>
            </tbody>
          </table> 

          <button>Proceed to Checkout</button>
          <button>Continue Shopping</button>
        </div>
        )
}

export default Cart