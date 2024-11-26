// src/components/ServicesList.js

import React from 'react';
import ServicesCard from './ServicesCard';

const ServicesList = () => {
  const servicesData = [
    {
      title: 'Data Science',
      services: ['Data Analysis', 'Machine Learning', 'Statistical Modeling'],
    },
    {
      title: 'Web Development',
      services: ['Responsive Design', 'API Integration', 'E-commerce Solutions'],
    },
    {
      title: 'Mobile Development',
      services: ['iOS Development', 'Android Development', 'Cross-Platform Apps'],
    },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      {servicesData.map((serviceData, index) => (
        <ServicesCard key={index} title={serviceData.title} services={serviceData.services} />
      ))}
    </div>
  );
};

export default ServicesList;