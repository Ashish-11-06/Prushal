import React, { useState } from "react";
import { useEffect } from "react";
import { Row, Col, Card, Typography, Collapse, Tag, List } from "antd";
import { motion } from "framer-motion";
import caseStudies from "../pages/caseStudiesData";
import TypingEffect from "../pages/TypingEffect ";// Import the TypingEffect component

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const heroBg = "#eafafd";
const headingColor = "#007676";
const subtitleColor = "#3a3a3a";
const cardBgColors = ["#EAEFEF", "#EAEFEF"];



const sectionTitles = [
  "Overview",
  "Key Capabilities",
  "Solutions Delivered",
  "Compliance & Security",
  "Technology Stack",
  "Partnership Benefits",
];

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.010 },
  }),
};

// Custom bullet style for perfect alignment
const bulletStyle = {
  color: headingColor,
  fontWeight: 600,
  fontSize: 18,
  display: "inline-block",
  width: 24,
  minWidth: 24,
  textAlign: "center",
  verticalAlign: "top",
  lineHeight: "1.8",
};

const listItemStyle = {
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0",
  border: "none",
  margin: 0,
  textAlign: "justify",
};

const DetailsPanel = ({
  overview,
  highlights,
  complianceAndSecurity,
  technologyStack,
  partnershipBenefits,
  activeKey,
  setActiveKey,
}) => (
  <Collapse
    ghost
    expandIconPosition="end"
    activeKey={activeKey}
    onChange={setActiveKey}
    accordion // <-- This makes it a true accordion (only one open at a time)
    style={{ fontFamily: "Poppins, Segoe UI, sans-serif" }}
  >
    {sectionTitles.map((title, idx) => (
      <Panel
        header={
          <span
            style={{
              color: headingColor,
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: 0.2,
            }}
          >
            {title}
          </span>
        }
        key={String(idx + 1)}
        style={{
          marginBottom: 8,
        }}
      >
        <div style={{ textAlign: "justify" }}>
          {title === "Overview" && (
            <Paragraph style={{ marginBottom: 0 ,textAlign: "justify"}}>{overview.description}</Paragraph>
          )}
          {title === "Key Capabilities" && (
            <List
              dataSource={highlights?.keyCapabilities}
              renderItem={item => (
                <List.Item style={listItemStyle}>
                  <span style={bulletStyle}>•</span>
                  <span style={{ flex: 1 }}>{item}</span>
                </List.Item>
              )}
              style={{ background: "none", paddingLeft: 0 }}
            />
          )}
          {title === "Solutions Delivered" && (
            <List
              dataSource={highlights?.solutionsDelivered}
              renderItem={item => (
                <List.Item style={listItemStyle}>
                  <span style={{ ...bulletStyle, color: "#00b3b3" }}>•</span>
                  <span style={{ flex: 1 }}>{item}</span>
                </List.Item>
              )}
              style={{ background: "none", paddingLeft: 0 }}
            />
          )}
          {title === "Compliance & Security" && (
            <>
              <Text strong>Certifications:</Text>
              <div style={{ margin: "8px 0" }}>
                {complianceAndSecurity.certifications.map((cert, i) => (
                  <Tag key={i} color="cyan" style={{ fontWeight: 500 }}>
                    {cert}
                  </Tag>
                ))}
              </div>
              <Text strong>Features:</Text>
              <List
                dataSource={complianceAndSecurity.features}
                renderItem={item => (
                  <List.Item style={listItemStyle}>
                    <span style={{ ...bulletStyle, color: "#009999", fontSize: 16 }}>•</span>
                    <span style={{ flex: 1 }}>{item}</span>
                  </List.Item>
                )}
                style={{ background: "none", paddingLeft: 0 }}
              />
            </>
          )}
          {title === "Technology Stack" && (
            <>
              {Object.entries(technologyStack).map(([key, stack], idx) => (
                <Paragraph key={idx} style={{ marginBottom: 6, textAlign: "justify" }}>
                  <Text strong>{key.replace(/([A-Z])/g, " $1")}:</Text>{" "}
                  {stack.join(", ")}
                </Paragraph>
              ))}
            </>
          )}
          {title === "Partnership Benefits" && (
            <List
              dataSource={partnershipBenefits}
              renderItem={item => (
                <List.Item style={listItemStyle}>
                  <span style={{ ...bulletStyle, color: "#00b3b3" }}>•</span>
                  <span style={{ flex: 1 }}>{item}</span>
                </List.Item>
              )}
              style={{ background: "none", paddingLeft: 0 }}
            />
          )}
        </div>
      </Panel>
    ))}
  </Collapse>
);

