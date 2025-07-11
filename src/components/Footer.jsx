import React from 'react';
import { Row, Col, Button } from 'antd';
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from '@ant-design/icons';
import './Footer.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="footer-container">
      <Row gutter={[32, 16]} justify="center">
        <Col xs={24} sm={12} md={6}>
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-list">
            <li><a href="/services">Web Development</a></li>
            <li><a href="/services">AI and Machine Learning</a></li>
            <li><a href="/services">Data Analytics</a></li>
            <li><a href="/services">Brand Management</a></li>
            <li><a href="/services">Digital Transformation</a></li>
          </ul>

          <h4 className="footer-heading">Capabilities</h4>
          <ul className="footer-list">
            <li>Data Engineering</li>
            <li>AI & ML</li>
            <li>BI and Analytics</li>
            <li>Digital & UI/UX</li>
            <li>Automation & Digital Transformation</li>
          </ul>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <h4 className="footer-heading">Industries</h4>
          <ul className="footer-list">
            <li>Banking</li>
            <li>Healthcare</li>
            <li>Education</li>
            <li>Manufacturing</li>
            <li>Finance</li>
            <li>FMCG</li>
            <li>Energy</li>
            <li>E-commerce</li>
          </ul>
        </Col>

        <Col xs={24} sm={12} md={6}>
          <h4 className="footer-heading">Insights</h4>
          <ul className="footer-list">
            <li><a href="/success-stories">Success Stories</a></li>
            <li><a href="/culture">Culture</a></li>
          </ul>

          <h4 className="footer-heading">Company</h4>
          <ul className="footer-list">
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>

          <h4 className="footer-heading">Resources</h4>
          <ul className="footer-list">
            <li><a href="/resources">Company Information</a></li>
            <li><a href="/resources">Product Manuals</a></li>
            <li><a href="/resources">Decks</a></li>
            <li><a href="/resources">Templates & Tools</a></li>
          </ul>
        </Col>
      </Row>

      <div className="footer-social">
  <a href="https://www.facebook.com/prushal" target="_blank" rel="noopener noreferrer">
    <div className="icon-circle" style={{ backgroundColor: '#FFFFFF' }}>
      <FacebookFilled style={{ fontSize: '20px', color: '#3b5998' }} />
    </div>
  </a>
  <a href="https://www.instagram.com/prushaltech/" target="_blank" rel="noopener noreferrer">
    <div className="icon-circle" style={{ backgroundColor: '#FFFFFF' }}>
      <InstagramFilled style={{ fontSize: '20px', color: '#e4405f' }} />
    </div>
  </a>
  <a href="https://www.linkedin.com/company/prushal-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer">
    <div className="icon-circle" style={{ backgroundColor: '#FFFFFF' }}>
      <LinkedinFilled style={{ fontSize: '20px', color: '#0077b5' }} />
    </div>
  </a>
  <a href="https://www.youtube.com/@prushaltechnology8846" target="_blank" rel="noopener noreferrer">
    <div className="icon-circle" style={{ backgroundColor: '#FFFFFF' }}>
      <YoutubeFilled style={{ fontSize: '20px', color: '#FF0000' }} />
    </div>
  </a>
</div>



      <div className="footer-bottom">
        <p>©2017–{currentYear} Prushal Technology Pvt Ltd. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
