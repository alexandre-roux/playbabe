import React from "react";

import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductModal = ({ name, price, setDisplayModal }) => {
  return (
    <>
      <div className="modal-overlay" onClick={() => setDisplayModal(false)}>
        <div className="modal-container">
          <FontAwesomeIcon
            icon="xmark"
            className="xmark"
            onClick={() => setDisplayModal(false)}
          />
          <div className="modal-content">
            <div className="images">
              <img src="/images/eshop/calendar1.jpg" alt="calendar" />
            </div>
            <div className="text"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
