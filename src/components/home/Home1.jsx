import React from 'react';
import { Typography } from 'antd';
import { motion } from 'framer-motion';
import './Home1.css';
import videoSource from '../../assets/Home1.mp4';

const { Title, Paragraph } = Typography;

const Home1 = () => {
  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Title>Welcome to PrushalTech</Title>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <Paragraph className="paraText">
            We specialize in providing data-driven solutions for your business needs.
          </Paragraph>
        </motion.div>
      </div>
    </div>
  );
};

export default Home1;
