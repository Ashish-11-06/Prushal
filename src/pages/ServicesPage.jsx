import React from 'react';
import { Row, Col, Card, Typography, Divider } from 'antd';
import { 
  CrownOutlined as BrandOutlined,
  SketchOutlined as DesignOutlined,
  ThunderboltOutlined as BulbOutlined,
  RiseOutlined as LineChartOutlined,
  CodeOutlined,
  CustomerServiceOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const servicesData = [
  {
    title: "Brand Strategy",
    description: "Develop a comprehensive brand strategy that aligns with your business goals and resonates with your target audience.",
    icon: <BrandOutlined style={{ fontSize: '40px', color: '#1890ff' }} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Logo & Visual Identity",
    description: "Create memorable logos and visual identities that capture your brand's essence and make a lasting impression.",
    icon: <DesignOutlined style={{ fontSize: '40px', color: '#1890ff' }} />,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Brand Messaging",
    description: "Craft compelling brand stories and messaging frameworks that communicate your unique value proposition.",
    icon: <BulbOutlined style={{ fontSize: '40px', color: '#1890ff' }} />,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Digital Branding",
    description: "Extend your brand presence across digital platforms with consistent and engaging experiences.",
    icon: <CodeOutlined style={{ fontSize: '40px', color: '#1890ff' }} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Brand Positioning",
    description: "Establish a distinctive position in your market that sets you apart from competitors.",
    icon: <LineChartOutlined style={{ fontSize: '40px', color: '#1890ff' }} />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    title: "Brand Management",
    description: "Ongoing support to maintain brand consistency and adapt to changing market conditions.",
    icon: <CustomerServiceOutlined style={{ fontSize: '40px', color: '#1890ff' }} />,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

const ServicesPage = () => {
  return (
    <div style={{ padding: '40px 0', backgroundColor: '#f9f9f9' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Title level={2}>Our Branding Services</Title>
          <Paragraph style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px' }}>
            We offer comprehensive branding solutions to help your business stand out in a crowded marketplace. 
            Our services are designed to create meaningful connections with your audience and drive long-term growth.
          </Paragraph>
        </div>

        <Divider />

        <Row gutter={[24, 24]} justify="center">
          {servicesData.map((service, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                cover={<img alt={service.title} src={service.image} height="160px" style={{ objectFit: 'cover' }} />}
                style={{ borderRadius: '8px', height: '100%' }}
                bodyStyle={{ padding: '20px' }}
              >
                <div style={{ textAlign: 'center', marginBottom: '16px' }}>
                  {service.icon}
                </div>
                <Title level={4} style={{ textAlign: 'center' }}>{service.title}</Title>
                <Paragraph style={{ textAlign: 'center' }}>{service.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        <Divider />

        <div style={{ textAlign: 'center', marginTop: '40px', padding: '40px', backgroundColor: '#fff', borderRadius: '8px' }}>
          <Title level={3}>Custom Branding Solutions</Title>
          <Paragraph style={{ maxWidth: '800px', margin: '20px auto', fontSize: '16px' }}>
            Every business is unique. We tailor our branding services to your specific needs, 
            ensuring you get a solution that perfectly fits your vision and goals.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;