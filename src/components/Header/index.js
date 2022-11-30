import React from "react";

import "./index.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/about">
        <img
          className="logo-black"
          src="/images/logo-black.png"
          alt="logo-black"
        />
      </Link>
    </div>
  );
};

export default Header;
