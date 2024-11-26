import React from 'react';
import { Typography } from 'antd';
import './Home1.css'; // Ensure you create the CSS for styling
import videoSource from '../../assets/Home1.mp4'; // Adjust the path based on your file structure

const { Title, Paragraph } = Typography;
const Home1 = () => {
  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src={videoSource} type="" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
      <Title>Welcome to PrushalTech</Title>
        <Paragraph className='paraText'>
          We specialize in providing data-driven solutions for your business needs.
        </Paragraph>
      </div>
    </div>
  );
};

export default Home1;
