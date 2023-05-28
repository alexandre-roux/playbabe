import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import "./index.scss";

const ProductPage = () => {
  const location = useLocation();
  const product = location.state.product;
  const [imageDetail, setImageDetail] = useState(product.imageDetailURL[0]);
  const navigate = useNavigate();

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
  }, [product.imageDetailURL]);

  return (
    <div className="product">
      <img
        src="/images/eshop/xmark-white.png"
        alt="close"
        className="xmark"
        onClick={() => navigate("/eshop")}
      />
      <div className="product-container">
        <div className="product-content">
          <img src={imageDetail} alt="product" />
          <div className="title-price">
            <p className="title">{product.title}</p>
            <p className="price">{product.price + " €"}</p>
          </div>
          <div className="description-button">
            <p className="details">{product.details}</p>
            {product.stripeURL ? (
              <a href={product.stripeURL}>
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
