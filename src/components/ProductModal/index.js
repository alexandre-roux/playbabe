import React, { useEffect, useState } from "react";

import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductModal = ({ product, setDisplayModal }) => {
  const [calendarImage, setCalendarImage] = useState("calendar1");

  useEffect(() => {
    if (product.name.includes("Calendar")) {
      let i = 1;

      const intervalId = setInterval(() => {
        i++;
        if (i > 3) i = 1;
        setCalendarImage("calendar" + i);
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [product.name]);

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
                  ? "/images/eshop/" + calendarImage + ".jpg"
                  : product.imageDetailURL
              }
              alt="product"
            />
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
              {product.name.includes("Calendar") ? (
                <a href="https://buy.stripe.com/00g00aea7cbO78kcMO">
                  <img
                    src="/images/eshop/order-yours-white.png"
                    alt="order-yours"
                  />
                </a>
              ) : product.name.includes("Thong") ? (
                <a href="https://buy.stripe.com/8wMaEO5DBcbO9gs7sy">
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
