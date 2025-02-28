

import React from 'react';
import { Form, Input, Button, Typography, notification, Row, Col, Divider, Card, message } from 'antd';
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import './ContactUs.css'; // Ensure this path is correct
import ContactApi from '../../Redux/APIs/Contact';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactUs = () => {
  const onFinish = async (values) => {
    try {
      const response = await ContactApi.sendMessage(values);
      message.success(response.data.message);
    } catch (error) {
      // console.log(error);
      message.error(error.response.data.error || 'Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-form-container">
        <Title level={2} className="contact-us-title">Contact Us</Title>
        <Paragraph className="contact-us-paragraph">
          We'd love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
        </Paragraph>

        <Row gutter={40}>
          {/* Left Column: Contact Form */}
          <Col xs={24} md={12}>
            <Card className="contact-form-card">
              <Form onFinish={onFinish} layout="vertical">
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>

                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email address!' }, // Email validation
                      ]}
                    >
                      <Input placeholder="Enter your email" />
                    </Form.Item>
                  </Col>

                  <Col span={12}>
                    <Form.Item
                      label="Contact No."
                      name="mobile"
                      rules={[
                        { required: true, message: 'Please input your contact number!' },
                        { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit contact number!' }, // Number validation
                      ]}
                    >
                      <Input placeholder="Enter your contact number" maxLength={10} />
                    </Form.Item>

                  </Col>
                </Row>

                <Form.Item
                  label="Message"
                  name="message"
                  rules={[{ required: true, message: 'Please input your message!' }]}
                >
                  <TextArea rows={4} placeholder="Enter your message" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          {/* Right Column: Social Media, Quick Links, Contact Email, and Address */}
          <Col xs={24} md={12}>
            <Card className="contact-info-card">
              <div className="social-media-section">
                {/* Company Address Section */}
                <section className='company-info'>
                  <div className="company-address-section">
                    <Title level={4}><EnvironmentOutlined /> Our Address</Title>
                    <Divider className="contact-us-divider" />
                    <Paragraph>
                      <strong>Prushal Technology Pvt. Ltd.</strong><br />
                      Flat No: 401, Vrindavan<br />
                      Society, near Samindradevi<br />
                      Market, Baif Road, Wagholi,<br />
                      Pune, MH – 412207
                    </Paragraph>
                  </div>

                  <div className="contact-container">
                    <Title level={4}><PhoneOutlined /> Contact</Title>
                    <Divider className="contact-us-divider" />
                    <div className="contact-item">
                      <a href="tel:+919850113269"> (+91) 9850113269</a>
                    </div>
                    <div className="contact-item">
                      <a href="tel:+919850603269"> (+91) 9850603269</a>
                    </div>
                    <div className="contact-item">
                      <a href="tel:+919850803269"> (+91) 9850803269</a>
                    </div>
                    <div className="contact-item">
                      <a href="tel:+919762203269"> (+91) 9762203269</a>
                    </div>
                  </div>
                </section>

                <Divider className="divider2" />

                {/* Contact Email */}
                <Paragraph>
                  <MailOutlined /> For inquiries, you can reach us directly at:
                  <a href="mailto:info@prushal.com" className="contact-us-email"> info@prushal.com</a>
                </Paragraph>

                <Row gutter={20} className="social-media-buttons">
                  <Col>
                    <a href="https://www.facebook.com/prushal" target="_blank" rel="noopener noreferrer" className="social-media-link">
                      <Button
                        type="link"
                        icon={<FacebookOutlined style={{ fontSize: '24px', color: '#3b5998' }} />}
                      />
                    </a>
                  </Col>
                  <Col>
                    <a href="https://www.instagram.com/prushaltech/" target="_blank" rel="noopener noreferrer" className="social-media-link">
                      <Button
                        type="link"
                        icon={<InstagramOutlined style={{ fontSize: '24px', color: '#e4405f' }} />}
                      />
                    </a>
                  </Col>
                  <Col>
                    <a href="https://www.linkedin.com/company/prushal-technology-pvt-ltd/" target="_blank" rel="noopener noreferrer" className="social-media-link">
                      <Button
                        type="link"
                        icon={<LinkedinOutlined style={{ fontSize: '24px', color: '#0077b5' }} />}
                      />
                    </a>
                  </Col>
                  <Col>
                    <a href="https://www.youtube.com/@prushaltechnology8846" target="_blank" rel="noopener noreferrer" className="social-media-link">
                      <Button
                        type="link"
                        icon={<YoutubeOutlined style={{ fontSize: '24px', color: '#ff0000' }} />}
                      />
                    </a>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;