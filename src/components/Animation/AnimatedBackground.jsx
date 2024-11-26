import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // Import from react-spring
import './AnimatedBackground.css'; // Import the CSS file for styles

// Animated Circle Component
const AnimatedCircle = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, loop: true });

  return (
    <animated.svg style={props} width="100" height="100">
      <circle cx="50" cy="50" r="40" stroke="green" strokeWidth="4" fill="yellow" />
    </animated.svg>
  );
};

// Animated Background Component with React Spring Example
const AnimatedBackground2 = () => {
  return (
    <div className="animated-background">
      <AnimatedCircle />
      <AnimatedCircle />
    </div>
  );
};

// Animated Background with Basic CSS Animation
const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
};

// Exporting both components
export { AnimatedBackground2 };
export default AnimatedBackground;
