import React from 'react';
import { Row, Col, Card } from 'antd';
import './AnalyticsOffering.css'; // Import the styling file

// Data array containing the information for the cards
const analyticsData = [
  {
    title: "Enterprise Data Management & Reporting",
    icon: "DesktopOutlined", // You can modify the icon name if needed
    color: "purple",
    items: [
      "Enterprise Data Management",
      "Dashboard Consulting",
      "Dashboard Modernization",
      "Regulatory Reporting",
      "MIS Reporting"
    ]
  },
  {
    title: "Digital Command Centre",
    icon: "VideoCameraOutlined",
    color: "green",
    items: [
      "Operations Analytics",
      "CXO Cockpit System",
      "Contact Centre Analytics",
      "Employee Analytics"
    ]
  },
  {
    title: "Customer Analytics",
    icon: "SearchOutlined",
    color: "purple",
    items: [
      "Integrated Customer View",
      "Customer Segmentation",
      "Segment Profiling",
      "Next Best Offer",
      "Churn Prediction"
    ]
  },
  {
    title: "Risk / Fraud Analytics",
    icon: "LockOutlined",
    color: "green",
    items: [
      "Claim Fraud Analytics",
      "Contextual & Behavioral Analytics"
    ]
  }
];

const AnalyticsOffering = () => {
  return (
    <div className="analytics-offering">
      <h1>Analytics Offering In Banking / Financial Services</h1>
      <Row gutter={[16, 16]}>
        {analyticsData.map((card, index) => (
          <Col key={index} span={6}>
            <Card
              title={card.title}
              extra={<i className={`anticon anticon-${card.icon}`} />}
              className={`analytics-card ${card.color}`}
              style={{ height: '100%' }}  // Ensure card fills available space
            >
              <ul>
                {card.items.map((item, idx) => (
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

export default AnalyticsOffering;
