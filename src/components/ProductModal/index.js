import React, { useEffect, useState } from "react";

import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductModal = ({ product, setDisplayModal }) => {
  const [calendarImage, setCalendarImage] = useState("calendar1");
  const [posterImage, setPosterImage] = useState(
    "/images/eshop/posters/lara.jpg"
  );
  const [posterNumber, setPosterNumber] = useState("1");
  const [posterName, setPosterName] = useState("Lara");

  useEffect(() => {
    if (product.name.includes("Calendar")) {
      let i = 1;

      const intervalId = setInterval(() => {
        i++;
        if (i > 3) i = 1;
        setCalendarImage("calendar" + i);
      }, 2000);

      return () => clearInterval(intervalId);
    } else if (product.name.includes("Poster")) {
      if (posterName === "Lara") {
        setPosterImage("/images/eshop/posters/lara.jpg");
        setPosterNumber("1");
      } else if (posterName === "Chancel") {
        setPosterImage("/images/eshop/posters/chancel.jpg");
        setPosterNumber("2");
      } else if (posterName === "Lisa") {
        setPosterImage("/images/eshop/posters/lisa.jpg");
        setPosterNumber("3");
      } else if (posterName === "Nasi") {
        setPosterImage("/images/eshop/posters/nasi.jpg");
        setPosterNumber("4");
      } else if (posterName === "Jasmin") {
        setPosterImage("/images/eshop/posters/jasmin.jpg");
        setPosterNumber("5");
      } else if (posterName === "Audrey") {
        setPosterImage("/images/eshop/posters/audrey.jpg");
        setPosterNumber("6");
      } else if (posterName === "Sabi") {
        setPosterImage("/images/eshop/posters/sabi.jpg");
        setPosterNumber("7");
      } else if (posterName === "Misha") {
        setPosterImage("/images/eshop/posters/misha.jpg");
        setPosterNumber("8");
      } else if (posterName === "Margarita") {
        setPosterImage("/images/eshop/posters/margarita.jpg");
        setPosterNumber("9");
      }
    }
  }, [posterName]);

  return (
    <div className="modal-overlay" onClick={() => setDisplayModal(false)}>
      <div
        className="modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        <FontAwesomeIcon
          icon="xmark"
          className="xmark"
          onClick={() => setDisplayModal(false)}
        />
        <div className="modal-content">
          <div className="images">
            <img
              src={
                product.name.includes("Calendar")
                  ? "/images/eshop/" + calendarImage + ".jpg"
                  : product.name.includes("Poster")
                  ? posterImage
                  : product.imageDetailURL
              }
              alt="product-image"
            />
            {product.name.includes("Poster") && (
              <p>
                <span style={{ fontWeight: "bold" }}>
                  Poster Nb {posterNumber}
                </span>
                {" " + posterName}
              </p>
            )}
          </div>
          <div className="text-button">
            <div className="text">
              <div className="title-price">
                <p className="title">{product.title}</p>
                <p className="price">{product.price + " €"}</p>
              </div>
              <p className="details">{product.details}</p>
            </div>
            {product.name.includes("Poster") && (
              <div className="posters">
                <div className="posters1">
                  <div className="posters11">
                    <div
                      className="chancel"
                      onClick={() => setPosterName("Chancel")}
                    />
                    <div
                      className="lisa"
                      onClick={() => setPosterName("Lisa")}
                    />
                    <div
                      className="nasi"
                      onClick={() => setPosterName("Nasi")}
                    />
                  </div>
                  <div className="posters12">
                    <div
                      className="sabi"
                      onClick={() => setPosterName("Sabi")}
                    />
                    <div
                      className="margarita"
                      onClick={() => setPosterName("Margarita")}
                    />
                  </div>
                </div>
                <div className="posters2">
                  <div className="posters21">
                    <div
                      className="jasmin"
                      onClick={() => setPosterName("Jasmin")}
                    />
                    <div
                      className="lara"
                      onClick={() => setPosterName("Lara")}
                    />
                  </div>
                  <div className="posters22">
                    <div
                      className="misha"
                      onClick={() => setPosterName("Misha")}
                    />
                    <div
                      className="audrey"
                      onClick={() => setPosterName("Audrey")}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="button">
              {product.name.includes("Calendar") ? (
                <a href="https://buy.stripe.com/00g00aea7cbO78kcMO">
                  <img
                    src="/images/eshop/order-yours-white.png"
                    alt="order-yours"
                  />
                </a>
              ) : product.name.includes("Screenprinted") ? (
                <img src="/images/eshop/sold-out-yellow.png" alt="sold-out" />
              ) : (
                <a href="mailto:info@playbabe.org">
                  <img
                    src="/images/eshop/contact-us-white.png"
                    alt="contact-us"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
