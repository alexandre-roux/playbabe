import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const Home = () => {
  const [background, setBackground] = useState("homepage1");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackground("homepage" + Math.floor(Math.random() * 19 + 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [isHovering, setIsHovering] = useState(false);
  const colors = ["#FF1739", "#DEFF42"];
  const [textColor, setTextColor] = useState(colors[0]);

  const handleMouseOver = () => {
    setIsHovering(true);
    setTextColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="home-container">
      <img
        src="/images/homepage/homepage1.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage1" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage2.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage2" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage3.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage3" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage4.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage4" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage5.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage5" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage6.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage6" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage7.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage7" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage8.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage8" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage9.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage9" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage10.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage10" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage11.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage11" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage12.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage12" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage13.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage13" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage14.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage14" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage15.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage15" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage16.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage16" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage17.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage17" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage18.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage18" ? "block" : "none",
        }}
      />
      <img
        src="/images/homepage/homepage19.jpg"
        alt="background"
        style={{
          display:
            background === "" || background === "homepage19" ? "block" : "none",
        }}
      />
      <Link to="/about" className="text-container">
        <h2
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            color: isHovering ? textColor : "white",
          }}
        >
          ENTER WEBSITE
        </h2>
        <h1
          className="logo"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            color: isHovering ? textColor : "white",
          }}
        >
          PLAYBABE
        </h1>
        <h2
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          style={{
            color: isHovering ? textColor : "white",
          }}
        >
          ENTER WEBSITE
        </h2>
      </Link>
    </div>
  );
};

export default Home;
