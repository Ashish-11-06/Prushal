import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import HeaderComponent from './components/Header';
import LandingContent from './components/LandingContent';
import FooterComponent from './components/Footer';
import './App.css';
import Home1 from './components/home/Home1';
import ContactUs from './components/ContactUs/ContactUs';

const { Content } = Layout;

const App = () => {
  const theme = {
    token: {
      colorPrimary: '#2F2F9E', // Primary color
      colorBgContainer: '#009EDB', // Background color for containers
      colorText: '#000', // Text color
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <HeaderComponent />
       <Home1/>
        <Content>
          
          <LandingContent />

        </Content>
       <ContactUs />
        <FooterComponent /> 
      </Layout>
    </ConfigProvider>
  );
};

export default App;