import React, { useMemo } from 'react';
import { Typography, Row, Col, Card, Button, Layout } from 'antd'; // Import AntD components
import { motion } from 'framer-motion';
import ServicesList from './ServicesList';
import AnimatedBackground from '../components/Animation/AnimatedBackground';
import CircularAnimation from '../components/Animation/CircularAnimation';
import AnalyticsOffering from './home2/AnalyticsOffering';
import HeroSection from './DataStats/HeroSection';
import CapabilitiesOffering from './home2/CapabilitiesOffering';
import './LandingContent.css';
import CompanyLogos from './Clients/CompanyLogos';
import Home1 from './home/Home1';
import ContactUs from './ContactUs/ContactUs';
import ParticleBackground from './Animation/VideoParticles';
import ImageComponent from './home/ImageComponent';
import { Typewriter } from 'react-simple-typewriter';
import AboutUs from './home3/AboutUs';

const { Title, Paragraph } = Typography;
const { Content } = Layout;

const LandingContent = () => {
  const letterData = useMemo(() => [
    { letter: 'P', meaning: 'Pioneering' },
    { letter: 'R', meaning: 'Research and' },
    { letter: 'U', meaning: 'Upgrading' },
    { letter: 'S', meaning: 'Solutions for' },
    { letter: 'H', meaning: 'Holistic' },
    {
      letter: 'A',
      meaning: (
        <Typewriter
          words={['Automation and', 'Advancements in ', 'Accentuation']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      ),
    },
    {
      letter: 'L',
      meaning: (
        <Typewriter
          words={['Leadership    _', 'Language Models', 'Leading-edge']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      ),
    },
  ], []);

  return (
    <Layout>
      <Content style={{ position: 'relative', zIndex: 1, maxWidth: '99.4%' }}>
        {/* Hero Section with Particle Background */}
        <div className="background-video-container">
          <div className="particles-overlay">
            <ParticleBackground />
          </div>
          <div className="image">
            <ImageComponent />
          </div>
          <div className="text-overlay">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Title level={1} className="prushal-heading">
                <motion.div
                  className="letters-container"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.3,
                      },
                    },
                  }}
                >
                  {letterData.map((data, index) => (
                    <motion.div
                      key={index}
                      className="letter-item"
                      variants={{
                        hidden: { opacity: 0, y: -50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <span className="big-letter">{data.letter}</span>{' '}
                      <span className="letter-meaning">{data.meaning}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </Title>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 6 }}
            >
              {/* <Paragraph className="paraText">
                We specialize in providing data-driven solutions for your business needs.
              </Paragraph> */}
            </motion.div>
          </div>
        </div>

        {/* Services Section */}
        <Row justify="center" style={{ padding: '50px' }}>
          <Col span={24}>
            <Card bordered={false} style={{ borderRadius: '10px' }}>
              <ServicesList />
            </Card>
          </Col>
        </Row>

        {/* Hero Section */}
        <HeroSection />

        {/* Offerings Section */}
        <Row gutter={[16, 16]} style={{ padding: "10px", paddingBottom: "0"}}>
          <Col xs={24} md={8} style={{ display: "flex" }}>
            <Card bordered={false} style={{ width: "100%", height: "100%" }}>
              <AnalyticsOffering />
            </Card>
          </Col>
          <Col xs={24} md={16} style={{ display: "flex" }}>
            <Card bordered={false} style={{ width: "100%", height: "100%" }}>
              <CapabilitiesOffering />
              <CircularAnimation />
            </Card>
          </Col>
        </Row>

        {/* Company Logos Section */}
        <Row justify="center" style={{ padding: '5px 0' }}>
          <Col span={24}>
            <CompanyLogos />
          </Col>
        </Row>
        <AboutUs />
      </Content>
      
      
    
      <ContactUs />
    </Layout>
  );
};

export default LandingContent;