import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer";
import "./index.scss";

const ProductPage = () => {
  const location = useLocation();
  const product = location.state.product;
  const [image, setImage] = useState("calendar1");
  const navigate = useNavigate();

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
    <div className="product">
      <FontAwesomeIcon
        icon="xmark"
        className="xmark"
        onClick={() => navigate("/eshop")}
      />
      <div className="product-container">
        <div className="product-content">
          <img
            src={
              product.name.includes("Calendar")
                ? "/images/eshop/" + image + ".jpg"
                : product.imageDetailURL
            }
            alt="calendar"
          />
          <div className="title-price">
            <p className="title">{product.title}</p>
            <p className="price">{product.price + " €"}</p>
          </div>
          <div className="description-button">
            <p className="details">{product.details}</p>
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
      <Footer className="footer" />
    </div>
  );
};

export default ProductPage;
