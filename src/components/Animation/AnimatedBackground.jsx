import React from 'react';
import { useSpring, animated } from '@react-spring/web'; // Import from react-spring
import './AnimatedBackground.css'; // Import the CSS file for styles

// Animated Circle Component
const AnimatedCircle = React.memo(() => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, config: { duration: 2000 }, loop: true });

  return (
    <animated.svg style={props} width="50" height="50">
      <circle cx="25" cy="25" r="20" stroke="green" strokeWidth="4" fill="yellow" />
    </animated.svg>
  );
});

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
    </div>
  );
};

// Exporting both components
export { AnimatedBackground2 };
export default AnimatedBackground;
