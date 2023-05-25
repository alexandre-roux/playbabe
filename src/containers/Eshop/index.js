import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";
import Product from "../../components/Product";
import { useMediaQuery } from "react-responsive";
import EshopMobile from "../EshopMobile";

const Eshop = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  const data = [
    {
      imageURL: "/images/eshop/calendarp3.jpg",
      name: "PLAYBABE x P3 Pride Edition",
      price: 22,
      title: "PLAYBABE X P3\n - Pride Edition 2023",
      details:
        "Format: 29.7 x 42cm\n12 x A4 exclusive photographies\nPrinted on Recycled 250g/m shiny paper and binded with a metal spiralcolored in Silver.\n\n100 % of the calendars' sales benefits will be for this edition given\nto “Le Syndicat du Strass” in France.\n",
    },
    {
      imageURL: "/images/eshop/calendar.jpg",
      name: "Calendar Edition 2023",
      price: 35,
      title: "CALENDAR A3\n - Edition 2023",
      details:
        "Format: 29.7 x 42cm\n12 x A3 exclusive photographies\nPrinted on Recycled 250g/m shiny paper and binded with a metal spiralcolored in Silver.\n\n100 % of the calendars' sales benefits will be this year given\nto HYDRA Berlin.",
    },
    {
      imageURL: "/images/eshop/string.png",
      name: "« PLAYBABE » Upcycled Thong",
      price: 65,
      imageDetailURL: "/images/eshop/string1.jpg",
      title: "PLAYBABE 23\nTHONG",
      details:
        "Hand sewn underwear made with upcycled fabrics, adjustable and in different patterns, colors and sizes. We produce once we receive order, let us know what you would love to have <3",
    },
    {
      imageURL: "/images/eshop/tee-shirt.jpeg",
      name: "Screenprinted Tee shirts",
      price: 25,
      imageDetailURL: "/images/eshop/tee-shirt1.jpeg",
      title: "UPCYCLED\nTEE SHIRT\n« FACE OF AN ANGEL\nBODY OF A PORNSTAR »",
      details:
        "Screen-Printed Upcycled tee shirts with natural inks. Available in different colors and sizes. Please get in touch with us to know which one are still up for a grab :)",
    },
  ];

  return (
    <>
      {isMobile ? (
        <EshopMobile data={data} />
      ) : (
        <div className="eshop-desktop">
          <Header className={"header"} />
          <div className="eshop-content">
            {data.map((product, index) => {
              return (
                <Product classname="product" key={index} product={product} />
              );
            })}
          </div>
          <Footer className={"footer"} />
        </div>
      )}
    </>
  );
};

export default Eshop;
