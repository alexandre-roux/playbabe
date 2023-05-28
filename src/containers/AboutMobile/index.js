import React from "react";
import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import "./index.scss";

const AboutMobile = () => {
  const navigate = useNavigate();

  const product = {
    imageURL: "/images/eshop/calendarp3.jpg",
    name: "PLAYBABE x P3 Pride Edition",
    price: 22,
    imageDetailURL: [
      "/images/eshop/calendarp31.jpg",
      "/images/eshop/calendarp32.jpg",
      "/images/eshop/calendarp33.jpg",
      "/images/eshop/calendarp34.jpg",
      "/images/eshop/calendarp35.jpg",
      "/images/eshop/calendarp36.jpg",
    ],
    title: "PLAYBABE X P3\n - Pride Edition 2023",
    details:
      "Format: 21 x 29.7cm\n12 x A4 exclusive photographies\nPrinted on Recycled 250g/m shiny paper and binded with a metal spiralcolored in Silver.\n\n100 % of the calendars' sales benefits will be for this edition given\nto “Le Syndicat du Strass” in France.\n",
    stripeURL: "https://buy.stripe.com/3cs3cm0jh1xa2S49AN",
  };

  return (
    <div className="about-mobile">
      <Header className="header" />
      <div className="about-container">
        <div className="about-content">
          <p style={{ fontWeight: "bold" }}>
            The PLAYBABE calendar is a non-profit project aiming at raising
            funds for feminist associations.
          </p>
          <div
            className="calendar-img"
            onClick={() =>
              navigate("/product", { state: { product: product } })
            }
          >
            <img src="/images/eshop/new-release-yellow.png" alt="new-release" />
          </div>
          <p style={{ fontSize: "1.3em" }}>
            By developing a form of hyper sexual visual language, we reclaim the
            traditional use of women's bodies in our culture and place it at the
            center of our political project.
          </p>
          <a
            href="https://www.hydra-berlin.de/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="text" src="/images/about/text.PNG" alt="text" />
          </a>
          <Link to="/eshop" className="button">
            <img src="/images/about/order-yours-black.png" alt="order-yours" />
          </Link>
        </div>
      </div>
      <Footer className="footer" />
    </div>
  );
};

export default AboutMobile;
