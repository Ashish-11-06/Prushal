import React from 'react';
import { Row, Col, Card } from 'antd';
import { BarChartOutlined, DatabaseOutlined, CodeOutlined, CloudOutlined, LineChartOutlined } from '@ant-design/icons';
import './CapabilitiesOffering.css'; // Import the styling file for capabilities

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
      "Machine Learning & Deep Learning",
      "Agentic AI solutions",
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
    capability: "Digital Transformation",
    description: [
      "Predictive Analytics for Drug Efficacy",
      "NLP for Medical Literature Mining",
      "Digital Twins",
      "Chatbots & Virtual Assistants"
    ]
  },
  {
    capability: "Pharma Focused AI/ML",
    description: [
      "Robotic Process Automation (RPA)",
      "Business Process Automation",
      "Cloud Migration",
      "Enterprise Digital Transformation"
    ]
  }
];

const CapabilitiesOffering = () => {
  // Split into two arrays of 3 for two rows
  const firstRow = capabilitiesData.slice(0, 3);
  const secondRow = capabilitiesData.slice(3, 6);

  // Card rendering function for DRY code
  const renderCards = (rowData) =>
    rowData.map((capability, index) => (
      <Col
        key={index}
        xs={24} sm={24} md={8} lg={8} xl={8}
        style={{ minWidth: 250, marginBottom: 16, textAlign: "left" }}
      >
        <Card
          title={
            <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <span style={{ marginRight: 8 }}>{capability.icon}</span>
              <h3 style={{ marginTop: 10, color: "#3f51b5", fontSize: "14px", textAlign: "center", maxWidth: "80%" }}>
                {capability.capability}
              </h3>
            </div>
          }
          className="capability-card"
          hoverable
          style={{
            height: "100%",
            background: `linear-gradient(to bottom right, #ffffff, #f3f3f3)`,
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
            borderRadius: "16px",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <ul>
            {capability.description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Card>
      </Col>
    ));

  return (
    <div className="capabilities-offering">
      <h1>Our Core Capabilities</h1>
      <Row gutter={[16, 16]} justify="center">
        {renderCards(firstRow)}
      </Row>
      <Row gutter={[16, 16]} justify="center">
        {renderCards(secondRow)}
      </Row>
    </div>
  );
};

export default CapabilitiesOffering;
