import React from "react";

import "./index.scss";

const ProductModal = ({ name, price, setDisplayModal }) => {
  return (
    <>
      <div className="modal-overlay" onClick={() => setDisplayModal(false)}>
        <div className="modal-container"></div>
      </div>
    </>
  );
};

export default ProductModal;
