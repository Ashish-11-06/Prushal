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
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  ];

  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Responsive radii and image sizes
  let radius1, radius2, imageSize, centerLogoSize;
  if (windowWidth < 400) {
    radius1 = 80; radius2 = 50; imageSize = 24; centerLogoSize = 48;
  } else if (windowWidth < 576) {
    radius1 = 100; radius2 = 60; imageSize = 28; centerLogoSize = 56;
  } else if (windowWidth < 768) {
    radius1 = 120; radius2 = 80; imageSize = 34; centerLogoSize = 68;
  } else if (windowWidth < 992) {
    radius1 = 170; radius2 = 110; imageSize = 44; centerLogoSize = 88;
  } else if (windowWidth < 1200) {
    radius1 = 210; radius2 = 130; imageSize = 52; centerLogoSize = 104;
  } else {
    radius1 = 250; radius2 = 150; imageSize = 60; centerLogoSize = 120;
  }

  const angleOffset = (scrollY / 10) % 360;

  return (
    <div className="scroll-circular-container" aria-label="Technology Logos Circular Animation">
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
              <img
                src={image}
                alt={`Tech logo ${index + 1}`}
                className="logo"
                style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
                loading="lazy"
              />
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
              <img
                src={image}
                alt={`Tech logo ${index + 11}`}
                className="logo"
                style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
                loading="lazy"
              />
            </div>
          );
        })}

        {/* Center Logo */}
        <div className="center-item">
          <img
            src={prushalLogo}
            alt="Prushal Logo"
            className="center-logo"
            style={{ width: `${centerLogoSize}px`, height: `${centerLogoSize}px` }}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CircularScrollAnimation;
