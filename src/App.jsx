import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, ConfigProvider } from 'antd';
import LandingContent from './components/LandingContent';
import FooterComponent from './components/Footer';
import Contact from './pages/Contact';
import Navbar from './components/Header/NavBar';
import NewsPage from './pages/NewsPage';
//import AboutUs from './components/home3/AboutUs';
import AboutUs from './pages/AboutUs';
import './App.css';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/Productspage';
import Culture from './pages/Culture';
import SuccessStories from './pages/SuccessStories';
import CaseStudies from './pages/CaseStudies';

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
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/case-studies" element={<CaseStudies />} />

              

              <Route path="/services" element={<ServicesPage />} />
              <Route path="/culture" element={<Culture />} />
              
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