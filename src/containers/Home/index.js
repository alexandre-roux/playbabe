import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const images = [
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265597/playbabe/homepage/homepage4_rpbwoy.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265595/playbabe/homepage/homepage_yplsdb.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265594/playbabe/homepage/homepage2_q88lz7.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265593/playbabe/homepage/homepage3_py3arl.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265592/playbabe/homepage/homepage13_ojwiwe.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265592/playbabe/homepage/homepage14_tc1y6k.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265592/playbabe/homepage/homepage15_lxqroz.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265591/playbabe/homepage/homepage16_xbbtxv.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265590/playbabe/homepage/homepage11_rhawfg.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265589/playbabe/homepage/homepage12_gtixbq.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265587/playbabe/homepage/homepage9_wjqdvt.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265586/playbabe/homepage/homepage8_lvzas0.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265585/playbabe/homepage/homepage10_tz2ri2.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265585/playbabe/homepage/homepage5_v9uxic.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265584/playbabe/homepage/homepage6_ygzob3.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661265583/playbabe/homepage/homepage7_q2rwht.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661267488/playbabe/homepage/homepage18_be2gk7.png",
  "https://res.cloudinary.com/dyj1ddjba/image/upload/v1661267488/playbabe/homepage/homepage17_kajbvx.png",
];

const Home = () => {
  const [imageURL, setImageURL] = useState(
    "ttps://res.cloudinary.com/dyj1ddjba/image/upload/v1661265597/playbabe/homepage/homepage4_rpbwoy.png"
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageURL(images[Math.floor(Math.random() * images.length)]);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Link
      to="/about"
      className="home-container"
      style={{
        backgroundImage: "url(" + imageURL + ")",
      }}
    >
      <h1>ENTER WEBSITE</h1>
      <img
        className="logo-white"
        src="https://res.cloudinary.com/dyj1ddjba/image/upload/v1661266858/playbabe/logo-white_tjhebp.png"
        alt="logo-white"
      />
      <h1>ENTER WEBSITE</h1>
    </Link>
  );
};

export default Home;
