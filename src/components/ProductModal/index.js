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
            <div className="posters">
              <div className="posters1">
                <img
                  src="/public/images/eshop/posters/chancel-small.jpg"
                  alt="chancel"
                />
                <img
                  src="/public/images/eshop/posters/lisa-small.jpg"
                  alt="lisa"
                />
                <img
                  src="/public/images/eshop/posters/nasi-small.jpg"
                  alt="nasi"
                />
                <img
                  src="/public/images/eshop/posters/sabi-small.jpg"
                  alt="sabi"
                />
                <img
                  src="/public/images/eshop/posters/margarita-small.jpg"
                  alt="margarita"
                />
              </div>
              <div className="posters2">
                <img
                  src="/public/images/eshop/posters/jasmin-small.jpg"
                  alt="jasmin"
                />
                <img
                  src="/public/images/eshop/posters/lara-small.jpg"
                  alt="lara"
                />
                <img
                  src="/public/images/eshop/posters/misha-small.jpg"
                  alt="misha"
                />
                <img
                  src="/public/images/eshop/posters/audrey-small.jpg"
                  alt="audrey"
                />
              </div>
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
