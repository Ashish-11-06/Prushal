import React from 'react';
import ServicesCard from './ServicesCard';

// Import images directly
import dataScienceImg from '../assets/card1.jpg';
import webDevImg from '../assets/card2.jpg';
import mobileDevImg from '../assets/card3.jpg';

const ServicesList = () => {
  const servicesData = [
    {
      title: 'Data Science',
      services: ['Data Analysis', 'Machine Learning', 'Statistical Modeling'],
      backgroundImage: dataScienceImg, // Use imported image
    },
    {
      title: 'Web Development',
      services: ['Responsive Design', 'API Integration', 'E-commerce Solutions'],
      backgroundImage: webDevImg, // Use imported image
    },
    {
      title: 'Mobile Development',
      services: ['iOS Development', 'Android Development', 'Cross-Platform Apps'],
      backgroundImage: mobileDevImg, // Use imported image
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {servicesData.map((serviceData, index) => (
        <ServicesCard
          key={index}
          title={serviceData.title}
          services={serviceData.services}
          backgroundImage={serviceData.backgroundImage}
        />
      ))}
    </div>
  );
};

export default ServicesList;
