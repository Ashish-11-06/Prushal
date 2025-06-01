
import React, { useMemo } from 'react';
import { Timeline } from 'antd';
import './AnalyticsOffering.css';

const AnalyticsOffering = () => {
  const industriesData = useMemo(() => [
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
    },
    {
      industry: "E-commerce",
      description: [
        "Online Store Development",
        "Payment Gateway Integration",
        "Inventory Management Systems",
        "Customer Behavior Analytics"
      ]
    }
  ], []);

  return (
    <div className="analytics-offering">
<h1 className="industries-heading">Industries We Serve</h1>
      <Timeline mode="alternate" className="industry-timeline">
        {industriesData.map((industry, index) => (
          <Timeline.Item key={index} >
            <h3 style={{ fontSize: '101%', color: '#0066cc' }}>
              {industry.industry}
            </h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              {industry.description.map((item, idx) => (
                <li key={idx} style={{ color: '#05445E' }}>
                  {item}
                </li>
              ))}
            </ul>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default AnalyticsOffering;
