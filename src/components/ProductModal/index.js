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
        <div className="modal-container">
          <FontAwesomeIcon
            icon="xmark"
            className="xmark"
            onClick={() => setDisplayModal(false)}
          />
          <div className="modal-content">
            <div className="images">
              <img src={"/images/eshop/" + image + ".jpg"} alt="calendar" />
            </div>
            <div className="text"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
