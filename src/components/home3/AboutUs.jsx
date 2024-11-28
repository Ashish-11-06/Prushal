import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { motion } from 'framer-motion';
import './AboutUs.css'; // Styling file for the About Us component

const { Title, Paragraph } = Typography;

const aboutUsData = [
  {
    title: "Our Vision",
    content: "Be and be recognized as the best solution provider for the businesses and the individuals across the globe",
    icon: "EyeOutlined",
  },
  {
    title: "Our Mission",
    content: "Manifesting Automation and transformation for the improvement and betterment of the business process and upliftment of individual lives",
    icon: "RocketOutlined",
  },
  {
    title: "Our Values",
    content: [
      "Customer Satisfaction First",
      "Deliver Beyond Promise",
    ],
    icon: "HeartOutlined",
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
    icon: "CheckCircleOutlined",
  }
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <Col gutter={[24, 24]} justify="center">
        {aboutUsData.map((section, index) => (
          <Col key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="about-card"
            >
              <Card
                bordered={false}
                style={{
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                  textAlign: 'left',
                  height: '1%',
                  width: '100%',
                  margin: '20px',
                  zIndex: 100,
                }}
              >
                <Title level={3} style={{ color: '#007676' }}>
                  {section.title}
                </Title>
                <Paragraph>
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
      </Col>
    </div>
  );
};

export default AboutUs;
