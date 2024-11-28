// src/components/LandingContent.jsx

import React from 'react';
import ServicesList from './ServicesList';
import AnimatedBackground from '../components/Animation/AnimatedBackground'; // Import the AnimatedBackground component
import CircularAnimation from '../components/Animation/CircularAnimation';
import AnalyticsOffering from './home2/AnalyticsOffering';
import HeroSection from './DataStats/HeroSection';



const LandingContent = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}> {/* Ensure content is above the background */}
      <div style={{ padding: '50px', 
        // border: '2px solid red'
      }}>
    
      <AnimatedBackground />  {/*  Add the animated background here */}

      <div style={{ padding: '10px 50px', 
        // border: '2px solid red',
        borderRadius: '1%',
        background: 'linear-gradient(100deg, #2196f345, #00767661)', /* Gradient background */
 
      }}>
       <ServicesList /> 
      </div>
        
        < HeroSection/>
       <AnalyticsOffering/>
       
      </div> 
      <CircularAnimation />
    
    </div>
  );
};

export default LandingContent;