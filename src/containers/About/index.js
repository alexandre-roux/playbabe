import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import Images from "../../components/Images";
import AboutMobile from "../AboutMobile";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
  const navigate = useNavigate();

  return (
    <>
      {isMobile ? (
        <AboutMobile />
      ) : (
        <div className="about-desktop">
          <Header />
          <div className="about-content">
            <div className="images">
              <Images />
            </div>
            <div className="text">
              <div className="text-container">
                <p>
                  The PLAYBABE calendar is a non-profit project aiming at
                  raising funds for feminist associations.
                </p>
                <p>
                  By developing a form of hyper sexual visual language, we
                  reclaim the traditional use of women's bodies in our culture
                  and place it at the center of our political project.
                </p>
                <p style={{ fontWeight: "bold" }}>
                  This year PLAYBABE supports Sex Workers' Rights and give 100%
                  of Calendar sale benefits to{" "}
                  <a
                    href="https://www.hydra-berlin.de/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    HYDRA BERLIN.
                  </a>
                </p>
                <div className="details">
                  <div className="order-yours-container">
                    <img
                      src="/images/about/order-yours-black.png"
                      alt="button"
                      className="order-yours"
                      onClick={() => navigate("/eshop")}
                    />
                  </div>
                  <p>
                    Aurélia Majean
                    <br />
                    & Lucy Owen Jones
                    <br />
                    Founders of PLAYBABE
                    <br />
                    <a href="mailto:info@playbabe.org">info@playbabe.org</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default About;
