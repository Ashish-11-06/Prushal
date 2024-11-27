import React, { useState, useEffect } from "react";
import "./CircularAnimation.css";

const CircularScrollAnimation = () => {
  const items = [
    { name: "WordPress", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/WordPress_logo.svg" },
    { name: "Wix", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Wix_logo.svg" },
    { name: "Google", logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dgoogle&psig=AOvVaw2nM-yGZdk1zk-K1fSKrFlf&ust=1732773277096000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiY-s_p-4kDFQAAAAAdAAAAABAE" },
    { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
    { name: "Canva", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Canva_logo.svg" },
    { name: "Webflow", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Webflow_Logo.svg" },
    { name: "After Effects", logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Adobe_After_Effects_CC_logo.svg" },
  ];

  const radius = 300; // Radius for the circular path
  const [scrollY, setScrollY] = useState(0); // State to track scroll position

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Update scroll position
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  const angleOffset = (scrollY / 10) % 360; // Determine the angle offset based on scroll

  return (
    <div className="scroll-circular-container">
      <div className="scroll-circle">
        {/* Circular Line */}
        <div className="circle-path" />

        {/* Render Items in Circular Path */}
        {items.map((item, index) => {
          const angle = ((index / items.length) * 2 * Math.PI) + (angleOffset * Math.PI / 180); // Calculate angle for each item based on scroll position
          const x = radius * Math.cos(angle); // X position on the circle
          const y = radius * Math.sin(angle); // Y position on the circle

          return (
            <div
              key={index}
              className="orbit-item"
              style={{
                left: `calc(50% + ${x}px)`, // Position horizontally
                top: `calc(50% - ${y}px)`,   // Position vertically (inverted for correct positioning)
              }}
            >
              <img src={item.logo} alt={item.name} className="logo" />
              <div className="name">{item.name}</div>
            </div>
          );
        })}
        <div className="center-item">Prushal Tech</div>
      </div>
    </div>
  );
};

export default CircularScrollAnimation;