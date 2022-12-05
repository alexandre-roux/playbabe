import React, { useEffect, useState } from "react";

import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMediaQuery } from "react-responsive";

const ProductModal = ({ name, price, setDisplayModal }) => {
  const [image, setImage] = useState("calendar1");
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  useEffect(() => {
    let i = 1;

    const intervalId = setInterval(() => {
      i++;
      if (i > 3) i = 1;
      setImage("calendar" + i);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {name.includes("XXL") ? (
        <></>
      ) : isMobile ? (
        <div
          className="modal-container-mobile"
          onClick={(event) => event.stopPropagation()}
        >
          <FontAwesomeIcon
            icon="xmark"
            className="xmark"
            onClick={() => setDisplayModal(false)}
          />
          <div className="modal-content">
            <img
              src={
                name.includes("Calendar")
                  ? "/images/eshop/" + image + ".jpg"
                  : name.includes("Thong")
                  ? "/images/eshop/string1.jpg"
                  : "/images/eshop/tee-shirt1.jpeg"
              }
              alt="calendar"
            />
            <div className="title-price">
              {name.includes("Calendar") ? (
                <p>
                  CALENDAR A3
                  <br /> - Edition 2023
                </p>
              ) : name.includes("Thong") ? (
                <p>
                  PLAYBABE 23
                  <br />
                  THONG
                </p>
              ) : (
                <p>
                  UPCYCLED
                  <br />
                  TEE SHIRT
                  <br />« FACE OF AN ANGEL
                  <br />
                  BODY OF A PORNSTAR »
                </p>
              )}
              <p className="price">{price + " €"}</p>
            </div>
            <div className="description-button">
              {name.includes("Calendar") ? (
                <p>
                  Format: 29.7 x 42cm
                  <br />
                  12 x A3 exclusive photographies
                  <br />
                  Printed on Recycled 250g/m shiny paper and binded with a metal
                  spiralcolored in Siver.
                  <br />
                  <br />
                  100 % of the calendars' sales benefits will be this year given
                  to HYDRA Berlin.
                </p>
              ) : name.includes("Thong") ? (
                <p>
                  Hand sewn underwear made with upcycled fabrics, adjustable and
                  in different patterns, colors and sizes. We produce once we
                  receive order, let us know what you would love to have &lt;3
                </p>
              ) : (
                <p>
                  Screen-Printed Upcycled tee shirts with natural inks.
                  Available in different colors and sizes. Please get in touch
                  with us to know which one are still up for a grab :)
                </p>
              )}
              {name.includes("Calendar") ? (
                <a href="https://buy.stripe.com/00g00aea7cbO78kcMO">
                  <img
                    src="/images/eshop/order-yours-white.png"
                    alt="calendar"
                  />
                </a>
              ) : (
                <a href="mailto:info@playbabe.org">
                  <img
                    src="/images/eshop/contact-us-white.png"
                    alt="calendar"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
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
                    name.includes("Calendar")
                      ? "/images/eshop/" + image + ".jpg"
                      : name.includes("Thong")
                      ? "/images/eshop/string1.jpg"
                      : "/images/eshop/tee-shirt1.jpeg"
                  }
                  alt="calendar"
                />
              </div>
              <div className="text-button">
                <div className="text">
                  <div className="title-price">
                    {name.includes("Calendar") ? (
                      <p>
                        CALENDAR A3
                        <br /> - Edition 2023
                      </p>
                    ) : name.includes("Thong") ? (
                      <p>
                        PLAYBABE 23
                        <br />
                        THONG
                      </p>
                    ) : (
                      <p>
                        UPCYCLED
                        <br />
                        TEE SHIRT
                        <br />« FACE OF AN ANGEL
                        <br />
                        BODY OF A PORNSTAR »
                      </p>
                    )}
                    <p className="price">{price + " €"}</p>
                  </div>
                  {name.includes("Calendar") ? (
                    <p>
                      Format: 29.7 x 42cm
                      <br />
                      Printed on Recycled 250g/m paper
                      <br />
                      Binded with a metal spiral
                      <br />
                      12 x A3 exclusive photographies
                    </p>
                  ) : name.includes("Thong") ? (
                    <p>
                      Hand sewn underwear made with upcycled fabrics, adjustable
                      and in different patterns, colors and sizes. We produce
                      once we receive order, let us know what you would love to
                      have &lt;3
                    </p>
                  ) : (
                    <p>
                      Screen-Printed Upcycled tee shirts with natural inks.
                      Available in different colors and sizes. Please get in
                      touch with us to know which one are still up for a grab :)
                    </p>
                  )}
                </div>
                <div className="button">
                  {name.includes("Calendar") ? (
                    <a href="https://buy.stripe.com/00g00aea7cbO78kcMO">
                      <img
                        src="/images/eshop/order-yours-white.png"
                        alt="calendar"
                      />
                    </a>
                  ) : (
                    <a href="mailto:info@playbabe.org">
                      <img
                        src="/images/eshop/contact-us-white.png"
                        alt="calendar"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductModal;
