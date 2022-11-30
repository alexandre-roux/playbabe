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
    },
    {
      imageURL: "/images/eshop/thong.png",
      name: "« PLAYBABE » Upcycled Thong",
      price: 75,
    },
    {
      imageURL: "/images/eshop/tee-shirt.jpeg",
      name: "Screenprinted Tee shirts",
      price: 25,
    },
    {
      imageURL: "/images/eshop/poster.png",
      name: "XXL poster (A0 format)",
      price: 125,
    },
  ];

  return (
    <>
      {isMobile ? (
        <div className="eshop-mobile">
          <Header className="header" />
          <div className="eshop-content">
            {data.map((product, index) => {
              return (
                <Product classname="product" key={index} product={product} />
              );
            })}
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
