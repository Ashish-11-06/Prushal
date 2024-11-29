import React, { useState, useEffect } from "react";
import "./CircularAnimation.css";
import img1 from "../../assets/techs/ai.png";
import img2 from "../../assets/techs/bar-graph.png";
import img3 from "../../assets/techs/big-data.png";
import img4 from "../../assets/techs/bootstrap.png";
import img5 from "../../assets/techs/django.png";
import img6 from "../../assets/techs/figma.png";
import img7 from "../../assets/techs/file.png";
import img8 from "../../assets/techs/github.png";
import img9 from "../../assets/techs/java.png";
import img10 from "../../assets/techs/mysql.png";
import img11 from "../../assets/techs/nodejs.png";
import img12 from "../../assets/techs/php.png";
import img13 from "../../assets/techs/physics.png";
import img14 from "../../assets/techs/postgre.png";
import img15 from "../../assets/techs/angular.png";
import img16 from "../../assets/techs/programing.png";
import img17 from "../../assets/techs/python.png";
import img18 from "../../assets/techs/social.png";
import img19 from "../../assets/techs/visual-studio.png";
import img20 from "../../assets/techs/wordpress.png";

import prushalLogo from '../../assets/PrushalLogo.png';



const CircularScrollAnimation = () => {
  // Array of image paths

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  ];


  const radius1 = 250; // Radius for outer circle
  const radius2 = 150; // Radius for inner circle
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
        <div className="center-item">
  <img src={prushalLogo} alt="Description of the image" />
</div>
      </div>
    </div>
  );
};

export default CircularScrollAnimation;
