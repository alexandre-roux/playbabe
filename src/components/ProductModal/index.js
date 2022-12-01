import React, { useEffect, useState } from "react";

import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductModal = ({ name, price, setDisplayModal }) => {
  const [image, setImage] = useState("calendar1");

  useEffect(() => {
    let i = 1;

    const intervalId = setInterval(() => {
      i++;
      if (i > 3) i = 1;
      setImage("calendar" + i);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
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
              <img src={"/images/eshop/" + image + ".jpg"} alt="calendar" />
            </div>
            <div className="text-button">
              <div className="text">
                <div className="title-price">
                  {name === "Calendar Edition 2023" && (
                    <p>
                      CALENDAR A3
                      <br /> - Edition 2023
                    </p>
                  )}
                  <p className="price">{price + " €"}</p>
                </div>
                <p>
                  Format: 29.7 x 42cm
                  <br />
                  Printed on Recycled 250g/m paper
                  <br />
                  Binded with a metal spiral
                  <br />
                  12 x A3 exclusive photographies
                </p>
              </div>
              <div className="button">
                <img src="/images/eshop/order-yours-white.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
