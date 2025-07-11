// src/components/ProductDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Card } from 'antd';
import {
  EyeOutlined,
  FileTextOutlined,
  PhoneOutlined,
} from '@ant-design/icons';

import productData from './productData';
import './ProductDetail.css';

const allowedDemoIds = [
  "green-energy-portal",
  "health-suite",
  "infi-chatbot-solutions",
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData.find((p) => p.id === id);

  if (!product) {
    return <div className="simpleerp-container">Product not found.</div>;
  }

  return (
    <div className="simpleerp-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-left">
          <h1 className="hero-title">{product.title}</h1>
          <p className="hero-subtitle">{product.subtitle}</p>
          <div className="hero-buttons">
  {allowedDemoIds.includes(product.id) && (
    <a
      href={product.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="hero-btn"
    >
      <EyeOutlined /> Get a Demo
    </a>
  )}

  {/* Uncomment if you want the document link visible for all */}
  {/* <a
    href={product.docUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="hero-btn"
  >
    <FileTextOutlined /> Document
  </a> */}

  <button className="hero-btn" onClick={() => navigate('/contact')}>
    <PhoneOutlined /> Contact Us
  </button>
</div>
        </div>
        <div className="hero-right">
          <img src={product.image} alt={product.title} className="hero-image" />
        </div>
      </div>

      {/* About Section */}
      <section className="about-section animate__animated animate__fadeInUp">
        <h2>About Project</h2>
        <div className="about-content">
          {product.about.map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack-section animate__animated animate__fadeInUp">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          {product.techStack.map((tech, index) => (
            <div className="tech-card" key={index}>
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="animate__animated animate__fadeInDown">Testimonials</h2>
        <Row gutter={[24, 24]} justify="center">
          {product.testimonials.map((testimonial, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card className="testimonial-card animate__animated animate__fadeInUp">
                <div className="testimonial-content">
                  <p className="testimonial-text">{testimonial.content}</p>
                  <p className="testimonial-author">{testimonial.author}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default ProductDetail;
