import React from 'react'
import { Link } from 'react-router'

const SingleView = (props) => {
  // HOW TO DEAL WITH ISSUE OF PRODUCTS THAT ARE OUT OF STOCK?
  // I WOULD IDEALLY LIKE THE IMAGE TO BECOME GREYSCALE.
  // WE THINK THAT WOULD JUST BE A CSS CLASS FOR GREYSCALE.
  // ALSO PENDING: MAKING A LINK TO THE CART VIEW
  function onClick(e) {
   // ADD TO SESSION CART, AND THEN REDIRECT TO CART VIEW OR ALL PRODUCTS PAGES
  }
  return (
          <div className="jumbotron">
            <h1>{ props.name }</h1>
            <img src={ props.imageURL } />
            <p>`${props.price} $`</p>
            <p>{`Reamaining stock is only... ${props.quantity}`}</p>
            <p>{`NutritionFacts pending: ${props.nutritionFacts}`}</p>
            <p><a className="btn btn-primary btn-lg" onClick= { onClick }>Add To Cart</a></p>
          </div>
          )
}
