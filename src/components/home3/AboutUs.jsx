import React from "react";
import { Row, Col, Card, Typography } from "antd";
import { motion } from "framer-motion";
import {
  EyeOutlined,
  RocketOutlined,
  HeartOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import "./AboutUs1.css";

const { Title, Paragraph } = Typography;

const aboutUsData = [
  {
    title: "Our Vision",
    content:
      "Be and be recognized as the best solution provider for the businesses and individuals across the globe.",
    icon: <EyeOutlined />,
  },
  {
    title: "Our Mission",
    content:
      "Manifesting Automation and transformation for the improvement and betterment of the business process and upliftment of individual lives.",
    icon: <RocketOutlined />,
  },
  {
    title: "Our Values",
    content: ["Customer Satisfaction First.", "Deliver Beyond Promise"],
    icon: <HeartOutlined />,
  },
  {
    title: "What We Ensure",
    content: [
      "Satisfaction Guarantee: Commitment to ensuring customer satisfaction.",
      "Client-Centric Focus: Tailoring services to understand and address the specific needs of each client.",
      "Transparent Communication: Maintaining regular and transparent communication channels.",
      "Exceeding Service Levels: Striving to surpass agreed-upon service levels by consistently delivering high-quality work.",
      "Additional Services and Resources: Providing extra services or resources that align with and contribute to client goals.",
      "Exceptional Support: Ensuring exceptional support to enhance the overall customer experience.",
    ],
    icon: <CheckCircleOutlined />,
    isSpecial: true,
  },
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <Title level={2} className="section-title">
        About Us
      </Title>
      <Row gutter={[24, 24]} justify="center" align="stretch">
  {aboutUsData.slice(0, 3).map((section, index) => (
    <Col
      xs={24}
      sm={24}
      md={8}
      lg={8}
      xl={8}
      key={index}
      style={{ display: "flex" }} // ensures equal height for all Cols
    >
      <motion.div
        whileHover={{
          scale: 1.04,
          boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
        }}
        whileTap={{ scale: 0.97 }}
        className="about-card"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Card
          bordered={false}
          className="about-card-inner"
          style={{
            flex: 1, // stretch to fill parent
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flexGrow: 1 }}>
            <div className="icon-wrap">{section.icon}</div>
            <Title level={4} className="card-title">
              {section.title}
            </Title>
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
          </div>
        </Card>
      </motion.div>
    </Col>
  ))}
</Row>


      <Row
        gutter={[24, 24]}
        justify="center"
        style={{ marginTop: "30px" }}
        className="special-row"
      >
        <Col
          xs={24}
          sm={24}
          md={20}
          lg={16}
          xl={12}
          style={{ display: "flex" }}
        >
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
            }}
            whileTap={{ scale: 0.97 }}
            className="about-card about-card-special"
            style={{ width: "100%" }}
          >
            <Card
              bordered={false}
              className="about-card-inner about-card-inner-special"
              style={{
                width: "100%",
                minHeight: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
              }}
            >
              <div>
                <div className="icon-wrap">{aboutUsData[3].icon}</div>
                <Title level={4} className="card-title">
                  {aboutUsData[3].title}
                </Title>
                <Paragraph className="card-content">
                  <ul>
                    {aboutUsData[3].content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </Paragraph>
              </div>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
