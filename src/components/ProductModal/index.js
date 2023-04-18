import React, { useEffect, useState } from "react";

import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductModal = ({ product, setDisplayModal }) => {
  const [image, setImage] = useState("calendar1");

  useEffect(() => {
    let i = 1;

    const intervalId = setInterval(() => {
      i++;
      if (i > 3) i = 1;
      setImage("calendar" + i);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="modal-overlay" onClick={() => setDisplayModal(false)}>
      <div
        className="modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        <FontAwesomeIcon
          icon="xmark"
          className="xmark"
          onClick={() => setDisplayModal(false)}
        />
        <div className="modal-content">
          <div className="images">
            <img
              src={
                product.name.includes("Calendar")
                  ? "/images/eshop/" + image + ".jpg"
                  : product.imageDetailURL
              }
              alt="calendar"
            />
          </div>
          <div className="text-button">
            <div className="text">
              <div className="title-price">
                <p className="title">{product.title}</p>
                <p className="price">{product.price + " €"}</p>
              </div>
              <p className="details">{product.details}</p>
              {product.name.includes("Calendar") ? (
                <p></p>
              ) : product.name.includes("Thong") ? (
                <p></p>
              ) : (
                <p></p>
              )}
            </div>
            <div className="button">
              {product.name.includes("Calendar") ? (
                <a href="https://buy.stripe.com/00g00aea7cbO78kcMO">
                  <img
                    src="/images/eshop/order-yours-white.png"
                    alt="order-yours"
                  />
                </a>
              ) : product.name.includes("Screenprinted") ? (
                <img src="/images/eshop/sold-out-yellow.png" alt="sold-out" />
              ) : (
                <a href="mailto:info@playbabe.org">
                  <img
                    src="/images/eshop/contact-us-white.png"
                    alt="contact-us"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
