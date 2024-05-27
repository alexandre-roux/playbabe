import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import "./index.scss";

const Home = () => {
    const images = [
        "homepage1", "homepage2", "homepage3", "homepage4", "homepage5",
        "homepage6", "homepage7", "homepage8", "homepage9", "homepage10",
        "homepage11", "homepage12", "homepage13", "homepage14", "homepage15",
        "homepage16", "homepage17", "homepage18", "homepage19"
    ];

    const [background, setBackground] = useState("homepage1");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackground("homepage" + Math.floor(Math.random() * 19 + 1));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const [isHovering, setIsHovering] = useState(false);
    const colors = ["#FF1739", "#DEFF42"];
    const [textColor, setTextColor] = useState(colors[0]);

    const handleMouseOver = () => {
        setIsHovering(true);
        setTextColor(colors[Math.floor(Math.random() * colors.length)]);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
        <div className="home-container">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={`/images/homepage/${img}.jpg`}
                    alt="background"
                    style={{
                        display: background === "" || background === img ? "block" : "none",
                    }}
                />
            ))}
            <Link to="/about" className="text-container">
                <h2
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{
                        color: isHovering ? textColor : "white",
                    }}
                >
                    ENTER WEBSITE
                </h2>
                <h1
                    className="logo"
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{
                        color: isHovering ? textColor : "white",
                    }}
                >
                    PLAYBABE
                </h1>
                <h2
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    style={{
                        color: isHovering ? textColor : "white",
                    }}
                >
                    ENTER WEBSITE
                </h2>
            </Link>
        </div>
    );
};

export default Home;
