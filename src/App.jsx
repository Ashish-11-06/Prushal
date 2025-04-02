import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, ConfigProvider } from 'antd';
import LandingContent from './components/LandingContent';
import FooterComponent from './components/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import Navbar from './components/Header/Navbar';
import AboutUs from './components/home3/AboutUs';
import './App.css';
import ServicesPage from './pages/ServicesPage';
import EventsAndStoriesPage from './pages/EventsAndStoriesPage';

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
      <Router>
        <Navbar />
        <Layout>
          <Content>
            <Routes>
              <Route path="/" element={<LandingContent />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/event-stories" element={<EventsAndStoriesPage />} />
              
            </Routes>
          </Content>

          {/* <ContactUs /> */}
          <FooterComponent />
        </Layout>
      </Router>
    </ConfigProvider>
  );
};

export default App;

{/* <ConfigProvider theme={theme}>
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
</ConfigProvider> */}