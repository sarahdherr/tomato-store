import React from 'react'

  /* global dispatch */
const Receipt = (props) => {
  function handleCheckout(e) {
    props.checkoutReceipt(props.cart)
  }
  // TODOD:  + - Bttns to Quatntity td in table.
  // console.log(props)
  return (
    <div>
    <h1>`Order${this.props.orderId}`</h1>
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
    </div>
  )
}

export default Receipt