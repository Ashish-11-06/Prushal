import React from 'react';
import { Form, Input, Button, Typography, notification } from 'antd';

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
    <div style={{ padding: '30px', backgroundColor: '#f0f2f5' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <Title level={2} style={{ textAlign: 'center' }}>Contact Us</Title>
        <Paragraph style={{ textAlign: 'center', marginBottom: '30px' }}>
          We'd love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
        </Paragraph>
        <Form
          layout="vertical"
          onFinish={onFinish}
        >
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
      </div>
    </div>
  );
};

export default ContactUs;
