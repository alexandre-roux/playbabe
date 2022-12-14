import React from "react";

import "./index.scss";
import { Parallax } from "react-parallax";

const ParallaxImage = (props) => {
  return <Parallax bgImage={props.imageURL} />;
};

export default ParallaxImage;
