import React, { useState } from "react";

import "./index.scss";
import ProductModal from "../ProductModal";
import { useMediaQuery } from "react-responsive";
import { Navigate } from "react-router-dom";

const Product = ({ product }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <>
      <div className="product" onClick={() => setDisplayModal(true)}>
        <img className="product-image" src={product.imageURL} alt="product" />
        <div className="product-details">
          <span className="name">{product.name}</span>
          <span className="price">{product.price} €</span>
        </div>
      </div>
      {displayModal &&
        !(
          product.name.includes("XXL") || product.name.includes("Screenprinted")
        ) &&
        (isMobile ? (
          <Navigate
            to="/product"
            state={{ name: product.name, price: product.price }}
          />
        ) : (
          <ProductModal
            name={product.name}
            price={product.price}
            setDisplayModal={setDisplayModal}
          />
        ))}
    </>
  );
};

export default Product;
