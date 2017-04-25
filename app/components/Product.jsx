import React from 'react'
import { Link } from 'react-router'
import { fetchCart, changeItemQuantity, itemIncrement } from 'APP/app/reducers/cart'
import store from 'APP/app/store'

const Product = (product = {}) => {
  function onClick(e) {
    store.dispatch(itemIncrement(product.id))
  }

  return (
          <div className="jumbotron">
            <h1>{ product.name }</h1>
            <img src={ product.imageURL } />
            <p>${product.price}</p>
            {
              product.inventory < 5 ? (
                <p>Remaining stock is only... {product.inventory}</p>
              ) : (
                <p>Stock: {product.inventory}</p>
              )
            }
            
            <p><a className="btn btn-primary btn-lg" onClick= { onClick }>Add To Cart</a></p>
          </div>
  )
}

export default Product
