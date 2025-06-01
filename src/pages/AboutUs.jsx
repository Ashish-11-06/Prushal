import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./AboutUs.css";
import { Row, Col, Card, Typography, Image, Modal } from "antd";
import ceoimage from "../assets/kushalsharma.png";
import Aboutimage from "../assets/about.png";
import { LinkedinFilled } from "@ant-design/icons";
import training from "../assets/training.png";
import PartnerImage from "../assets/partner.gif"; // Partner Image
import img from "../assets/ai.png"; // Behind the Scenes Image
import {
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { FaRocket, FaBullseye, FaHandshake } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Title, Paragraph } = Typography;


const AboutUs = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useNavigate();


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Rest of the component code remains same...


  return (
    <motion.div
      style={{
        textAlign: "center",
        padding: "50px",
        background: "linear-gradient(135deg, #f3f3f3, #ffffff)",
        minHeight: "100vh",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* About Us Section */}
      <div className="about-hero-section">
        <div className="about-overlay" />
        <div className="about-container">
          <motion.div
            className="about-text-content"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Title level={1} className="about-title" style={{ color: "#007676" }}>
              About Us
            </Title>
            <Paragraph className="about-subtitle" style={{ color: "black",fontSize: "18px", textAlign: "justify" }}>
              10 years of Expertise in Data Science, Web Development for
              Digital Transformation, and Branding Management since 2015.
            </Paragraph>
            <Paragraph className="about-subtitle" style={{ color: "black" , textAlign: "justify",fontSize: "18px"}}>
            PrushalTech wholeheartedly endorses the Digital India initiative of the Indian
Government and is fully ready to contribute to this visionary project. Our
commitment lies in providing comprehensive solutions for data-intensive business
processes, aimed at assisting enterprises in overcoming their operational hurdles
and delivering significant value.
We provide a range of services to our clients, including Website Design, Web
Applications, Big Data Solutions, analytical solutions, data-driven solutions, Cluster
Setup, Brand Creation, Brand Management, Digital Marketing Campaigns, and
Corporate Trainings.
            </Paragraph>
            
          </motion.div>

          <motion.div
            className="about-image-content"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={training}
              alt="Team Illustration"
              className="about-image"
              style={{
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "400px",
  height: "400px",
}}

            />
          </motion.div>
        </div>
      </div>



      <Row
        gutter={[24, 24]}
        justify="center"
        style={{ marginTop: "40px", padding: "0 20px" }}
      >
        {[
          {
            title: "Our Vision",
            description:
              "Be and be recognized as the best solution provider for the businesses and individuals across the globe.",
            icon: FaRocket,
            color: "#007676",
            
          },
          {
            title: "Our Mission",
            description:
              "Manifesting Automation and transformation for the improvement and betterment of the business process and upliftment of individual lives.",
            icon: FaBullseye,
            color: "#007676",
          },
          {
            title: "Our Values",
            description:
              "Customer Satisfaction First, Deliver Beyond Promise.",
            icon: FaHandshake,
            color: "#007676",
          },
        ].map((item, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              style={{ height: "100%" }}
            >
              <Card
                hoverable
                style={{
                  height: "100%",
                  borderRadius: "16px",
                  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.1)",
                  background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.3s ease",
                  border: "1px solid #e0e0e0",
                }}
                bodyStyle={{ padding: 0 }}
              >
                <div style={{ textAlign: "center", padding: "20px" }}>
                  <item.icon
                    size="2.5em"
                    style={{
                      color: item.color,
                      marginBottom: "16px",
                    }}
                  />
                  <Title level={4} style={{ color: item.color, marginBottom: 8 }}>
                    {item.title}
                  </Title>
                  <Paragraph style={{ color: "#555", fontSize: "16px" }}>
                    {item.description}
                  </Paragraph>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}








        {/* Modal Component */}
        <Modal
          open={isModalVisible} // Use 'open' instead of 'visible' in newer Ant Design versions
          onCancel={() => setIsModalVisible(false)} // Properly handle the close action
          footer={null} // No footer buttons
          centered // Center the modal on the screen
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px", // space between image and text
              textAlign: "left", // text aligned left in text section
            }}
          >
            {/* Left: Image */}
            <img
              src={ceoimage}
              alt={`Team Member ${selectedMember + 1}`}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />

            {/* Right: Text Content */}
            <div>
              <Title level={4} style={{ margin: 0 }}>
                Team Member {selectedMember + 1}
              </Title>
              <Paragraph style={{ margin: "8px 0" }}>
                Role: Key Contributor in Organization
              </Paragraph>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "20px", color: "#0077b5" }}
              >
                <LinkedinFilled />
              </a>
            </div>
          </div>

        </Modal>

      </Row>



  {/* 1. Who We Are */}
