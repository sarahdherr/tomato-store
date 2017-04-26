import React from 'react'

  /* global dispatch */
const Receipt = ({orderId, status, cart, guest}) =>

  (
    <div>
    <h1>Order # { orderId } is { status }</h1>
    <h3>The below items will be shipped to the following address: </h3>
      <table className="container">
        <tbody>
          <tr>
            <td>{guest.name}</td>
          </tr>
          <tr >
            <td>{guest.email}</td>
          </tr>
          <tr >
            <td>{guest.address}</td>
          </tr>
          <tr >
            <td>{guest.city}, {guest.state}</td>
          </tr>
          <tr >
            <td>{guest.zip}</td>
          </tr>
        </tbody>
      </table>
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
          cart && cart.map(row =>
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

export default Receipt
