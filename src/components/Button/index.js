import React from "react";

import "./index.scss";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div className="button">
      <Link to={props.to}>{props.text}</Link>
    </div>
  );
};

export default Button;
