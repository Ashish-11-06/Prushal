// src/components/LandingContent.jsx

import React from 'react';
import { Typography } from 'antd';
import ServicesList from './ServicesList';
import AnimatedBackground from '../components/Animation/AnimatedBackground'; // Import the AnimatedBackground component
import CircularAnimation from './landing2/CircularAnimation';

const { Title, Paragraph } = Typography;

const LandingContent = () => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}> {/* Ensure content is above the background */}
      <AnimatedBackground /> {/* Add the animated background here */}

      <div style={{ padding: '50px' }}>
        <Title>Welcome to PrushalTech</Title>
        <Paragraph>
          We specialize in providing data-driven solutions for your business needs.
        </Paragraph>
        <ServicesList />
       
      </div> <CircularAnimation />
      <CircularAnimation />
      <CircularAnimation />
    </div>
  );
};

export default LandingContent;