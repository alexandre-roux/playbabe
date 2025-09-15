import React from "react";
import {Link, useLocation} from "react-router-dom";

import "./index.scss";

const Footer = () => {
    const location = useLocation();

    return (
        <div className="footer">
            <div className="footer-content">
                <Link
                    className={
                        location.pathname === "/eshop" || location.pathname === "/product"
                            ? "selected"
                            : ""
                    }
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
        </div>
    );
};

export default Footer;
