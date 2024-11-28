import React from 'react';
import { Row, Col, Card } from 'antd';
import './CapabilitiesOffering.css'; // Import the styling file for capabilities

// Data array containing the capabilities and their descriptions
const capabilitiesData = [
  {
    capability: "Data Engineering",
    description: [
      "Data Warehousing",
      "ETL Development",
      "Data Integration",
      "Data Quality & Governance"
    ]
  },
  {
    capability: "AI & ML",
    description: [
      "Machine Learning Model Development",
      "Deep Learning Solutions",
      "Natural Language Processing (NLP)",
      "Computer Vision Applications"
    ]
  },
  {
    capability: "BI and Analytics",
    description: [
      "Business Intelligence Reporting",
      "Data Visualization",
      "Self-Service BI",
      "Advanced Analytics"
    ]
  },
  {
    capability: "Digital & UI/UX",
    description: [
      "User Interface Design",
      "User Experience Optimization",
      "Responsive Web Design",
      "Prototyping & Wireframing"
    ]
  },
  {
    capability: "Automation and Digital Transformation",
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
      <Row gutter={[16, 16]}>
        {capabilitiesData.map((capability, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={capability.capability}
              className="capability-card"
              style={{
                height: '100%',
                backgroundColor: '#f5f5f5',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                transition: 'transform 0.3s',
              }}
              hoverable
            >
              <ul>
                {capability.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
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
