import React, { useState, useEffect } from 'react';
import {
  Card,
  Row,
  Col,
  Input,
  Tabs,
  Tag,
  Button,
  Skeleton,
  Empty,
} from 'antd';
import {
  FilePdfOutlined,
  VideoCameraOutlined,
  ToolOutlined,
  BookOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import './Resources.css'; // Create this CSS file for custom styles

const { TabPane } = Tabs;
const { Search } = Input;

const resourceData = [
  {
    id: 1,
    title: 'Data and Analytics Deck',
    description: 'Comprehensive guide.',
    type: 'PDF',
    category: 'Company Information Decks',
    icon: <FilePdfOutlined />,
    url: '/assets/resources/Deck1.pdf',
  },
  {
    id: 2,
    title: 'PrushalTech Deck',
    description: 'Comprehensive guide.',
    type: 'PDF',
    category: 'Company Information Decks',
    icon: <FilePdfOutlined />,
    url: '/assets/resources/Deck2.pdf',
  },
  {
    id: 3,
    title: 'Pharma Capabilities Powered by AIML and Software Innovation',
    description: 'Comprehensive guide.',
    type: 'PDF',
    category: 'Company Information Decks',
    icon: <FilePdfOutlined />,
    url: '/assets/resources/Deck3.pdf',
  },
  {
    id: 4,
    title: 'Getting Started with SDK',
    description: 'Use our SDK to build integrations.',
    type: 'Tool',
    category: 'Product Manuals',
    icon: <ToolOutlined />,
  },
  {
    id: 5,
    title: 'Workshop Recording - AI and Robotics',
    description: 'Full video of AI and Robotics workshop.',
    type: 'Video',
    category: 'Videos & Recordings',
    icon: <VideoCameraOutlined />,
  },
  {
    id: 6,
    title: 'Big Data tools and Guide',
    description: 'Topics and resources to prepare for frontend interviews.',
    type: 'Guide',
    category: 'Templates & Tools',
    icon: <BookOutlined />,
  },
];

const categoryOptions = [
  'All',
  'Company Information Decks',
  'Product Manuals',
  'Videos & Recordings',
  'Templates & Tools',
];

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    setTimeout(() => {
      setResources(resourceData);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredResources = resources.filter((res) => {
    const matchesCategory =
      activeCategory === 'All' || res.category === activeCategory;
    const matchesSearch = res.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="resources-container">
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
<motion.div
  animate={{ y: [-10, 10] }}
  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
>
  <h1 style={{ margin: 0 }}>Explore Our Resources</h1>
</motion.div>        <p>Browse documents, templates, guides, and more</p>
        <Search
          placeholder="Search resources..."
          enterButton
          onSearch={(val) => setSearchTerm(val)}
          size="large"
          style={{ maxWidth: 500 }}
        />
      </motion.div>

      <Tabs
        defaultActiveKey="All"
        onChange={(key) => setActiveCategory(key)}
        className="category-tabs"
      >
        {categoryOptions.map((cat) => (
          <TabPane tab={cat} key={cat} />
        ))}
      </Tabs>

      <Row gutter={[16, 16]} className="resource-grid">
        {loading ? (
          Array.from({ length: 4 }).map((_, idx) => (
            <Col xs={24} sm={12} md={8} lg={6} key={idx}>
              <Skeleton active />
            </Col>
          ))
        ) : filteredResources.length > 0 ? (
          filteredResources.map((item) => (
            <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
              <motion.div
                className="resource-card-wrapper"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  hoverable
                  title={<span className="card-icon">{item.icon}</span>}
                  className="resource-card"
                >
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Tag color="blue">{item.type}</Tag>
                  <Button
  type="primary"
  block
  href={item.url}
  target="_blank"
  download
>
  View Resource
</Button>

                </Card>
              </motion.div>
            </Col>
          ))
        ) : (
          <Col span={24} style={{ textAlign: 'center' }}>
            <Empty description="No resources found." />
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Resources;
