import React from 'react';

const Products = (props) => {
	const products = props.products


	return (
		<div className="products" >
			<h1>We got products!</h1>
			{console.log("LIST OF ALL PRODUCTS", products)}
		</div>
	)
}

export default Products;
