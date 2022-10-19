import React from "react";

import "./index.scss";

const Product = ({ product }) => {
  console.log(product);

  return (
    <div className="product">
      <img className="product-image" src={product.imageURL} alt="product" />
      <div className="product-details">
        <span className="name">{product.name}</span>
        <span className="price">{product.price} €</span>
      </div>
    </div>
  );
};

export default Product;
