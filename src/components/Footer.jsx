// src/components/Footer.js
import React from 'react';
import { Layout } from 'antd';
// import AboutUs from './home3/AboutUs';

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <>

    {/* <AboutUs/> */}
      <Footer style={{ textAlign: 'center' }}>
      ©2024 Your Company Name. All Rights Reserved.
    </Footer>
    
    </>
  
  );
};

export default FooterComponent;