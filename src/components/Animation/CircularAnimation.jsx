import React, { useState, useEffect } from "react";
import "./CircularAnimation.css";
import img1 from "../../assets/Clients/1.png";
import img2 from "../../assets/Clients/2.png";
import img3 from "../../assets/Clients/3.png";
import img4 from "../../assets/Clients/4.png";
import img5 from "../../assets/Clients/5.png";
import img6 from "../../assets/Clients/6.png";
import img7 from "../../assets/Clients/7.png";
import img8 from "../../assets/Clients/8.png";
import img9 from "../../assets/Clients/9.png";
import img10 from "../../assets/Clients/10.png";
import img11 from "../../assets/Clients/11.png";
import img12 from "../../assets/Clients/12.png";
import img13 from "../../assets/Clients/13.png";
import img14 from "../../assets/Clients/14.png";
import img15 from "../../assets/Clients/15.png";
import img16 from "../../assets/Clients/16.png";
import img17 from "../../assets/Clients/17.png";
import img18 from "../../assets/Clients/18.png";
import img19 from "../../assets/Clients/19.png";
import img20 from "../../assets/Clients/20.png";


const CircularScrollAnimation = () => {
  // Array of image paths

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
];


  const radius1 = 330; // Radius for outer circle
  const radius2 = 200; // Radius for inner circle
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const angleOffset = (scrollY / 10) % 360;

  return (
    <div className="scroll-circular-container">
      <div className="scroll-circle">
        {/* Outer Circle */}
        {images.slice(0, 10).map((image, index) => {
          const angle = ((index / 10) * 2 * Math.PI) + (angleOffset * Math.PI) / 180;
          const x = radius1 * Math.cos(angle);
          const y = radius1 * Math.sin(angle);

          return (
            <div
              key={index}
              className="orbit-item"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% - ${y}px)`,
              }}
            >
              <img src={image} alt={`img-${index}`} className="logo" />
            </div>
          );
        })}

        {/* Inner Circle */}
        {images.slice(10, 20).map((image, index) => {
          const angle = ((index / 10) * 2 * Math.PI) + ((-angleOffset) * Math.PI) / 180;
          const x = radius2 * Math.cos(angle);
          const y = radius2 * Math.sin(angle);

          return (
            <div
              key={index}
              className="orbit-item"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% - ${y}px)`,
              }}
            >
              <img src={image} alt={`img-${index}`} className="logo" />
            </div>
          );
        })}

        {/* Center Text */}
        <div className="center-item">Prushal Tech</div>
      </div>
    </div>
  );
};

export default CircularScrollAnimation;