<div style={{ padding: "40px 0", background: "#EAEFEF",marginTop: "40px" }}>
  <Row gutter={[32, 32]} justify="center" align="middle">
    <Col xs={24} md={10}>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <Card
          bordered={false}
          style={{
            borderRadius: 18,
            boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
            // background: "linear-gradient(135deg, #e0f7fa 80%, #fff 100%)",
            backgroundColor: "#EAEFEF;",
            minHeight: 290,
          }}
        >
          <Title level={3} style={{ color: "#007676" }}>Who We Are</Title>
          <Paragraph
            style={{
              fontSize: "1.1rem",
              color: "#333",
              marginBottom: 8,
              textAlign: "justify",
            }}
          >
            <b>AI/ML-Driven Technology Company</b> with deep expertise in digital transformation.<br />
            Proven experience delivering custom software solutions and intelligent automation.<br />
            Dedicated vertical for <b>Pharma & Life Sciences</b>.<br />
            <b>Cross-functional team:</b> Data Scientists, Engineers, Domain Experts.
          </Paragraph>
        </Card>
      </motion.div>
    </Col>
    <Col xs={24} md={8} style={{ textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 0.7 },
          x: { duration: 0.7 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Image
          src={img}
          alt="Who We Are"
          width={220}
          preview={false}
          style={{ borderRadius: 16, boxShadow: "0 2px 14px rgba(0,0,0,0.07)" }}
        />
      </motion.div>
    </Col>
  </Row>
</div>



{/* 2. Our Pharma Focused AI/ML Capabilities */}
<div style={{ padding: "40px 0", background: "#f8f9fc",marginTop: "40px" }}>
  <Title level={3} style={{ color: "#007676", marginBottom: 30 }}>Our Pharma Focused AI/ML Capabilities</Title>
  <Row gutter={[24, 24]} justify="center">
    {[
      "Predictive Analytics for Drug Efficacy & Trials",
      "NLP for Medical Literature Mining & Pharmacovigilance",
      "Computer Vision for Cell Analysis & Imaging",
      "Recommendation Engines for Personalized Treatment",
      "Digital Twins for Clinical & Lab Simulations",
      "Chatbots & Virtual Assistants for Patient Support and Medical respectively"
    ].map((cap, idx) => (
      <Col xs={24} sm={12} md={8} key={cap}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, delay: idx * 0.07 }}
          viewport={{ once: true }}
        >
          <Card
            hoverable
            style={{
              borderRadius: 14,
              background: "linear-gradient(120deg, #ffffff 70%, #e3f2fd 100%)",
              minHeight: 120,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              color: "black",
              fontSize: "1.05rem",
              transition: "all 0.3s",
            }}
            bodyStyle={{ padding: 24 }}
          >
            {cap}
          </Card>
        </motion.div>
      </Col>
    ))}
  </Row>
</div>

{/* 3. Solutions We've Built */}
<div style={{ padding: "40px 0", background: "#fff",marginTop: "40px" }}>
  <Title level={3} style={{ color: "#007676", marginBottom: 30 }}>Solutions We've Built</Title>
  <Row gutter={[24, 24]} justify="center">
    {[
      "AI-Based Clinical Trial Optimizer",
      "NLP-Driven Adverse Event Detection System",
      "Prescription Analytics Dashboard for Field Insights",
      "ChatGPT-style Assistant for SOP/Compliance FAQ",
      "Inventory Management System with Real-Time AI Demand Forecasting"
    ].map((solution, idx) => (
      <Col xs={24} sm={12} md={8} key={solution}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, delay: idx * 0.07 }}
          viewport={{ once: true }}
        >
          <Card
            hoverable
            style={{
              borderRadius: 14,
              background: "linear-gradient(120deg, #f8f9fa 70%, #e0f7fa 100%)",
              minHeight: 110,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#222",
              fontWeight: 500,
              fontSize: "1.05rem",
              transition: "all 0.3s",
            }}
            bodyStyle={{ padding: 24 }}
          >
            {solution}
          </Card>
        </motion.div>
      </Col>
    ))}
  </Row>
</div>

