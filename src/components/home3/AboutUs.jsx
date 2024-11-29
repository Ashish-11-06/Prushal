import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { motion } from 'framer-motion';
import { EyeOutlined, RocketOutlined, HeartOutlined, CheckCircleOutlined } from '@ant-design/icons'; // Add icons
import './AboutUs.css'; // Styling file for the About Us component

const { Title, Paragraph } = Typography;

const aboutUsData = [
  {
    title: "Our Vision",
    content: "Be and be recognized as the best solution provider for the businesses and individuals across the globe",
    icon: <EyeOutlined style={{ fontSize: '24px', color: '#007676' }} />,
  },
  {
    title: "Our Mission",
    content: "Manifesting Automation and transformation for the improvement and betterment of the business process and upliftment of individual lives",
    icon: <RocketOutlined style={{ fontSize: '24px', color: '#007676' }} />,
  },
  {
    title: "Our Values",
    content: [
      "Customer Satisfaction First",
      "Deliver Beyond Promise",
    ],
    icon: <HeartOutlined style={{ fontSize: '24px', color: '#007676' }} />,
  },
  {
    title: "What We Ensure",
    content: [
      "Satisfaction Guarantee: Commitment to ensuring customer satisfaction.",
      "Client-Centric Focus: Tailoring services to understand and address the specific needs of each client.",
      "Transparent Communication: Maintaining regular and transparent communication channels.",
      "Exceeding Service Levels: Striving to surpass agreed-upon service levels by consistently delivering high-quality work.",
      "Additional Services and Resources: Providing extra services or resources that align with and contribute to client goals.",
      "Exceptional Support: Ensuring exceptional support to enhance the overall customer experience."
    ],
    icon: <CheckCircleOutlined style={{ fontSize: '24px', color: '#007676' }} />,
    isSpecial: true,  // Flag to style the 4th card differently
  }
];

const AboutUs = () => {
  return (
    <div className="about-us"
    style={{
      position: 'sticky', // Sticky positioning
      top: 0, // Sticks to the top of the page
      left: 0,
      right: 0,
      padding: '40px 20px',
      background: 'linear-gradient(90deg, #2196f37a, #007676)', // Gradient background
      zIndex: 100, // Ensures it stays above other elements
      marginTop: '-1%',
    
    }}
    
    >
      <Title level={2} className="section-title">About Us</Title>

      {/* First three cards in the first Row */}
      <Row gutter={[24, 24]} justify="center">
        {aboutUsData.slice(0, 3).map((section, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="about-card"
            >
              <Card bordered={false} className="about-card-inner">
                <Title level={4} className="card-title"> {section.icon} {section.title}</Title>
                <Paragraph className="card-content">
                  {Array.isArray(section.content) ? (
                    <ul>
                      {section.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    section.content
                  )}
                </Paragraph>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Special fourth card in a separate Row */}
      <Row gutter={[24, 24]} justify="center" className="special-row">
        <Col xs={24} sm={24} md={16}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="about-card-special"
          >
            <Card bordered={false} className="about-card-inner-special">
              <Title level={4} className="card-title"> {aboutUsData[3].icon} {aboutUsData[3].title}</Title>
              <Paragraph className="card-content">
                <ul>
                  {aboutUsData[3].content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </Paragraph>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
