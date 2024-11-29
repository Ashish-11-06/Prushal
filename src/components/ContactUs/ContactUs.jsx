import React from 'react';
import { Form, Input, Button, Typography, notification, Row, Col, Divider } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
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
          {/* Left Column: Form */}
          <Col xs={24} md={12}>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
                <Input placeholder="Enter your full name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}
              >
                <Input placeholder="Enter your email address" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: 'Please enter your message!' }]}
              >
                <Input.TextArea rows={4} placeholder="Enter your message" />
              </Form.Item>

              <Form.Item style={{ textAlign: 'center' }}>
                <Button type="primary" htmlType="submit" size="large">
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>

          {/* Right Column: Social Media and Creative Content */}
          <Col xs={24} md={12}>
            <div className="social-media-section">
              <Title level={4}>Follow Us</Title>
              <Divider className="contact-us-divider" />
              <Row gutter={16} className="social-media-buttons">
                <Col>
                  <Button
                    type="link"
                    icon={<FacebookOutlined />}
                    href="https://www.facebook.com"
                    target="_blank"
                  />
                </Col>
                <Col>
                  <Button
                    type="link"
                    icon={<TwitterOutlined />}
                    href="https://www.twitter.com"
                    target="_blank"
                  />
                </Col>
                <Col>
                  <Button
                    type="link"
                    icon={<InstagramOutlined />}
                    href="https://www.instagram.com"
                    target="_blank"
                  />
                </Col>
                <Col>
                  <Button
                    type="link"
                    icon={<LinkedinOutlined />}
                    href="https://www.linkedin.com"
                    target="_blank"
                  />
                </Col>
              </Row>
              <Divider className="contact-us-divider" />
              <Paragraph>
                For any inquiries, you can also reach us directly via email at <span className="contact-us-email">support@yourdomain.com</span>.
              </Paragraph>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;
