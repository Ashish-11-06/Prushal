import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, ConfigProvider } from 'antd';
import LandingContent from './components/LandingContent';
import FooterComponent from './components/Footer';
import Contact from './pages/Contact';
import Navbar from './components/Header/Navbar';
import NewsPage from './pages/NewsPage';
//import AboutUs from './components/home3/AboutUs';
import AboutUs from './pages/AboutUs';
import './App.css';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/Productspage';
import PartnersPage from './pages/PartnersPage';
import ProjectsPage from './pages/ProjectsPage';
import Culture from './pages/Culture';
import SuccessStories from './pages/SuccessStories';
import Resources from './pages/Resources';
  
import ProductDetail from './pages/ProductDetail';    
import CaseStudies from './pages/CaseStudies';  
import Awards from './pages/Awards'; 
import TeamPage from './pages/TeamPage';   
import ScrollToTop from './components/ScrollToTop';    
import ChatBot from './components/chatbot/ChatBot';                          

const { Content } = Layout;

const App = () => {
  const theme = {
    token: {
      colorPrimary: '#009EDB', // Primary color
      colorBgContainer: '#EAEFEF', // Background color for containers
      colorText: '#000', // Text color
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <Router>
              <ScrollToTop />

        <Navbar />
        <Layout>
          <Content>
            <Routes>
              <Route path="/" element={<LandingContent />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/success-stories" element={<SuccessStories />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/case-studies/:id" element={<CaseStudies />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/team" element={<TeamPage />} />

              
              
              {/* Add more routes as needed */}
              
              {/* Example: <Route path="/example" element={<ExampleComponent />} /> */}


              {/* Add more routes as needed */}



              
            </Routes>
          </Content>

          {/* <ContactUs /> */}
          <FooterComponent />
        </Layout>
        <ChatBot />
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