import React, { useState } from 'react';
import { Card, Typography, Button } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

// Define the functional component and wrap it with React.memo
const ServicesCard = React.memo(function ServicesCard({ title, services, backgroundImage }) {
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  // Handlers for hover events
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }} // Scale up on hover
      whileTap={{ scale: 0.95 }} // Scale down on tap
      style={{ margin: '20px', borderRadius: '2%', overflow: 'hidden' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        style={{
          width: 250,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '350px',
          position: 'relative',
          boxShadow: '0 4px 20px #18e8ff2b',
          borderRadius: '2%',
        }}
      >
        {/* Overlay */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: isHovered
              ? 'rgba(0, 0, 0, 0.6)' // Dark overlay when hovered
              : 'rgba(0, 0, 0, 0)', // Transparent when not hovered
            transition: 'background-color 0.3s',
            zIndex: 1,
          }}
        />

        {/* Text Content - visible only on hover */}
        <motion.div
          style={{
            textAlign: 'center',
            zIndex: 2,
            position: 'relative',
            opacity: isHovered ? 1 : 0, // Show only when hovered
            transition: 'opacity 0.3s',
            color: 'white',
            padding: '20px',
          }}
        >
          <Title level={4} style={{ color: 'white' }}>{title}</Title>
          <Paragraph style={{ color: 'white' }}>
            {services.map((service, index) => (
              <div key={index}>- {service}</div>
            ))}
          </Paragraph>
          <Button type="primary">Contact</Button>
        </motion.div>
      </Card>
    </motion.div>
  );
});

// Export the component
export default ServicesCard;
