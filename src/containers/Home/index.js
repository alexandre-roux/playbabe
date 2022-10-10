import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const images = [
  "/images/homepage/homepage.jpg",
  "/images/homepage/homepage2.jpg",
  "/images/homepage/homepage3.jpg",
  "/images/homepage/homepage4.jpg",
  "/images/homepage/homepage5.jpg",
  "/images/homepage/homepage6.jpg",
  "/images/homepage/homepage7.jpg",
  "/images/homepage/homepage8.jpg",
  "/images/homepage/homepage9.jpg",
  "/images/homepage/homepage10.jpg",
  "/images/homepage/homepage11.jpg",
  "/images/homepage/homepage12.jpg",
  "/images/homepage/homepage13.jpg",
  "/images/homepage/homepage14.jpg",
  "/images/homepage/homepage15.jpg",
  "/images/homepage/homepage16.jpg",
  "/images/homepage/homepage17.jpg",
  "/images/homepage/homepage18.jpg",
];

const Home = () => {
  const [imageURL, setImageURL] = useState("/images/homepage/homepage.jpg");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageURL(images[Math.floor(Math.random() * images.length)]);
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
    <Link
      to="/about"
      className="home-container"
      style={{
        backgroundImage: "url(" + imageURL + ")",
      }}
    >
      <h1
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          color: isHovering ? "#FB293D" : "white",
        }}
      >
        ENTER WEBSITE
      </h1>
      <images
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        src={isHovering ? "/images/logo-red.png" : "/images/logo-white.png"}
        alt="logo"
      />
      <h1
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          color: isHovering ? "#FB293D" : "white",
        }}
      >
        ENTER WEBSITE
      </h1>
    </Link>
  );
};

export default Home;
