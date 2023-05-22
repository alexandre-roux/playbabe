import React from "react";
import "./index.scss";
import { Parallax } from "react-parallax";

const Images = () => {
  return (
    <div className="images">
      <div className="about1">
        <Parallax
          bgImage={"/images/about/about1.jpg"}
          strength={200}
          style={{ zIndex: -2, height: 350 }}
        />
      </div>
      <div className="about3">
        <Parallax
          bgImage={"/images/about/about3.jpg"}
          strength={200}
          style={{ zIndex: -1, height: 540 }}
        />
      </div>
      <div className="about4">
        <Parallax
          bgImage={"/images/about/about4.jpg"}
          strength={200}
          style={{ zIndex: -2, height: 480 }}
        />
      </div>
      <div className="about2">
        <Parallax
          bgImage={"/images/about/about2.jpg"}
          strength={200}
          style={{ zIndex: -2 }}
        >
          <div style={{ height: 325 }} />
        </Parallax>
      </div>
    </div>
  );
};

export default Images;
