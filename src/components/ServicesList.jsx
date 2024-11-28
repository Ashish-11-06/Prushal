import React from 'react';
import ServicesCard from './ServicesCard';

// Import images directly
import appServicesImg from '../assets/ServiceCard/ApplicationServices.jpg';
import automationImg from '../assets/ServiceCard/Automation.jpg';
import businessProcessImg from '../assets/ServiceCard/BusinessProcessServices.jpg';
import cloudImg from '../assets/ServiceCard/Cloud.jpg';
import dataAIImg from '../assets/ServiceCard/DataAndAI.jpg';
import softwareEngImg from '../assets/ServiceCard/SoftwareEngineering.jpg';
import iotImg from '../assets/ServiceCard/InternetofThings.jpg';
import genAIImg from '../assets/ServiceCard/GenAI.jpg';

const ServicesList = () => {
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

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {servicesData.map((serviceData, index) => (
        <ServicesCard
          key={index}
          backgroundImage={serviceData.backgroundImage}
          title={serviceData.title}
          services={serviceData.services}
        />
      ))}
    </div>
  );
};

export default ServicesList;
