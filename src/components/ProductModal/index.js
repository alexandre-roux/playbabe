import React, { useEffect, useState } from "react";

import "./index.scss";

const ProductModal = ({ product, setDisplayModal }) => {
  const [imageDetail, setImageDetail] = useState(product.imageDetailURL[0]);

  useEffect(() => {
    if (product.imageDetailURL.length > 1) {
      let i = 0;

      const intervalId = setInterval(() => {
        i++;
        if (i >= product.imageDetailURL.length) i = 0;
        setImageDetail(product.imageDetailURL[i]);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [product.name, product.imageDetailURL]);

  return (
    <div className="modal-overlay" onClick={() => setDisplayModal(false)}>
      <div
        className="modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src="/images/eshop/xmark-white.png"
          alt="close"
          className="xmark"
          onClick={() => setDisplayModal(false)}
        />
        <div className="modal-content">
          <div className="images">
            <img src={imageDetail} alt="product" />
          </div>
          <div className="text-button">
            <div className="text">
              <div className="title-price">
                <p className="title">{product.title}</p>
                <p className="price">{product.price + " €"}</p>
              </div>
              <p className="details">{product.details}</p>
            </div>
            <div className="button">
              {product.stripeURL ? (
                <a href={product.stripeURL}>
                  <img
                    src="/images/eshop/order-yours-white.png"
                    alt="order-yours"
                  />
                </a>
              ) : (
                <img src="/images/eshop/sold-out-yellow.png" alt="sold-out" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
