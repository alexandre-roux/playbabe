import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="about">
          <div className="images">
            <img
              src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1657116945/playbabe/calendar_il5z7e.png"
              alt="calendar-preview"
            />
          </div>
          <div className="text">
            <div className="text-container">
              <p>
                This project questions the ways in which female bodies are
                perceived in society. Articulated as political territories up to
                this day, the PlayBabe Calendar unveils bodies through sensual
                images, away from the male gaze.
              </p>
              <p>
                Inspired by the aesthetic of erotic magazines, it aims to
                empower women, to regain their identities.
              </p>
              <div className="button-container">
                <Link to="/eshop">ORDER ONE EXEMPLAR</Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default About;
