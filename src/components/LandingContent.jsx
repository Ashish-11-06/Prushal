// src/components/LandingContent.jsx

import React from 'react';
import ServicesList from './ServicesList';
import AnimatedBackground from '../components/Animation/AnimatedBackground'; // Import the AnimatedBackground component
import CircularAnimation from './landing2/CircularAnimation';



const LandingContent = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}> {/* Ensure content is above the background */}
      

      <div style={{ padding: '50px' }}>
      <AnimatedBackground />  {/*  Add the animated background here */}
        <ServicesList />
       
      </div> 
      <CircularAnimation />
      {/* <CircularAnimation />
      <CircularAnimation /> */}
    </div>
  );
};

export default LandingContent;