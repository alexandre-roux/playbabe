import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

class Home extends Component {
  render() {
    return (
      <Link to="/about" className="home-container">
        <h1>ENTER WEBSITE</h1>
        <img
          className="logo-white"
          src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1654705235/playbabe/logo-white_v8hd1r.png"
          alt="logo-white"
        />
        <h1>ENTER WEBSITE</h1>
      </Link>
    );
  }
}

export default Home;
