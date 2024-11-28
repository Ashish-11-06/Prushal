import React, { useRef, useState, useEffect } from 'react';
import { Card, Typography, Button } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const ServicesCard = ({ title, services, backgroundImage }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Scale up on hover
      whileTap={{ scale: 0.95 }} // Scale down on tap
      style={{ margin: '20px', borderRadius: '2%' }} // Add margin to the card
    >
      <Card
        style={{
          width: 260,
          backgroundImage: `url(${backgroundImage})`, // Set the background image
          backgroundSize: 'cover', // Ensure the image covers the card
          backgroundPosition: 'center', // Center the background image
          color: 'white', // Ensure text color is white for better contrast
          minHeight: '450px', // Ensure minimum height to see the image
          display: 'flex', // To center content
          justifyContent: 'center', // Center content vertically
          alignItems: 'center', // Center content horizontally
          position: 'relative', // To position overlay
          boxShadow: '0 4px 20px #18e8ff2b',
          borderRadius: '2%',
        }}
      >
        {/* Overlay to darken the background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#2a37375e', // Semi-transparent black overlay
            borderRadius: '2%',
            zIndex: 1,
          }}
        />

        {/* Text Content */}
        <motion.div
          style={{
            textAlign: 'center',
            zIndex: 1,
            position: 'relative',
            borderRadius: '2%',
          }}
        >
          <Title level={4} style={{ transition: 'color 0.3s', color: 'white' }}>
            {title}
          </Title>
          <Paragraph style={{ transition: 'color 0.3s', color: 'white' }}>
            {services.map((service, index) => (
              <div key={index}>- {service}</div>
            ))}
          </Paragraph>
          <Button type="primary" style={{ zIndex: 2 }}>
            Learn More
          </Button>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default ServicesCard;
