import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";
import Product from "../../components/Product";
import { useMediaQuery } from "react-responsive";

const Eshop = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const data = [
    {
      imageURL: "/images/eshop/calendar.jpg",
      name: "Calendar Edition 2023",
      price: 35,
      title: "CALENDAR A3\n - Edition 2023",
    },
    {
      imageURL: "/images/eshop/string.png",
      name: "« PLAYBABE » Upcycled Thong",
      price: 65,
      imageDetailURL: "/images/eshop/string1.jpg",
      title: "PLAYBABE 23\nTHONG",
    },
    {
      imageURL: "/images/eshop/tee-shirt.jpeg",
      name: "Screenprinted Tee shirts",
      price: 25,
      imageDetailURL: "/images/eshop/tee-shirt1.jpeg",
      title: "UPCYCLED\nTEE SHIRT\n« FACE OF AN ANGEL\nBODY OF A PORNSTAR »",
    },
    {
      imageURL: "/images/eshop/poster.jpg",
      name: "XXL poster (A0 format)",
      price: 125,
      imageDetailURL: "/images/eshop/poster.jpg",
      title: "A0 Poster\nXXL Format",
    },
  ];

  return (
    <>
      {isMobile ? (
        <div className="eshop-mobile">
          <Header className="header" />
          <div className="eshop-container">
            <div className="eshop-content">
              {data.map((product, index) => {
                return (
                  <Product classname="product" key={index} product={product} />
                );
              })}
            </div>
          </div>
          <Footer className="footer" />
        </div>
      ) : (
        <div className="eshop-desktop">
          <Header />
          <div className="eshop-content">
            <div className="row">
              {data.map((product, index) => {
                return (
                  <Product classname="product" key={index} product={product} />
                );
              })}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Eshop;
