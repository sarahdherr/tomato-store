import React from 'react'
import { Link } from 'react-router'

  /* global dispatch*/
const Cart = (props) => {
  function handleCheckout(e) {
    props.checkoutCart(props.cart)
  }
  // TODOD:  + - Bttns to Quatntity td in table.
  console.log(props)
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
        {
          props.cart && props.cart.map(row =>
            (
              <tr key={row.product.id}>
                <td>{row.product.name}</td>
                <td>{row.quantity}</td>
                <td>${row.quantity * row.product.price}</td>
              </tr>
            )
          )
        }
        </tbody>
      </table>

      <Link to='/checkout'><button onClick={ handleCheckout }>Proceed to Checkout</button></Link>
      <Link to='/products'><button >Continue Shopping</button></Link>
    </div>
  )
}

export default Cart
