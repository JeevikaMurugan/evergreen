/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/Product.js
import React from 'react';
import '../Styles/Product.css'; // Import product styles
// import placeholderImage from '../assets/images/placeholder.jpg'; // Import placeholder image

const Product = ({ name, price, description }) => {
  return (
    <div className="product">
      {/* <img src={placeholderImage} alt={name} className="product-image" /> */}
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
