import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Typography, Tag, Avatar, Pagination } from 'antd';
import styled from 'styled-components';
import card1Img from '../assets/1.png';
import card2Img from '../assets/card2.jpg';
import card3Img from '../assets/2.png';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

import './NewsPage.css'; // General styles - create this file

const { Title, Paragraph } = Typography;

// Styled Components for enhanced styling
const CardWrapper = styled(Card)`
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }
  .ant-card-cover {
    overflow: hidden;
    img {
      transition: transform 0.4s ease;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;

const BlogTitle = styled(Title)`
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #1890ff;
  }
`;

const CategoryTag = styled(Tag)`
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 0.7rem;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #bae7ff;
  }
`;

const articlesData = [
    {
        id: 1,
        imageUrl: card1Img,
        category: 'Tech',
        title: 'Hackathon',
        excerpt:
          'Explore how artificial intelligence is revolutionizing web development practices and creating new opportunities for developers.',
        author: 'John Doe',
        authorAvatar: 'https://joeschmoe.io/api/v1/random',
        date: '2024-04-05',
        content:
          'Detailed content about the future of AI. This would be a long article. Imagine lots of text here. And code examples: `console.log("Hello World")`',
      },
      {
        id: 2,
        imageUrl: card2Img,
        category: 'Travel',
        title: 'Top 10 Destinations for Solo Travelers',
        excerpt:
          'Discover the best and safest places around the world for solo adventurers seeking unforgettable experiences.',
        author: 'Jane Smith',
        authorAvatar: 'https://joeschmoe.io/api/v1/random',
        date: '2024-04-01',
        content:
          'Detailed content about solo travel. This would be a long article. Imagine lots of text here. And beautiful photos.',
      },
      {
        id: 3,
        imageUrl: card3Img,
        category: 'Food',
        title: 'Healthy Eating Habits for a Productive Life',
        excerpt:
          'Learn how to incorporate nutritious foods into your daily diet to boost your energy and enhance overall productivity.',
        author: 'Mike Johnson',
        authorAvatar: 'https://joeschmoe.io/api/v1/random',
        date: '2024-03-25',
        content:
          'Detailed content about healthy eating. This would be a long article. Imagine lots of text here. And recipes.',
      },
      
      {
        id: 4,
        imageUrl: card3Img,
        category: 'Food',
        title: 'Healthy Eating Habits for a Productive Life',
        excerpt:
          'Learn how to incorporate nutritious foods into your daily diet to boost your energy and enhance overall productivity.',
        author: 'Mike Johnson',
        authorAvatar: 'https://joeschmoe.io/api/v1/random',
        date: '2024-03-25',
        content:
          'Detailed content about healthy eating. This would be a long article. Imagine lots of text here. And recipes.',
      },

      {
        id: 5,
        imageUrl: card3Img,
        category: 'Food',
        title: 'Healthy Eating Habits for a Productive Life',
        excerpt:
          'Learn how to incorporate nutritious foods into your daily diet to boost your energy and enhance overall productivity.',
        author: 'Mike Johnson',
        authorAvatar: 'https://joeschmoe.io/api/v1/random',
        date: '2024-03-25',
        content:
          'Detailed content about healthy eating. This would be a long article. Imagine lots of text here. And recipes.',
      },

      {
        id: 2,
        imageUrl: card2Img,
        category: 'Travel',
        title: 'Top 10 Destinations for Solo Travelers',
        excerpt:
          'Discover the best and safest places around the world for solo adventurers seeking unforgettable experiences.',
        author: 'Jane Smith',
        authorAvatar: 'https://joeschmoe.io/api/v1/random',
        date: '2024-04-01',
        content:
          'Detailed content about solo travel. This would be a long article. Imagine lots of text here. And beautiful photos.',
      },

      {
        id: 2,
        imageUrl: card2Img,
        category: 'Travel',
        title: 'Top 10 Destinations for Solo Travelers',
        excerpt:
          'Discover the best and safest places around the world for solo adventurers seeking unforgettable experiences.',
        author: 'Jane Smith',
        authorAvatar: 'https://joeschmoe.io/api/v1/random',
        date: '2024-04-01',
        content:
          'Detailed content about solo travel. This would be a long article. Imagine lots of text here. And beautiful photos.',
      },






];

const NewsPage = () => {
  const [articles, setArticles] = useState(articlesData);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(9);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ padding: '20px' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: '20px' }}>
        Latest News & Blogs
      </Title>

      <Row gutter={[24, 24]}>
        {currentArticles.map((article) => (
          <Col xs={24} sm={12} md={8} key={article.id}>
            <CardWrapper
              cover={
                <img
                  alt={article.title}
                  src={article.imageUrl}
                  style={{ height: 180, objectFit: 'cover' }}
                />
              }
            >
              <div className="card-content">
                <CategoryTag>{article.category}</CategoryTag>
                <BlogTitle level={4}>{article.title}</BlogTitle>
                <Paragraph ellipsis={{ rows: 2 }}>{article.excerpt}</Paragraph>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '10px',
                  }}
                >
                  <Avatar size="small" src={article.authorAvatar} />
                  <span style={{ marginLeft: '8px', fontSize: '0.8rem' }}>
                    {article.author} - {article.date}
                  </span>
                </div>
              </div>
            </CardWrapper>
          </Col>
        ))}
      </Row>

      <Pagination
        current={currentPage}
        onChange={paginate}
        total={articles.length}
        pageSize={articlesPerPage}
        style={{ textAlign: 'center', marginTop: '30px' }}
      />
    </div>
    
  );
};

export default NewsPage;
