import React from 'react'
import {Link} from 'react-router'

const Products = ({products=[]}) =>
    <div className="products container-fluid ">
      <h1>Products</h1>
      {
        products.map(product => {
          return (
            <div className="product-item col-md-12 col-lg-6 col-xl-4" key={product.id}>
              <Link to={`/products/${product.id}`}><img className="product-img" src={product.imageURL} /></Link>
              <p>{product.name}</p>
            </div>)
        })
      }
    </div>

export default Products