{/* 4. Data Security & Compliance */}
<div style={{ padding: "40px 0", background: "#f8f9fc" ,marginTop: "40px"}}>
  <Title level={3} style={{ color: "#007676", marginBottom: 30 }}>Data Security & Compliance</Title>
  <Row gutter={[24, 24]} justify="center">
    {[
      "HIPAA, GDPR, and 21 CFR Part 11 Compliant Systems",
      "End-to-end Encryption & Access Control",
      "Audit Trails and Data Governance Frameworks"
    ].map((item, idx) => (
      <Col xs={24} sm={12} md={8} key={item}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5, delay: idx * 0.07 }}
          viewport={{ once: true }}
        >
          <Card
            hoverable
            style={{
              borderRadius: 14,
              background: "#fff",
              minHeight: 110,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#007676",
              fontWeight: 500,
              fontSize: "1.05rem",
              transition: "all 0.3s",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
            }}
            bodyStyle={{ padding: 24 }}
          >
            {item}
          </Card>
        </motion.div>
      </Col>
    ))}
  </Row>
</div>

{/* 5. Technology Stack */}
<div style={{ padding: "40px 0", background: "#fff" , marginTop: "40px"}}>
  <Title level={3} style={{ color: "#007676", marginBottom: 30, textAlign: "center" }}>
    Technology Stack
  </Title>
  <Row gutter={[24, 24]} justify="center" style={{ maxWidth: 960, margin: "0 auto" }}>
    {[
      { title: "AI/ML", stack: "Python, TensorFlow, PyTorch, Hugging Face, AutoML etc.." },
      { title: "Backend", stack: "Node.js, Django, Spring Boot etc.." },
      { title: "Frontend", stack: "React, Angular, React Native etc.." },
      { title: "Cloud", stack: "AWS, Azure, GCP, OCI etc.." },
      { title: "Data & DevOps", stack: "Spark, Kafka, Databricks, Docker, Kubernetes etc.." }
    ].map((item, idx) => (
      <Col xs={24} sm={12} md={8} key={item.title}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,118,118,0.2)" }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          style={{ borderRadius: 16 }}
        >
          <Card
            hoverable
            style={{
              borderRadius: 16,
              background: "linear-gradient(135deg, #e3f2fd 70%, #fff 100%)",
              minHeight: 130,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#007676", // Heading color
              fontWeight: 600,
              fontSize: "1.1rem",
              padding: "24px",
              boxShadow: "0 2px 14px rgba(0,0,0,0.07)",
              transition: "all 0.3s ease",
              cursor: "default",
            }}
            bodyStyle={{ padding: 0, textAlign: "center" }}
          >
            <span>{item.title}:</span>
            <br />
            <span style={{ color: "#000", fontWeight: 500, fontSize: "1rem", marginTop: 8, display: "inline-block" }}>
              {item.stack}
            </span>
          </Card>
        </motion.div>
      </Col>
    ))}
  </Row>
</div>





<div style={{ padding: "40px 0", background: "#f8f9fc",marginTop: "40px" }}>
  <Title level={3} style={{ color: "#007676", marginBottom: 30, textAlign: "center" }}>
    Why Partner With Us
  </Title>
  <Row
    gutter={[32, 32]}
    justify="center"
    align="middle"
    style={{ maxWidth: 1000, margin: "0 auto" }}
  >
    {/* Left: Image with floating animation */}
    <Col xs={24} md={10} style={{ textAlign: "center" }}>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src={PartnerImage} // replace with your image variable or import
          alt="Partnership"
          width={230}
          preview={false}
          style={{ borderRadius: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
        />
      </motion.div>
    </Col>

    {/* Right: Four points */}
    <Col xs={24} md={14}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {[
          "Strong blend of domain + technology",
          "End-to-end execution: from Data Engineering to Model Deployment",
          "Flexible engagement: POC | Pilot | Scale",
          "Quick turnaround with dedicated teams",
        ].map((reason, idx) => (
          <motion.div
            key={reason}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5, delay: idx * 0.07 }}
            viewport={{ once: true }}
            style={{
              background: "#fff",
              borderRadius: 14,
              padding: "20px 24px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              fontWeight: 600,
              fontSize: "1.1rem",
              color: "#000", // black text
              cursor: "default",
              userSelect: "none",
            }}
          >
            {reason}
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <div style={{ marginTop: 32, textAlign: "center" }}>
          <button
      style={{
        backgroundColor: "#2196F3",
        color: "white",
        padding: "12px 34px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "1.1rem",
        transition: "all 0.3s",
        boxShadow: "0 2px 8px rgba(33,150,243,0.08)",
      }}
      onClick={() => navigate("/contact")}
    >
      Let's Collaborate
    </button>
      </div>
    </Col>
  </Row>
</div>




    </motion.div>

  );
};

export default AboutUs;
