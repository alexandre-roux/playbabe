import React from "react";
import Header from "../../components/Header";
import Product from "../../components/Product";
import Footer from "../../components/Footer";
import "./index.scss";

const EshopMobile = ({data}) => {
    return (
        <div className="eshop-mobile">
            <Header className="header"/>
            <div className="eshop-container">
                <div className="eshop-content">
                    {data.map((product, index) => {
                        return (
                            <Product className="product" key={index} product={product}/>
                        );
                    })}
                </div>
            </div>
            <Footer className="footer"/>
        </div>
    );
};

export default EshopMobile;
