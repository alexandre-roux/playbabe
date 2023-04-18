import React, { useState } from "react";

import "./index.scss";
import ProductModal from "../ProductModal";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const navigate = useNavigate();

  const handleCLick = () => {
    if (isMobile) {
      navigate("/product", { state: { product: product } });
    } else {
      setDisplayModal(true);
    }
  };

  return (
    <>
      <div className="product" onClick={() => handleCLick()}>
        <img className="product-image" src={product.imageURL} alt="product" />
        <div className="product-details">
          <span className="name">{product.name}</span>
          <span className="price">{product.price} €</span>
        </div>
      </div>
      {displayModal && (
        <ProductModal product={product} setDisplayModal={setDisplayModal} />
      )}
    </>
  );
};

export default Product;
