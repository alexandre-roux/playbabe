import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.scss";
import Product from "../../components/Product";

const Eshop = () => {
  const data = [
    {
      imageURL:
        "https://lemagdesanimaux.ouest-france.fr/images/dossiers/2020-07/mesange-082621.jpg",
      name: "Mésange",
      price: 165,
    },
    {
      imageURL:
        "https://jardinage.lemonde.fr/images/dossiers/2018-10/chardonneret-091744.jpg",
      name: "Chardonneret",
      price: 456,
    },
    {
      imageURL:
        "https://i0.wp.com/www.quelestcetanimal.com/wp-content/uploads/2022/08/NIS1-1.jpg",
      name: "Guêpier",
      price: 454,
    },
    {
      imageURL:
        "https://i0.wp.com/www.quelestcetanimal.com/wp-content/uploads/2022/04/CHI1-1.jpeg",
      name: "Hirondelle",
      price: 322,
    },
    {
      imageURL:
        "https://i0.wp.com/www.quelestcetanimal.com/wp-content/uploads/2022/03/0503a-scaled.jpg",
      name: "Pinson",
      price: 868,
    },
    {
      imageURL:
        "https://i0.wp.com/www.quelestcetanimal.com/wp-content/uploads/2021/04/SA1-2-scaled.jpeg",
      name: "Martin-pêcheur",
      price: 232,
    },
    {
      imageURL:
        "https://i0.wp.com/www.quelestcetanimal.com/wp-content/uploads/2021/01/DSC_9593-scaled.jpeg",
      name: "Grimpereau",
      price: 121,
    },
    {
      imageURL:
        "https://i0.wp.com/www.quelestcetanimal.com/wp-content/uploads/2019/11/DSC_5891.jpeg",
      name: "Rougequeue",
      price: 100,
    },
  ];

  return (
    <>
      <div className="eshop-desktop">
        <Header />
        <div className="products-container">
          <div className="products">
            {data.map((product, index) => {
              return <Product key={index} product={product} />;
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Eshop;
