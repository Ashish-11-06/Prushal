// src/components/ServicesCard.js

import React from 'react';
import { Card, Typography, Button } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

const ServicesCard = ({ title, services }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Scale up on hover
      whileTap={{ scale: 0.95 }} // Scale down on tap
      style={{ margin: '20px' }} // Add margin to the card
    >
      <Card style={{ width: 300 }}>
        <Title level={4}>{title}</Title>
        <Paragraph>
          {services.map((service, index) => (
            <div key={index}>- {service}</div>
          ))}
        </Paragraph>
        <Button type="primary">Learn More</Button>
      </Card>
    </motion.div>
  );
};

export default ServicesCard;