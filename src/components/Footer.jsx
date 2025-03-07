// src/components/Footer.js
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => {
  const currentYear = new Date().getFullYear(); // Get current year

  return (
    <Footer style={{ textAlign: 'center', background: '#007676' }}>
      ©2017-{currentYear} Prushal Technology Pvt Ltd. All Rights Reserved.
    </Footer>
  );
};

export default FooterComponent;
