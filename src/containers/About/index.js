import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <h1>Bonjour :)</h1>
        <Footer />
      </>
    );
  }
}

export default About;
