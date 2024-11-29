import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import LandingContent from './components/LandingContent';
import FooterComponent from './components/Footer';
import './App.css';
import Home1 from './components/home/Home1';
import ContactUs from './components/ContactUs/ContactUs';
import Navbar from './components/Header/NavBar';
import AboutUs from './components/home3/AboutUs';

const { Content } = Layout;

const App = () => {
  const theme = {
    token: {
      colorPrimary: '#009EDB', // Primary color
      colorBgContainer: '#ddf9fd', // Background color for containers
      colorText: '#000', // Text color
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout>
     <Navbar/> 
      <Home1/>
        <Content>
          <LandingContent />
          <AboutUs/>
        </Content>

       <ContactUs />
        <FooterComponent /> 
      </Layout>
    </ConfigProvider>
  );
};

export default App;