const CaseStudyCard = ({ caseStudy, index }) => {
  const {
    title,
    subtitle,
    tagline,
    overview,
    highlights,
    complianceAndSecurity,
    technologyStack,
    partnershipBenefits,
  } = caseStudy;

  const backgroundColor = cardBgColors[index % 2];
  const isOdd = index % 2 === 0;

  // Accordion state
  const [activeKey, setActiveKey] = useState();

  // Current open section name
  const currentSectionName = activeKey
    ? sectionTitles[parseInt(activeKey, 10) - 1]
    : null;

  // Both containers get the same minHeight for perfect alignment
  const containerMinHeight = 480;

  const Headings = (
    <div
      style={{
        minHeight: containerMinHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Title
        level={2}
        style={{
          color: headingColor,
          fontFamily: "Poppins, Segoe UI, sans-serif",
          marginBottom: 8,
        }}
      >
        {title}
      </Title>
      <Title
        level={4}
        style={{
          color: subtitleColor,
          fontFamily: "Poppins, Segoe UI, sans-serif",
          fontWeight: 400,
          marginBottom: 12,
        }}
      >
        {subtitle}
      </Title>
      <div
        style={{
          background: heroBg,
          borderRadius: 10,
          padding: "14px 18px",
          margin: "16px 0 0 0",
        }}
      >
        <Paragraph
          style={{
            margin: 0,
            color: "#007676",
            fontWeight: 500,
            fontFamily: "Poppins, Segoe UI, sans-serif",
            fontSize: 16,
          }}
        >
          {tagline}
        </Paragraph>
      </div>
      {/* Show currently opened dropdown name below subtitle */}
      {currentSectionName && (
  <div
    style={{
      marginTop: 28,
      background: "#f0f7f7",
      borderRadius: 8,
      padding: "10px 16px",
      minHeight: 40,
      display: "flex",
      alignItems: "center",
      fontWeight: 600,
      fontSize: 17,
      color: headingColor,
      letterSpacing: 0.2,
      boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
      transition: "all 0.2s",
    }}
  >
    {/* For left-side headings (isOdd), arrows point right; for right-side, arrows point left */}
    {isOdd ? (
      <>
        {currentSectionName}
        <TypingEffect direction="right" />
      </>
    ) : (
      <>
        <TypingEffect direction="left" />
        {currentSectionName}
      </>
    )}
  </div>
)}


    </div>
  );

  const Details = (
    <div
      style={{
        minHeight: containerMinHeight,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <DetailsPanel
        overview={overview}
        highlights={highlights}
        complianceAndSecurity={complianceAndSecurity}
        technologyStack={technologyStack}
        partnershipBenefits={partnershipBenefits}
        activeKey={activeKey}
        setActiveKey={key => setActiveKey(Array.isArray(key) ? key[0] : key)}
      />
    </div>
  );

  return (
    <section style={{ background: backgroundColor, padding: "56px 0" }}>
      <motion.div
        className="container"
        custom={index}
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 18px" }}
      >
        <Row
          gutter={[36, 36]}
          align="top"
          justify="center"
          wrap
          style={{ minHeight: "380px" }}
        >
          <Col xs={24} md={12}>
            <Card
              bordered={false}
              style={{
                borderRadius: 18,
                background: "#fff",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                height: "100%",
                fontFamily: "Poppins, Segoe UI, sans-serif",
                padding: 0,
              }}
              bodyStyle={{ padding: 32 }}
            >
              {isOdd ? Headings : Details}
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              bordered={false}
              style={{
                borderRadius: 18,
                background: "#fff",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                height: "100%",
                fontFamily: "Poppins, Segoe UI, sans-serif",
                padding: 0,
              }}
              bodyStyle={{ padding: 32 }}
            >
              {isOdd ? Details : Headings}
            </Card>
          </Col>
        </Row>
      </motion.div>
    </section>
  );
};

const CaseStudies = () => (
  <main style={{ fontFamily: "Poppins, Segoe UI, sans-serif" }}>
    <section
      style={{
        textAlign: "center",
        padding: "70px 20px 50px 20px",
        background: heroBg,
        borderBottom: `2.5px solid #b2e5e5`,
      }}
    >
      <motion.div
  animate={{ y: [-10, 10] }}
  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
>
  <Title
    style={{
      fontSize: 36,
      fontWeight: 600,
      color: headingColor,
      fontFamily: "Poppins, Segoe UI, sans-serif",
      marginBottom: 0,
    }}
  >
    Case Studies
  </Title>
</motion.div>
      <Paragraph
        style={{
          color: "#007676",
          fontSize: 18,
          marginTop: 10,
          fontFamily: "Poppins, Segoe UI, sans-serif",
        }}
      >
        Explore how we’ve delivered transformative AI/ML solutions across industries.
      </Paragraph>
    </section>
    {caseStudies.map((caseStudy, index) => (
      <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
    ))}
  </main>
);

export default CaseStudies;
