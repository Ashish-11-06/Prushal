import React from 'react';

const CustomMenuItem = ({ item, children }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span>{item.label}</span>
      {isHovered && children}
    </div>
  );
};

export default CustomMenuItem;