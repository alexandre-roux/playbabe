import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";
import { useMediaQuery } from "react-responsive";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <>
      {isMobile ? (
        <div className="about-mobile">
          <Header className="header" />
          <div className="about-content">
            <div className="text">
              <p>
                The PLAYBABE calendar is a non-profit project aiming at raising
                funds for feminist associations.
              </p>
              <p>
                By developing a form of hyper sexual visual language, we reclaim
                the traditional use of women's bodies in our culture and place
                it a the center of our political project.
              </p>
              <div className="details">
                <p>
                  Formats we offer
                  <br />
                  / A3 Calendar, limited edition, number and reprint possible
                  <br />
                  / Unique upcycled underwear designed by Lucy
                  <br />
                  / Upcycled Tee shirts
                  <br />
                  / Risography prints
                  <br />/ Postcards
                </p>
                <p>
                  100% of our sales benefits will be given this year to HYDRA
                  BERLIN for our 2023 edition.
                  <br />
                  Read more about the association here:
                  https://www.hydra-berlin.de/
                </p>
                <p>
                  Reach out to us:
                  <br />
                  info@playbabe.com
                  <br />
                  Aurélia Majean
                  <br />
                  +33 670875219
                  <br />
                  Lucy Owen Jones
                  <br />
                  +49 159 01071248
                </p>
              </div>
              <Button text="ORDER ONE EXEMPLAR" to="/eshop" />
              <img src="/images/calendar.png" alt="calendar-preview" />
            </div>
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
                  <span style={{ textDecorationLine: "underline" }}>
                    HYDRA BERLIN.
                  </span>
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
                    <span style={{ fontWeight: "bold" }}>
                      info@playbabe.org
                    </span>
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
