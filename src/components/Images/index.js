import React, { useEffect, useRef } from "react";
import "./index.scss";

const Images = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-in-animation");
        }
      });
    };

    const observer = new IntersectionObserver(callback);

    const currentTarget = targetRef.current; // Store the current target element

    if (targetRef.current) {
      observer.observe(currentTarget);
    }

    // Cleanup observer on unmount
    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
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
      <div className="empty-div" />
    </div>
  );
};

export default Images;
