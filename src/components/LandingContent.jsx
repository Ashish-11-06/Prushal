// src/components/LandingContent.jsx
import React from 'react';
import { Typography } from 'antd';
import ServicesList from './ServicesList';

const { Title, Paragraph } = Typography;

const LandingContent = () => {
  return (
    <div style={{ padding: '50px' }}>
      <Title>Welcome to PrishalTech</Title>
      <Paragraph>
        We specialize in providing data-driven solutions for your business needs.
      </Paragraph>
      <ServicesList />
    </div>
  );
};

export default LandingContent;