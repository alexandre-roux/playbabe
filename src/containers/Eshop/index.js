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
      imageDetailURL: [
        "/images/eshop/calendarp31.jpg",
        "/images/eshop/calendarp32.jpg",
        "/images/eshop/calendarp33.jpg",
        "/images/eshop/calendarp34.jpg",
        "/images/eshop/calendarp35.jpg",
        "/images/eshop/calendarp36.jpg",
      ],
      title: "PLAYBABE X P3\n - Pride Edition 2023",
      details:
        "Format: 21 x 29.7cm\n12 x A4 exclusive photographies\nPrinted on Recycled 250g/m shiny paper and binded with a metal spiralcolored in Silver.\n\n100 % of the calendars' sales benefits will be for this edition given\nto “Le Syndicat du Strass” in France.\n",
      stripeURL: "https://buy.stripe.com/3cs3cm0jh1xa2S49AN",
    },
    {
      imageURL: "/images/eshop/sex-with-you-sucks.jpg",
      name: "Screenprinted Tee shirt - 2",
      price: 20,
      imageDetailURL: ["/images/eshop/sex-with-you-sucks1.jpg"],
      title: "UPCYCLED\nTEE SHIRT\n« SEX WITH YOU SUCKS! »",
      details:
        "Screen-Printed Upcycled tee shirt with Red neon natural ink. Handpicked and bought in second hand shops. Available in different colors and sizes. Please get in touch with us to know which ones are still up for a grab :)",
      stripeURL: "https://buy.stripe.com/9AQeV48PN8ZC1O03cs",
    },
    {
      imageURL: "/images/eshop/poster-riso.jpg",
      name: "Pride Cast - Risography print",
      price: 15,
      imageDetailURL: ["/images/eshop/poster-riso1.jpg"],
      title: "Pride calendar cast, printed using risography technics",
      details:
        "Format: 29,7 x 42 cm (A3) Risograph poster of our amazing pride casting, printed with Neon Red ink on 110g/m matte paper at drucken3000, Berlin.",
      stripeURL: "https://buy.stripe.com/5kA00a1nlejW8co8wO ",
    },
    {
      imageURL: "/images/eshop/calendar.jpg",
      name: "Calendar Edition 2023",
      price: 35,
      imageDetailURL: [
        "/images/eshop/calendar1.jpg",
        "/images/eshop/calendar2.jpg",
        "/images/eshop/calendar3.jpg",
      ],
      title: "CALENDAR A3\n - Edition 2023",
      details:
        "Format: 29.7 x 42cm\n12 x A3 exclusive photographies\nPrinted on Recycled 250g/m shiny paper and binded with a metal spiralcolored in Silver.\n\n100 % of the calendars' sales benefits will be this year given\nto HYDRA Berlin.",
      stripeURL: "https://buy.stripe.com/00g00aea7cbO78kcMO",
    },
    {
      imageURL: "/images/eshop/string.png",
      name: "« PLAYBABE » Upcycled Thong",
      price: 65,
      imageDetailURL: ["/images/eshop/string1.jpg"],
      title: "PLAYBABE 23\nTHONG",
      details:
        "Hand sewn underwear made with upcycled fabrics, adjustable and in different patterns, colors and sizes. We produce once we receive order, let us know what you would love to have <3",
      stripeURL: "https://buy.stripe.com/8wMaEO5DBcbO9gs7sy",
    },
    {
      imageURL: "/images/eshop/tee-shirt.jpeg",
      name: "Screenprinted Tee shirts",
      price: 25,
      imageDetailURL: ["/images/eshop/tee-shirt1.jpeg"],
      title: "UPCYCLED\nTEE SHIRT\n« FACE OF AN ANGEL\nBODY OF A PORNSTAR »",
      details:
        "Screen-Printed Upcycled tee shirts with natural inks. Available in different colors and sizes. Please get in touch with us to know which one are still up for a grab :)",
    },
    {
      imageURL: "/images/eshop/posters/chancel.jpg",
      name: "XXL Poster (A0 format)",
      price: 125,
      imageDetailURL: [
        "/images/eshop/posters/lara.jpg",
        "/images/eshop/posters/chancel.jpg",
        "/images/eshop/posters/lisa.jpg",
        "/images/eshop/posters/nasi.jpg",
        "/images/eshop/posters/misha.jpg",
        "/images/eshop/posters/audrey.jpg",
      ],
      title: "A0 Poster\nXXL Format",
      details:
        "Format: 84 x 120cm 6 vertical and 3 landscape. Photo paper, Silk Matt 180g/m, unreleased photographs. If you would like to purchase a print, please write us x",
      stripeURL: "https://buy.stripe.com/3cs14ed634JmeAM7sG",
    },
  ];

  const products = [];
  for (let i = 0; i < data.length; i++) {
    products.push(<Product classname={"product"} key={i} product={data[i]} />);
  }

  return (
    <>
      {isMobile ? (
        <EshopMobile data={data} />
      ) : (
        <div className="eshop-desktop">
          <Header className={"header"} />
          <div className="eshop-content">{products}</div>
          <Footer className={"footer"} />
        </div>
      )}
    </>
  );
};

export default Eshop;
