import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";
import { useMediaQuery } from "react-responsive";
import Button from "../../components/Button";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <>
      {isMobile ? (
        <div className="about-mobile">
          <Header />
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
          <Footer />
        </div>
      ) : (
        <div className="about-desktop">
          <Header />
          <div className="about-content">
            <div className="images">
              <img src="/images/calendar.png" alt="calendar-preview" />
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
