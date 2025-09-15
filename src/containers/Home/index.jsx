import React, {useEffect, useState} from "react";

import "./index.scss";

const Home = () => {
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
            <img
                src={`/images/homepage/${background}.jpg`}
                alt="background"
                style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                }}
            />
            <a rel='noopener noreferrer'
               href="https://www.instagram.com/playbabe0/"
               className="text-container">
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
            </a>
        </div>
    )
        ;
};

export default Home;
