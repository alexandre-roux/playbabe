import React from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import "./index.scss";

const AboutMobile = () => {
  return (
    <div className="about-mobile">
      <Header className="header" />
      <div className="about-container">
        <div className="about-content">
          <p style={{ fontWeight: "bold" }}>
            The PLAYBABE calendar is a non-profit project aiming at raising
            funds for feminist associations.
          </p>
          <img
            className="calendar-img"
            src="/images/about/about-mobile.jpg"
            alt="about-mobile"
          />
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
