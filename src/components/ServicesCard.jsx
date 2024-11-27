import React, { useRef, useState, useEffect } from 'react';
import { Card, Typography, Button } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

// Animation variants for left-to-right effect
const cardVariants = {
  hidden: { opacity: 0, x: -100 }, // Hidden state: card starts 100px to the left and invisible
  visible: { 
    opacity: 1, 
    x: 0, // Card moves to its normal position (x=0)
    transition: { duration: 0.8, ease: 'easeOut' } 
  }, // Visible state: card slides in from the left
};

const ServicesCard = ({ title, services, backgroundImage }) => {
  const ref = useRef(null); // Reference to the card element
  const [inView, setInView] = useState(true); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Trigger animation when in view
        } else {
          setInView(false); // Reset animation when out of view
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current); // Cleanup observer
    };
  }, []);

  return (
    <motion.div
      ref={ref} // Attach the ref to observe this element
      variants={cardVariants}
      initial="hidden" // Always start in hidden state
      animate={inView ? 'visible' : 'hidden'} // Toggle animation state
      whileHover={{ scale: 1.05 }} // Scale up on hover
      whileTap={{ scale: 0.95 }} // Scale down on tap
      style={{ margin: '20px' }} // Add margin to the card
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
            zIndex: 1,
          }}
        />

        {/* Text Content */}
        <motion.div style={{ textAlign: 'center', zIndex: 1, position: 'relative' }}>
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
