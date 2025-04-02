import React from 'react';
import { Row, Col, Card, Typography, Divider, Tag, Avatar } from 'antd';
import { 
  CalendarOutlined,
  TeamOutlined,
  TrophyOutlined,
  GlobalOutlined,
  BookOutlined,
  StarOutlined
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

// Sample data for events
const eventsData = [
  {
    id: 1,
    title: "Annual Branding Conference 2023",
    date: "October 15, 2023",
    location: "New York, NY",
    description: "Join us for our flagship event where industry leaders discuss the future of branding in the digital age.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Conference",
    attendees: 250
  },
  {
    id: 2,
    title: "Brand Workshop Series",
    date: "November 5-7, 2023",
    location: "Online",
    description: "Interactive workshops to help businesses develop their brand identity and strategy.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Workshop",
    attendees: 120
  },
  {
    id: 3,
    title: "10 Year Anniversary Celebration",
    date: "December 12, 2023",
    location: "Company HQ",
    description: "Celebrating a decade of transforming brands and creating meaningful connections.",
    image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Celebration",
    attendees: 80
  }
];

// Sample data for stories
const storiesData = [
  {
    id: 1,
    title: "How We Helped XYZ Corp Rebrand Successfully",
    date: "September 28, 2023",
    author: "Jane Smith",
    authorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "A case study on transforming a traditional business into a modern brand while maintaining its core values.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Case Study",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Evolution of Branding in the Digital Age",
    date: "August 15, 2023",
    author: "Michael Johnson",
    authorAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "Exploring how digital transformation has changed the way brands connect with their audiences.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Industry Insights",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Meet Our Team: Behind the Scenes of Creative Branding",
    date: "July 5, 2023",
    author: "Sarah Williams",
    authorAvatar: "https://randomuser.me/api/portraits/women/63.jpg",
    description: "A glimpse into our creative process and the people who make our branding magic happen.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Team Spotlight",
    readTime: "6 min read"
  }
];

const EventsAndStoriesPage = () => {
  return (
    <div style={{ padding: '40px 0', backgroundColor: '#f9f9f9' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Events Section */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <Title level={2}>Company Events</Title>
          <Paragraph style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px' }}>
            Join us at our upcoming events and workshops designed to inspire and educate about branding.
          </Paragraph>
        </div>

        <Row gutter={[24, 24]} justify="center">
          {eventsData.map((event) => (
            <Col xs={24} sm={12} lg={8} key={event.id}>
              <Card
                hoverable
                cover={<img alt={event.title} src={event.image} height="200px" style={{ objectFit: 'cover' }} />}
                style={{ borderRadius: '8px', height: '100%' }}
                bodyStyle={{ padding: '20px' }}
              >
                <div style={{ marginBottom: '12px' }}>
                  <Tag icon={<CalendarOutlined />} color="blue">{event.date}</Tag>
                  <Tag icon={<GlobalOutlined />} color="geekblue">{event.location}</Tag>
                </div>
                <Title level={4}>{event.title}</Title>
                <Paragraph>{event.description}</Paragraph>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                  <Tag icon={<TeamOutlined />}>{event.attendees}+ attendees</Tag>
                  <Tag icon={<TrophyOutlined />}>{event.category}</Tag>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <Divider />
      </div>
    </div>
  );
};

export default EventsAndStoriesPage;