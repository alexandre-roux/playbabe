import React, { useState } from "react";

import "./index.scss";
import ProductModal from "../ProductModal";

const Product = ({ product }) => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <>
      <div className="product" onClick={() => setDisplayModal(true)}>
        <img className="product-image" src={product.imageURL} alt="product" />
        <div className="product-details">
          <span className="name">{product.name}</span>
          <span className="price">{product.price} €</span>
        </div>
      </div>
      {displayModal && (
        <ProductModal
          name={product.name}
          price={product.price}
          setDisplayModal={setDisplayModal}
        />
      )}
    </>
  );
};

export default Product;
