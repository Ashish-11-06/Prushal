import React from 'react';
import { Row, Col, Button, Card,Typography } from 'antd';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Culture.css'; // Reuse your existing styles
const { Title, Paragraph } = Typography;


// Award images (replace with your real images)
import award1 from '../assets/discuss.webp';
import award2 from '../assets/discuss.webp';
import award3 from '../assets/discuss.webp';
import award4 from '../assets/discuss.webp';

// Certification images (replace with your real images)
import cert1 from '../assets/grow_together.gif';
import cert2 from '../assets/grow_together.gif';
import CountUp from "react-countup";


const awards = [
  {
    img: award1,
    title: 'Best Workplace 2024',
    description: 'Awarded for our outstanding workplace culture and employee satisfaction.',
    year: '2024',
    org: 'TechReview'
  },
  {
    img: award2,
    title: 'Innovation Leader',
    description: 'Recognized for breakthrough solutions in AI-driven agriculture.',
    year: '2023',
    org: 'AgriTech Awards'
  },
  {
    img: award3,
    title: 'Customer Delight Champion',
    description: 'Honored for delivering exceptional customer experiences.',
    year: '2023',
    org: 'CX Forum'
  },
  {
    img: award4,
    title: 'Sustainability Star',
    description: 'Applauded for our eco-friendly initiatives and green workplace.',
    year: '2022',
    org: 'Green India'
  },
];

const certifications = [
  {
    img: cert1,
    name: 'ISO 9001:2015',
    desc: 'Certified for Quality Management Systems'
  },
  {
    img: cert2,
    name: 'ISO 27001',
    desc: 'Certified for Information Security Management'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: 'spring', stiffness: 80, damping: 14 },
  }),
};

const Awards = () => (
  <div className="culture-page" style={{ backgroundColor: "#EAEFEF", minHeight: '100vh' }}>
    {/* Hero Section */}
    <section className="hero" style={{
      minHeight: '30vh', // Half the height
      backgroundImage: "url('../assets/grow_together.gif')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div className="hero-overlay" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="hero-content"
        style={{ minWidth: 340, maxWidth: 700, padding: 0,height: 100 }}
      >
        <h2 className="hero-heading" style={{ color: "#007676", fontWeight: "bold", fontSize: 28, marginBottom: 8 }}>
          Celebrating Our Recognition
        </h2>
        <p className="hero-subheading" style={{ fontSize: 16, marginBottom: 12 }}>
          It's Journey of excellence and innovation.
        </p>
        <Link to="/about">
          <Button type="primary" className="hero-button" style={{ backgroundColor: "#2196F3" }}>
            View Our Story
          </Button>
        </Link>
      </motion.div>
    </section>

    {/* Awards Section */}
    <section className="core-values" style={{ backgroundColor: "#f8f8f8", paddingTop: 40 }}>
      <h2 className="core-title" style={{ color: "#007676", fontSize: 36 }}>
        Awards & Recognitions
      </h2>
      <Row gutter={[24, 24]} justify="center">
        {awards.map((award, i) => (
          <Col xs={24} sm={12} md={8} lg={6} key={award.title}>
            <motion.div
              className="value-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 32px rgba(33,150,243,0.15)" }}
              style={{
                backgroundColor: "#fff",
                borderRadius: 16,
                boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
                padding: 0,
                minHeight: 340,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "'Poppins', sans-serif",
                overflow: "hidden"
              }}
            >
              <img
                src={award.img}
                alt={award.title}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
              <div style={{ padding: "18px 16px 12px 16px", width: "100%", textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#007676", marginBottom: 6 }}>
                  {award.title}
                </div>
                <p style={{ fontSize: 15, color: "#333", margin: "0 0 6px 0", minHeight: 40 }}>
                  {award.description}
                </p>
                <div style={{
                  fontSize: 14,
                  color: "#2196F3",
                  fontWeight: 600,
                  letterSpacing: 1,
                  marginBottom: 2
                }}>
                  {award.year}
                </div>
                <div style={{ fontSize: 13, color: "#888" }}>{award.org}</div>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>

    {/* Certifications Section */}
    <section className="gallery-section" style={{ backgroundColor: "#f4f4f4", paddingTop: 40 }}>
      <h2 className="gallery-title" style={{ color: "#007676", fontSize: 32 }}>
        Our Certifications
      </h2>
      <Row gutter={[24, 24]} justify="center" align="middle">
        {certifications.map((cert, i) => (
          <Col xs={24} sm={12} md={8} lg={6} key={cert.name}>
            <motion.div
              className="value-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
              whileHover={{ scale: 1.04, boxShadow: "0 10px 25px rgba(0,118,118,0.13)" }}
              style={{
                backgroundColor: "#fff",
                borderRadius: 16,
                boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
                padding: "28px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontFamily: "'Poppins', sans-serif",
                minHeight: 220,
              }}
            >
              <img
                src={cert.img}
                alt={cert.name}
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "contain",
                  marginBottom: 16,
                }}
              />
              <div style={{ fontWeight: 700, color: "#007676", fontSize: 17 }}>{cert.name}</div>
              <div style={{ fontSize: 15, color: "#333", marginTop: 6 }}>{cert.desc}</div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>


    {/* Achievements Section */}
      <Title level={2} style={{ marginTop: "50px", color: "#007676" }}>
        Achievements
      </Title>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: "40px" }}>
  <Col xs={24} sm={12} md={8} lg={8}>
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CountUp
          start={0}
          end={50}
          duration={2}
          suffix="+"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#333",
          }}
        />
        <Paragraph style={{ color: "#777", margin: 0 }}>Projects Completed</Paragraph>
      </Card>
    </motion.div>
  </Col>

  <Col xs={24} sm={12} md={8} lg={8}>
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CountUp
          start={0}
          end={30}
          duration={2}
          suffix="+"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#333",
          }}
        />
        <Paragraph style={{ color: "#777", margin: 0 }}>Clients Served</Paragraph>
      </Card>
    </motion.div>
  </Col>

  <Col xs={24} sm={12} md={8} lg={8}>
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CountUp
          start={0}
          end={12}
          duration={2}
          suffix="+"
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#333",
          }}
        />
        <Paragraph style={{ color: "#777", margin: 0 }}>Awards Won</Paragraph>
      </Card>
    </motion.div>
  </Col>
</Row>


    {/* Call to Action */}
    <section className="testimonials" style={{ backgroundColor: "#f9f9f9", paddingTop: 32,marginTop: "50px" }}>
      <h2 className="testimonial-title" style={{ color: "#007676", fontSize: 28 }}>
        Join Our Award-Winning Team!
      </h2>
      <p style={{
        fontSize: 17,
        color: "#333",
        maxWidth: 650,
        margin: "0 auto 30px auto",
        fontFamily: "'Poppins', sans-serif"
      }}>
        Be part of a company that’s recognized for excellence, innovation, and a people-first culture.
      </p>
      <Link to="/contact">
        <Button type="primary" className="hero-button" style={{ backgroundColor: "#2196F3" }}>
          Join Us
        </Button>
      </Link>
    </section>
  </div>
);

export default Awards;
