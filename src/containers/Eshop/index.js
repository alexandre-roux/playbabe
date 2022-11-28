import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";
import Product from "../../components/Product";

const Eshop = () => {
  const data = [
    {
      imageURL: "/images/eshop/calendar.png",
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
    </>
  );
};

export default Eshop;
