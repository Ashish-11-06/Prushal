import React from 'react';
import { Timeline } from 'antd';
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
      <h1>Industries We Serve</h1>
      <Timeline mode="alternate" className="industry-timeline">
        {industriesData.map((industry, index) => (
          <Timeline.Item key={index} label={industry.industry}>
            <div className="timeline-content">
              <h3
                style={{
                  fontSize: '101%',
                  color: '#0066cc', // Set color for industry name
                }}
              >
                {industry.industry}
              </h3>
              <ul>
                {industry.description.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      color: '#05445E', // Set color for description
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default AnalyticsOffering;
