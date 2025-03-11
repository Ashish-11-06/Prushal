import React, { useState } from 'react';
import { Card, Typography, Button } from 'antd';
import { motion } from 'framer-motion';

// Import images
import appServicesImg from '../assets/ServiceCard/ApplicationServices__new.jpg';
import automationImg from '../assets/ServiceCard/Automation__new.jpg';
import businessProcessImg from '../assets/ServiceCard/BusinessProcessServices__new.jpg';
import cloudImg from '../assets/ServiceCard/Cloud__new.jpg';
import dataAIImg from '../assets/ServiceCard/DataAndAI__new.jpg';
import softwareEngImg from '../assets/ServiceCard/SoftwareEngineering__new.jpg';
import iotImg from '../assets/ServiceCard/InternetofThings__new.jpg';
import genAIImg from '../assets/ServiceCard/GenAI__new.jpg';

const { Title, Paragraph } = Typography;

// Services data
const servicesData = [
  {
    title: 'Application Services',
    services: ['Application Development', 'Application Maintenance', 'Application Modernization'],
    backgroundImage: appServicesImg,
  },
  {
    title: 'Automation',
    services: ['Process Automation', 'Robotic Process Automation (RPA)', 'Intelligent Automation'],
    backgroundImage: automationImg,
  },
  {
    title: 'Business Process Services',
    services: ['Business Process Outsourcing', 'Process Optimization', 'Operational Efficiency'],
    backgroundImage: businessProcessImg,
  },
  {
    title: 'Cloud',
    services: ['Cloud Migration', 'Cloud Infrastructure', 'Cloud Security'],
    backgroundImage: cloudImg,
  },
  {
    title: 'Data and AI',
    services: ['Data Engineering', 'Artificial Intelligence', 'Data Analytics'],
    backgroundImage: dataAIImg,
  },
  {
    title: 'Software Engineering',
    services: ['Custom Software Development', 'Agile Development', 'Software Testing'],
    backgroundImage: softwareEngImg,
  },
  {
    title: 'Internet of Things (IoT)',
    services: ['IoT Solutions', 'Device Integration', 'IoT Analytics'],
    backgroundImage: iotImg,
  },
  {
    title: 'GenAI',
    services: ['Generative AI Models', 'AI-Powered Content', 'Intelligent Chatbots'],
    backgroundImage: genAIImg,
  },
];

// Single Services Card Component
const ServicesCard = React.memo(({ title, services, backgroundImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleScrollToContact = () => {
    window.scrollTo({
      top: document.body.scrollHeight, // Scrolls to the bottom of the page
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ margin: 20, borderRadius: '2%', overflow: 'hidden' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card
        style={{
          width: 250,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 350,
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
            backgroundColor: isHovered ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
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
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s',
            color: 'white',
            padding: 20,
          }}
        >
          <Title level={4} style={{ color: 'white' }}>{title}</Title>
          <Paragraph style={{ color: 'white' }}>
            {services.map((service, index) => (
              <div key={index}>- {service}</div>
            ))}
          </Paragraph>
          <Button type="primary"onClick={handleScrollToContact}>Contact</Button>
        </motion.div>
      </Card>
    </motion.div>
  );
});

// Main ServicesList Component
const ServicesList = () => (
  <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    {servicesData.map((service, index) => (
      <ServicesCard
        key={index}
        backgroundImage={service.backgroundImage}
        title={service.title}
        services={service.services}
      />
    ))}
  </div>
);

export default ServicesList;
