import React from 'react';
import { Card, Typography, Button } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const ServicesCard = ({ title, services, backgroundImage }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Scale up on hover
      whileTap={{ scale: 0.95 }} // Scale down on tap
      style={{ margin: '20px' }} // Add margin to the card
    >
      <Card
        style={{
          width: 300,
          backgroundImage: `url(${backgroundImage})`, // Set the background image
          backgroundSize: 'cover', // Ensure the image covers the card
          backgroundPosition: 'center', // Center the background image
          color: 'white', // Ensure text color is white for better contrast
          minHeight: '300px', // Ensure minimum height to see the image
          display: 'flex', // To center content
          justifyContent: 'center', // Center content vertically
          alignItems: 'center', // Center content horizontally
          position: 'relative', // To position overlay
        }}
      >
        {/* Background Blur Effect */}
        <div
          style={{
            position: 'absolute', // Position the overlay on top of the image
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: '#1890ff',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
            backdropFilter: 'blur(12px)', // Increase the blur effect to 12px
            zIndex: -1, // Ensure the overlay stays behind text content
          }}
        />

        {/* Text Content */}
        <div style={{ textAlign: 'center', zIndex: 1 }}>
          <Title level={4} style={{ transition: 'color 0.3s', color: 'white', background: '#1890ff'}}>
            {title}
          </Title>
          <Paragraph style={{ transition: 'color 0.3s' }}>
            {services.map((service, index) => (
              <div key={index}>- {service}</div>
            ))}
          </Paragraph>
          <Button type="primary">Learn More</Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default ServicesCard;