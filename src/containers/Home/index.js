import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const images = [
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397642/playbabe/homepage/homepage11_mppth8.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397642/playbabe/homepage/homepage12_sjynua.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397642/playbabe/homepage/homepage9_digoyp.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397641/playbabe/homepage/homepage10_gjascf.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397640/playbabe/homepage/homepage8_txhtom.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397640/playbabe/homepage/homepage5_l2ubke.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397640/playbabe/homepage/homepage7_bg8fha.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397639/playbabe/homepage/homepage6_bvb5me.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397639/playbabe/homepage/homepage4_wbenb6.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397639/playbabe/homepage/homepage17_cvlcxz.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397638/playbabe/homepage/homepage2_srmlj1.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397637/playbabe/homepage/homepage14_uji8jm.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397638/playbabe/homepage/homepage16_leabn4.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397638/playbabe/homepage/homepage3_crvhcu.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397637/playbabe/homepage/homepage15_uamoeq.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397637/playbabe/homepage/homepage13_ttulpe.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397637/playbabe/homepage/homepage18_nzksme.jpg",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1665397637/playbabe/homepage/homepage_n23v4x.jpg",
];

const Home = () => {
  const [imageURL, setImageURL] = useState(
    "ttps://res.cloudinary.com/dyj1ddjba/image/upload/v1661265597/playbabe/homepage/homepage4_rpbwoy.png"
  );

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
      <img
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
