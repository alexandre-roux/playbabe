import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const images = [
  "/images/homepage/homepage.png",
  "/images/homepage/homepage2.png",
  "/images/homepage/homepage3.png",
  "/images/homepage/homepage4.png",
  "/images/homepage/homepage5.png",
  "/images/homepage/homepage6.png",
  "/images/homepage/homepage7.png",
  "/images/homepage/homepage8.png",
  "/images/homepage/homepage9.png",
  "/images/homepage/homepage10.png",
  "/images/homepage/homepage11.png",
  "/images/homepage/homepage12.png",
  "/images/homepage/homepage13.png",
  "/images/homepage/homepage14.png",
  "/images/homepage/homepage15.png",
  "/images/homepage/homepage16.png",
  "/images/homepage/homepage17.png",
  "/images/homepage/homepage18.png",
];

const Home = () => {
  const [imageURL, setImageURL] = useState("/images/homepage/homepage.png");

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
        src={
          isHovering
            ? "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661266858/playbabe/logo-red_z7ocjr.png"
            : "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661266858/playbabe/logo-white_tjhebp.png"
        }
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
