import React from 'react';
import { Form, Input, Button, Typography, notification, Row, Col, Divider } from 'antd';
import {
  FacebookOutlined,
  //  TwitterOutlined, 
  InstagramOutlined, LinkedinOutlined, YoutubeOutlined
} from '@ant-design/icons';
import './ContactUs.css'; // Ensure this path is correct

const { Title, Paragraph } = Typography;

const ContactUs = () => {
  // Form submit handler
  const onFinish = (values) => {
    console.log('Form Values:', values);
    notification.success({
      message: 'Thank You!',
      description: 'Your message has been sent successfully.',
    });
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-form-container">
        <Title level={2} className="contact-us-title">Contact Us</Title>
        <Paragraph className="contact-us-paragraph">
          We'd love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
        </Paragraph>

        <Row gutter={40}>
          {/* Right Column: Social Media, Quick Links, Contact Email, and Address */}
          <Col xs={40} md={24}>
            <div className="social-media-section">
              {/* Company Address Section */}
              <section className='company-info'>
                <div className="company-address-section">
                  <Title level={4}>Our Address</Title>
                  <Divider className="contact-us-divider" />
                  <Paragraph>
                    <strong>Prushal Technology Pvt. Ltd.</strong><br />
                    Flat No: 401, Vrindavan<br />
                    Society, near Samindradevi<br />
                    Market, Baif Road, Wagholi,<br />
                    Pune, MH – 412207
                  </Paragraph>
                </div>

                <div class="contact-container">
                  <Title level={4}>Contact</Title>
                  <Divider className="contact-us-divider" />
                  <div class="contact-item">
                    <i class="fas fa-phone-alt"></i>
                    <a href="tel:+919850113269"> (+91) 9850113269</a>
                  </div>
                  <div class="contact-item">
                    <i class="fas fa-phone-alt"></i>
                    <a href="tel:+919850603269"> (+91) 9850603269</a>
                  </div>
                  <div class="contact-item">
                    <i class="fas fa-phone-alt"></i>
                    <a href="tel:+919850803269"> (+91) 9850803269</a>
                  </div>
                  <div class="contact-item">
                    <i class="fas fa-phone-alt"></i>
                    <a href="tel:+919762203269"> (+91) 9762203269</a>
                  </div>
                </div>
              </section>

              <Divider className="divider2" />

              {/* Contact Email */}
              <Paragraph>
                For inquiries, you can reach us directly at:
                <a href="mailto:info@prushal.com" className="contact-us-email"> info@prushal.com</a>
              </Paragraph>

              <Row gutter={20} className="social-media-buttons">
                <Col>
                  <a href="https://www.facebook.com/prushal" target="_blank" rel="noopener noreferrer" className="social-media-link">
                    <Button
                      type="link"
                      icon={<FacebookOutlined style={{ fontSize: '24px' }} />}
                    />
                  </a>
                </Col>
                <Col>
                  <a href="https://www.instagram.com/prushaltech/" target="_blank" rel="noopener noreferrer" className="social-media-link">
                    <Button
                      type="link"
                      icon={<InstagramOutlined style={{ fontSize: '24px' }} />}
                    />
                  </a>
                </Col>
                <Col>
                  <a href="https://www.linkedin.com/company/prushal-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="social-media-link">
                    <Button
                      type="link"
                      icon={<LinkedinOutlined style={{ fontSize: '24px' }} />}
                    />
                  </a>
                </Col>
                <Col>
                  <a href="https://www.youtube.com/channel/UCPrushal" target="_blank" rel="noopener noreferrer" className="social-media-link">
                    <Button
                      type="link"
                      icon={<YoutubeOutlined style={{ fontSize: '24px', color: 'blue' }} />}
                    />
                  </a>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;
