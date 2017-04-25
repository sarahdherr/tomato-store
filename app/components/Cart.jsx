import React from 'react'
import { Link } from 'react-router'

/* global dispatch */
const Cart = (props) => {
  const handleCheckout = (e) => {
    props.checkoutCart(props.cart, props.userId)
  }

  const itemIncrement = (e) => {
    props.itemIncrement(e.target.value)
  }

  const itemDecrement = (e) => {
    props.itemDecrement(e.target.value)
  }

  const removeItem = (e) => {
    props.removeItem(e.target.value)
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
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {
          props.cart && props.cart.map(row =>
            (
              <tr key={row.product.id}>
                <td>{row.product.name}</td>
                <td>{row.quantity}
                  <button value={row.product.id} onClick={ itemIncrement }>+</button>
                  <button value={row.product.id} onClick={ itemDecrement }>-</button>
                </td>
                <td>${row.quantity * row.product.price}</td>
                <td><button value={row.product.id} onClick={ removeItem }>X</button></td>
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
