// src/components/LandingContent.jsx

import React from 'react';
import ServicesList from './ServicesList';
import AnimatedBackground from '../components/Animation/AnimatedBackground'; // Import the AnimatedBackground component
import CircularAnimation from '../components/Animation/CircularAnimation';
import AnalyticsOffering from './home2/AnalyticsOffering';



const LandingContent = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}> {/* Ensure content is above the background */}
      

      <div style={{ padding: '50px' }}>
      <AnimatedBackground />  {/*  Add the animated background here */}
        <ServicesList />
       <AnalyticsOffering/>
      </div> 
      <CircularAnimation />
      {/* <CircularAnimation />
      <CircularAnimation /> */}
    </div>
  );
};

export default LandingContent;