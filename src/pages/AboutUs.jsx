import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

import "./AboutUs.css";
import { Row, Col, Card, Typography, Image, Modal, Grid } from "antd";
import ceoimage from "../assets/kushalsharma.png";
import Aboutimage from "../assets/about.png";
import { LinkedinFilled } from "@ant-design/icons";
import training from "../assets/training.png";
import {
  FaWhatsapp,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { FaRocket, FaBullseye, FaHandshake } from "react-icons/fa";
import CountUp from "react-countup";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const { Title, Paragraph } = Typography;

const { useBreakpoint } = Grid;

const AboutUs = () => {

  const screens = useBreakpoint();
  const isMobile = !screens.sm;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

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
        padding: isMobile ? '20px' : '50px',
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
            <Title level={1} className="about-title" style={{ color: "#2980b9" }}>
              About Us
            </Title>
            <Paragraph className="about-subtitle" style={{ color: "black" }}>
              10 years of Expertise in Data Science, Web Development for
              Digital Transformation, and Branding Management since 2015.
            </Paragraph>
            <ul className="about-bullets">
              <li style={{ color: "black" }}>
                Satisfaction Guarantee: Commitment to ensuring customer
                satisfaction.
              </li>
              <li style={{ color: "black" }}>
                Client-Centric Focus: Tailoring services to understand and
                address the specific needs of each client.
              </li>
              <li style={{ color: "black" }}>
                Transparent Communication: Maintaining regular and transparent
                communication channels.
              </li>
              <li style={{ color: "black" }}>
                Exceeding Service Levels: Striving to surpass agreed-upon
                service levels by consistently delivering high-quality work.
              </li>
              <li style={{ color: "black" }}>
                Additional Services and Resources: Providing extra services or
                resources that align with and contribute to client goals.
              </li>
              <li style={{ color: "black" }}>
                Exceptional Support: Ensuring exceptional support to enhance the
                overall customer experience.
              </li>
            </ul>
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
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </motion.div>
        </div>
      </div>
      <div style={{ padding: "60px 10%", backgroundColor: "#f8f9fc" }}>
        <Row gutter={[40, 40]} align="middle">
          {/* Left Side: Text Content */}
          <Col xs={24} md={12}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "#3498db",
                lineHeight: "1.3",
              }}
            >
              We are{" "}
              <span style={{ color: "#2980b9" }}>Passionate</span> About
              <br />
              Learn and Develop Model
            </h2>

            <div
              style={{
                width: "100px",
                height: "5px",
                backgroundColor: "#3498db",
                margin: "10px 0 20px",
              }}
            ></div>

            <p
              style={{
                fontSize: "1.2rem",
                color: "#1e1e8d",
                lineHeight: "1.6",
              }}
            >
              We resource
              <span style={{ fontWeight: 500, color: "#3498db" }}>
                Corporate Trainers
              </span>
              on demand.
              <br />
              We impart
              <span style={{ fontWeight: 500, color: "#3498db" }}>
                professional trainings
              </span>
              in the domains that best fit for the corporates.
            </p>

            <button
              style={{
                backgroundColor: "#3498db",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "35px",
                fontWeight: "bold",
                fontSize: "1rem",
                transition: "all 0.3s ease",
              }}
            >
              Explore More
            </button>
          </Col>

          {/* Right Side: Image */}
          <Col xs={24} md={12} style={{ textAlign: "center" }}>
            <img
              src={Aboutimage}
              alt="Training"
              style={{
                width: "100%",
                maxWidth: "450px",
                animation: "fadeIn 1.2s ease-in-out",
              }}
            />
          </Col>
        </Row>
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
            color: "#3498db",
          },
          {
            title: "Our Mission",
            description:
              "Manifesting Automation and transformation for the improvement and betterment of the business process and upliftment of individual lives.",
            icon: FaBullseye,
            color: "#2ecc71",
          },
          {
            title: "Our Values",
            description:
              "Customer Satisfaction First, Deliver Beyond Promise.",
            icon: FaHandshake,
            color: "#f1c40f",
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
                  <Paragraph style={{ color: "#555", fontSize: "14px" }}>
                    {item.description}
                  </Paragraph>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}








      </Row>{/* Our Team Section */}
      {/* <Title level={2} style={{ marginTop: "50px", color: "#2980b9" }}>
        Our Team
      </Title> */}
      <Row justify="center" style={{ marginTop: "40px", padding: "20px" }}>
        {/* <Col xs={24} sm={24} md={24} lg={24}>
    <Slider
      {...{
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      }}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} style={{ padding: "0 12px" }}>
          <Card
            hoverable
            onClick={() => {
              setSelectedMember(index);
              setIsModalVisible(true);
            }}
            style={{
              textAlign: "center",
              borderRadius: "20px",
              boxShadow: "0 15px 30px rgba(0, 0, 0, 0.08)",
              padding: "16px",
              background: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
              height: "100%",
              border: "1px solid rgba(0, 0, 0, 0.2)",
              margin: "8px",
            }}
          >
            <img
              src={ceoimage}
              alt={`Team Member ${index + 1}`}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "16px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                border: "2px solid rgba(0, 0, 0, 0.05)",
                boxShadow: "0 0 6px rgba(0, 0, 0, 0.07)",
              }}
            />
            <Title
              level={4}
              style={{
                marginBottom: 4,
                color: "#333",
                fontWeight: "600",
              }}
            >
              Team Member {index + 1}
            </Title>
            <Paragraph
              style={{
                fontStyle: "italic",
                marginBottom: 16,
                color: "#666",
                fontSize: "13px",
              }}
            >
              Role in Organization
            </Paragraph>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "20px",
                color: "#0077b5",
              }}
            >
              <LinkedinFilled />
            </a>
          </Card>
        </div>
      ))}
    </Slider>
  </Col> */}

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






      {/* Achievements Section */}
      <Title level={2} style={{ marginTop: "50px", color: "#2980b9" }}>
        Achievements
      </Title>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "40px" }} className="main-container">
  {[{
    end: 50,
    text: "Projects Completed"
  }, {
    end: 30,
    text: "Clients Served"
  }, {
    end: 12,
    text: "Awards Won"
  }].map((item, index) => (
    <Col
      key={index}
      xs={24} sm={12} md={8} lg={8} xl={6}
      className="box"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card
          hoverable
          style={{
            width: "100%",
            height: "150px",
            textAlign: "center",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
          }}
        >
          <CountUp
            start={0}
            end={item.end}
            duration={2}
            suffix="+"
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "10px",
            }}
          />
          <Paragraph style={{ color: "#777" }}>{item.text}</Paragraph>
        </Card>
      </motion.div>
    </Col>
  ))}
</Row>

      {/* Social Media Section show proper react icons an dwe will link it later */}
      <div
        style={{
          marginTop: "50px",
          padding: "20px 0",
          // backgroundColor: "#f0f0f0",
        }}
      >
        <Title level={3} style={{ marginBottom: "20px", color: "#2980b9" }}>
          Get connected with us on social networks
        </Title>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "20px" }}
        >
          <motion.a
            href="https://www.facebook.com/prushal"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "24px", color: "#4267B2" }}
            whileHover={{ scale: 1.2 }}
          >
            <FaFacebook />
          </motion.a>
          {/* <motion.a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "24px", color: "#1DA1F2" }}
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter />
          </motion.a> */}
          <motion.a
            href="https://www.instagram.com/prushaltech/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "24px", color: "#E4405F" }}
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@prushaltechnology8846"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "24px", color: "#FF0000" }}
            whileHover={{ scale: 1.2 }}
          >
            <FaYoutube />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/company/prushal-technology-pvt-ltd"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "24px", color: "#0077B5" }}
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "24px", color: "#25D366" }}
            whileHover={{ scale: 1.2 }}
          >
            <FaWhatsapp />
          </motion.a>
        </div>

        
      </div> 
    </motion.div>

  );
};

export default AboutUs;
