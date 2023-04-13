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
              {product.name.includes("Calendar") ? (
                <p>
                  Format: 29.7 x 42cm
                  <br />
                  12 x A3 exclusive photographies
                  <br />
                  Printed on Recycled 250g/m shiny paper and binded with a metal
                  spiralcolored in Siver.
                  <br />
                  <br />
                  100 % of the calendars' sales benefits will be this year given
                  to HYDRA Berlin.
                </p>
              ) : product.name.includes("Thong") ? (
                <p>
                  Hand sewn underwear made with upcycled fabrics, adjustable and
                  in different patterns, colors and sizes. We produce once we
                  receive order, let us know what you would love to have &lt;3
                </p>
              ) : (
                <p>
                  Screen-Printed Upcycled tee shirts with natural inks.
                  Available in different colors and sizes. Please get in touch
                  with us to know which one are still up for a grab :)
                </p>
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
