import React from 'react';
import { Row, Col, Card } from 'antd';
import { BarChartOutlined, DatabaseOutlined, CodeOutlined, CloudOutlined, LineChartOutlined } from '@ant-design/icons';
import './CapabilitiesOffering.css'; // Import the styling file for capabilities

// Data array containing the capabilities, descriptions, and icons
const capabilitiesData = [
  {
    capability: "Data Engineering",
    icon: <DatabaseOutlined style={{ fontSize: 36, color: '#3f51b5' }} />,
    description: [
      "Data Warehousing",
      "ETL Development",
      "Data Integration",
      "Data Quality & Governance"
    ]
  },
  {
    capability: "AI & ML",
    icon: <CodeOutlined style={{ fontSize: 36, color: '#673ab7' }} />,
    description: [
      "Machine Learning Model Development",
      "Deep Learning Solutions",
      "Natural Language Processing (NLP)",
      "Computer Vision Applications"
    ]
  },
  {
    capability: "BI and Analytics",
    icon: <BarChartOutlined style={{ fontSize: 36, color: '#009688' }} />,
    description: [
      "Business Intelligence Reporting",
      "Data Visualization",
      "Self-Service BI",
      "Advanced Analytics"
    ]
  },
  {
    capability: "Digital & UI/UX",
    icon: <CloudOutlined style={{ fontSize: 36, color: '#ff5722' }} />,
    description: [
      "User Interface Design",
      "User Experience Optimization",
      "Responsive Web Design",
      "Prototyping & Wireframing"
    ]
  },
  {
    capability: "Automation & Digital Transformation",
    icon: <LineChartOutlined style={{ fontSize: 36, color: '#f44336' }} />,
    description: [
      "Robotic Process Automation (RPA)",
      "Business Process Automation",
      "Cloud Migration",
      "Enterprise Digital Transformation"
    ]
  },
  {
    capability: "Automation & Digital Transformation",
    icon: <LineChartOutlined style={{ fontSize: 36, color: '#f44336' }} />,
    description: [
      "Robotic Process Automation (RPA)",
      "Business Process Automation",
      "Cloud Migration",
      "Enterprise Digital Transformation"
    ]
  }
];

const CapabilitiesOffering = () => {
  return (
    <div className="capabilities-offering">
      <h1>Our Core Capabilities</h1>
      <Row gutter={[24, 24]} justify="center">
        {capabilitiesData.map((capability, index) => (
          <Col 
            key={index} 
            xs={24}   /* Full width on extra-small screens (mobile) */
            sm={12}   /* 2 cards per row on small screens (tablet) */
            md={8}    /* 3 cards per row on medium screens (desktop) */
            lg={4.8}    /* 4 cards per row on large screens */
            xl={4.8}  /* 5 cards per row on extra-large screens */
          >
            <Card
              title={
                <div style={{ textAlign: 'center' }}>
                  {capability.icon}
                  <h3 style={{ marginTop: 10, color: '#3f51b5' }}>{capability.capability}</h3>
                </div>
              }
              className="capability-card"
              hoverable
              style={{
                height: '100%',
                background: `linear-gradient(to bottom right, #ffffff, #f3f3f3)`,
                boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                borderRadius: '16px',
                textAlign: 'center',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <ul>
                {capability.description.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '14px' }}>{item}</li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CapabilitiesOffering;
