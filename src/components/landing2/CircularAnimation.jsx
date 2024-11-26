import React, { useState, useEffect } from "react";
import "./CircularAnimation.css";

const CircularScrollAnimation = () => {
  const [rotation, setRotation] = useState(0);

  const items = [
    { name: "WordPress", icon: "🌐" },
    { name: "Wix", icon: "✨" },
    { name: "Google", icon: "🔎" },
    { name: "Figma", icon: "🎨" },
    { name: "Canva", icon: "📋" },
    { name: "Webflow", icon: "🌐" },
    { name: "After Effects", icon: "🎥" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.2); // Adjust 0.2 to control the sensitivity
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-circular-container">
      <div
        className="scroll-circle"
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="orbit-item"
            style={{
              transform: `rotate(${(index * 180) / items.length}deg) translate(200px) rotate(-${(index * 180) / items.length}deg)`, // Adjusted to 180 degrees for half-circle
            }}
          >
            <div className="icon">{item.icon}</div>
            <div className="name">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularScrollAnimation;
