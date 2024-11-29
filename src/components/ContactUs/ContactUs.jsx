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
                label="Phone"
                name="num"
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

          {/* Right Column: Social Media, Quick Links, Contact Email, and Address */}
          <Col xs={24} md={12}>
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
      <span> (+91) 9850113269</span>
    </div>
    <div class="contact-item">
      <i class="fas fa-phone-alt"></i>
      <span> (+91) 9850603269</span>
    </div>
    <div class="contact-item">
      <i class="fas fa-phone-alt"></i>
      <span> (+91) 9850803269</span>
    </div>
    <div class="contact-item">
      <i class="fas fa-phone-alt"></i>
      <span> (+91) 9762203269</span>
    </div>
  </div>

                  </section>
                

              <Divider className="divider2" />


              {/* Contact Email */}
              <Paragraph>
                For inquiries, you can reach us directly at:
                <a href="mailto:info@prushal.com" className="contact-us-email"> info@prushal.com</a>
              

<Row gutter={20} className="social-media-buttons">
  <Col>
    <Button
      type="link"
      icon={<FacebookOutlined style={{ fontSize: '24px' }} />}
      href="https://www.facebook.com"
      target="_blank"
    />
  </Col>
  <Col>
    <Button
      type="link"
      icon={<TwitterOutlined style={{ fontSize: '24px' }} />}
      href="https://www.twitter.com"
      target="_blank"
    />
  </Col>
  <Col>
    <Button
      type="link"
      icon={<InstagramOutlined style={{ fontSize: '24px' }} />}
      href="https://www.instagram.com"
      target="_blank"
    />
  </Col>
  <Col>
    <Button
      type="link"
      icon={<LinkedinOutlined style={{ fontSize: '24px' }} />}
      href="https://www.linkedin.com"
      target="_blank"
    />
  </Col>
</Row>


              </Paragraph>
            </div>

          </Col>

        </Row>
      </div>
    </div>
  );
};

export default ContactUs;
