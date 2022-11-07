import React, { useEffect, useState } from "react";

import "./index.scss";

const Home = () => {
  const [background, setBackground] = useState("start");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackground("homepage" + Math.floor(Math.random() * 16 + 1));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
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
      <div className="logo-container">
        <img
          className="logo"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          src={isHovering ? "/images/logo-red.png" : "/images/logo-white.png"}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Home;
