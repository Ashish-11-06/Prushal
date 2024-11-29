import React from 'react';
import { Row, Col, Card } from 'antd';
import './AnalyticsOffering.css'; // Import the styling file

const industriesData = [
  {
    industry: "Banking",
    description: [
      "Enterprise Data Management",
      "Regulatory Compliance",
      "Customer Analytics",
      "Risk and Fraud Detection"
    ]
  },
  {
    industry: "Healthcare",
    description: [
      "Patient Data Management",
      "Clinical Analytics",
      "Predictive Healthcare",
      "Operational Efficiency"
    ]
  },
  {
    industry: "Education",
    description: [
      "Student Analytics",
      "Learning Management Systems",
      "Course Optimization",
      "Academic Performance Tracking"
    ]
  },
  {
    industry: "Manufacturing",
    description: [
      "Supply Chain Analytics",
      "Production Optimization",
      "Predictive Maintenance",
      "Quality Control"
    ]
  },
  {
    industry: "Finance",
    description: [
      "Portfolio Management",
      "Financial Forecasting",
      "Risk Analytics",
      "Investment Analysis"
    ]
  },
  {
    industry: "FMCG",
    description: [
      "Consumer Behavior Analytics",
      "Demand Forecasting",
      "Inventory Management",
      "Market Trend Analysis"
    ]
  },
  {
    industry: "Energy",
    description: [
      "Energy Consumption Analysis",
      "Renewable Energy Optimization",
      "Grid Management",
      "Operational Efficiency"
    ]
  }
];

const AnalyticsOffering = () => {
  return (
    <div className="analytics-offering">
      <h1>Industries</h1>
      <Row gutter={[16, 16]}>
        {industriesData.map((industry, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6}>
            <Card
              title={industry.industry}
              className="industry-card"
              hoverable
            >
              <ul>
                {industry.description.map((item, idx) => (
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
