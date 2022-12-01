import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <>
      {isMobile ? (
        <div className="about-mobile">
          <Header className="header" />
          <div className="about-content">
            <p style={{ fontWeight: "bold" }}>
              The PLAYBABE calendar is a non-profit project aiming at raising
              funds for feminist associations.
            </p>
            <img src="/images/about/about-mobile.jpg" alt="about-mobile" />
            <p style={{ fontSize: "1.3em" }}>
              By developing a form of hyper sexual visual language, we reclaim
              the traditional use of women's bodies in our culture and place it
              a the center of our political project.
            </p>
            <a href="https://www.hydra-berlin.de/">
              <img className="text" src="/images/about/text.PNG" alt="text" />
            </a>
            <Link to="/eshop" className="button">
              <img src="/images/about/button.PNG" alt="button" />
            </Link>
          </div>
          <Footer className="footer" />
        </div>
      ) : (
        <div className="about-desktop">
          <Header classname="header" />
          <div className="about-content">
            <div className="images">
              <img
                className="about1"
                src="/images/about/about1.jpg"
                alt="about1"
              />
              <img
                className="about3"
                src="/images/about/about3.jpg"
                alt="about3"
              />
              <img
                className="about4"
                src="/images/about/about4.jpg"
                alt="about4"
              />
              <img
                className="about2"
                src="/images/about/about2.jpg"
                alt="about2"
              />
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
                  and place it a the center of our political project.
                </p>
                <p style={{ fontWeight: "bold" }}>
                  This year PLAYBABE supports Sex Workers' Rights and give 100%
                  of Calendar sale benefits to{" "}
                  <a href="https://www.hydra-berlin.de/">HYDRA BERLIN.</a>
                </p>
                <div className="details">
                  <Link to={"/eshop"}>
                    <img src="/images/about/button.PNG" alt="button" />
                  </Link>
                  <p>
                    Aurélia Majean
                    <br />
                    & Lucy Owen Jones
                    <br />
                    Founders of PLAYBABE
                    <br />
                    <br />
                    <a href="mailto:info@playbabe.org">info@playbabe.org</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer classname="footer" />
        </div>
      )}
    </>
  );
};

export default About;
