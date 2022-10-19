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
    {
      imageURL:
        "https://i0.wp.com/www.quelestcetanimal.com/wp-content/uploads/2019/03/DSC09493.jpg",
      name: "Pic épeiche",
      price: 156,
    },
    {
      imageURL:
        "https://i0.wp.com/www.quelestcetanimal.com/wp-content/uploads/2021/11/ASN1-1.jpeg",
      name: "Tarier pâtre",
      price: 157,
    },
    {
      imageURL:
        "https://i0.wp.com/www.quelestcetanimal.com/wp-content/uploads/2021/03/BA1-1.jpg",
      name: "Choucas",
      price: 946,
    },
    {
      imageURL:
        "https://ainvo.fr/wp-content/uploads/2016/01/qz_passereau_qu01.jpg",
      name: "Rougegorge",
      price: 125,
    },
  ];

  return (
    <>
      <Header />
      <div className="products-container">
        <div className="products">
          {data.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Eshop;
