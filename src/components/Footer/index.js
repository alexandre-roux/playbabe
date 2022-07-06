import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./index.scss";

const Footer = () => {
  const location = useLocation();

  return (
    <div className="footer">
      <Link
        className={location.pathname === "/eshop" ? "selected" : ""}
        to="/eshop"
      >
        ESHOP
      </Link>
      <Link
        className={location.pathname === "/about" ? "selected" : ""}
        to="/about"
      >
        ABOUT
      </Link>
    </div>
  );
};

export default Footer;
