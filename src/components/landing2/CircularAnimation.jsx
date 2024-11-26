import React, { useState, useEffect } from "react";
import "./CircularAnimation.css";

const CircularScrollAnimation = () => {
  const items = [
    { name: "WordPress", icon: "📝" },
    { name: "Wix", icon: "🌐" },
    { name: "Google", icon: "🔍" },
    { name: "Figma", icon: "🎨" },
    { name: "Canva", icon: "🖌️" },
    { name: "Webflow", icon: "🌊" },
    { name: "After Effects", icon: "🎬" },
  ];

  const radius = 200; // Radius for the circular path
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
              <div className="icon">{item.icon}</div>
              <div className="name">{item.name}</div>
            </div>
          );
        })}
        <div className="center-item">Center</div>
      </div>
    </div>
  );
};

export default CircularScrollAnimation;
