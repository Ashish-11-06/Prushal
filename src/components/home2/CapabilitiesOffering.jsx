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
  }
];

const CapabilitiesOffering = () => {
  return (
    <div className="capabilities-offering">
      <h1>Our Core Capabilities</h1>

      {/* First Row - 3 Cards */}
      <Row gutter={[12, 12]} justify="center" style={{ display: "flex", flexWrap: "wrap" }}>
        {capabilitiesData.slice(0, 3).map((capability, index) => (
          <Col 
            key={index} 
            xs={24}    
            sm={12}    
            md={8}    
            lg={4}    
            xl={4}    
            flex="auto"  
            style={{
              minWidth: "250px", 
              textAlign: "left"
            }}
          >
            <Card
              title={
                <div style={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <h3 style={{ marginTop: 10, color: "#3f51b5", fontSize: "12px", textAlign: "center", maxWidth: "80%" }}>
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
                // textAlign: "center",
                transition: "transform 0.3s ease-in-out",
              }}
            >
              {capability.description.map((item, idx) => (
                <div key={idx} style={{ fontSize: "14px", padding: "4px 0" }}>
                  {item}
                </div>
              ))}
            </Card>
          </Col>
        ))}
      </Row>

      {/* Second Row - Last 2 Cards (Taking Full Width) */}
      <Row gutter={[12, 12]}  style={{ display: "flex", flexWrap: "wrap", marginTop: 12 }}>
        {capabilitiesData.slice(3, 5).map((capability, index) => (
          <Col 
            key={index} 
            xs={24}    
            sm={12}    
            md={12}    
            lg={12}    
            xl={12}    
            flex="auto"  
            style={{
              minWidth: "300px", 
              textAlign: "left"
            }}
          >
            <Card
              title={
                <div style={{  display: "flex", justifyContent: "center",  }}>
                  <h3 style={{ marginTop: 10, color: "#3f51b5", fontSize: "12px", textAlign: "center", maxWidth: "80%" }}>
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
              {capability.description.map((item, idx) => (
                <div key={idx} style={{ fontSize: "14px", padding: "4px 0" }}>
                  {item}
                </div>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CapabilitiesOffering;