import React, { useEffect, useRef } from "react";
import "./index.scss";

const Images = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      // threshold: 0.5 // 50% visibility required to trigger the callback
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in-animation");
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className="images">
      <img
        className="about1"
        src="/images/about/about1.jpg"
        alt="about1"
        ref={targetRef}
      />
      <img
        className="about3"
        src="/images/about/about3.jpg"
        alt="about3"
        ref={targetRef}
      />
      <img
        className="about4"
        src="/images/about/about4.jpg"
        alt="about4"
        ref={targetRef}
      />
      <img
        className="about2"
        src="/images/about/about2.jpg"
        alt="about2"
        ref={targetRef}
      />
    </div>
  );
};

export default Images;
