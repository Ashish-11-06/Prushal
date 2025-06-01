import React from 'react';
import { Form, Input, Button, Typography, notification, Row, Col, Divider, Card, message } from 'antd';
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
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
    <div>
      <div className="contact-us-form-container">
        <Title level={2} className="contact-us-title">Contact Us</Title>
        <Paragraph className="contact-us-paragraph">
          We'd love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
        </Paragraph>

        <Row gutter={40}>
          {/* Left Column: Contact Form */}
          <Col xs={24} md={12} style={{marginTop: '10px'}}>
<Card
  className="contact-form-card"
  style={{ height: '100%', border: '1px solid #1296db ' }}
>
              <Form onFinish={onFinish} layout="vertical" >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[{ required: true, message: 'Please input your name!' }]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>

                <Row gutter={16}>
                  <Col span={12} >
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
          <Col xs={24} md={12} style={{marginTop: '10px'}}>
<Card
  className="contact-info-card"
  style={{ height: '100%', border: '1px solid #1296db' }}
>
              <div className="social-media-section">
                {/* Company Address Section */}
                <Row gutter={20} style={{marginTop: '24px',height:'256px'}}>
                  <Col span={8} style={{ height: '100%' }}>
                    <div className="company-address-section" style={{ height: '100%' }}>
                      <Title level={4}><EnvironmentOutlined /> Our Address</Title>
                      <Divider className="contact-us-divider" />
                      <Paragraph style={{ marginBottom: 0, color: 'black' }}>
                        <strong>Prushal Technology Pvt. Ltd.</strong><br />
                        Flat No: 401, Vrindavan<br />
                        Society, near Samindradevi<br />
                        Market, Baif Road, Wagholi,<br />
                        Pune, MH – 412207
                      </Paragraph>
                    </div>
                  </Col>

                  <Col span={8} style={{ height: '100%' }}>
                    <div className="contact-container" style={{ height: '100%' }}>
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
                  </Col>

                  <Col span={8} style={{ height: '100%' ,marginTop: '15px'}}>
                    <div className="map-section" style={{ height: '100%' }}>
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d682.6188161467643!2d73.98006358889943!3d18.574471260457578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3fbd4314181%3A0x8dd7d41e1bdef971!2sSachin%20Wanis%20house!5e1!3m2!1sen!2sin!4v1743762710000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                      ></iframe>
                    </div>
                  </Col>
                </Row>

                <Divider className="divider2" />

                {/* Contact Email */}
                <Paragraph style={{ marginBottom: 0, color: 'black' }}>
                  <MailOutlined /> For inquiries, you can reach us directly at:
                  <a href="mailto:info@prushal.com" className="contact-us-email"> info@prushal.com</a>
                </Paragraph>
                </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;