import React from 'react';
import { Button, Typography, Tag } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import erp from '../assets/erp.gif';
import ticket from '../assets/ticket.gif';

const { Title, Paragraph } = Typography;

const caseStudies = [
  {
    id: 1,
    title: 'Enterprise Resource Planning System',
    tech: ['Cloud Integration', 'Role-Based Access', 'Mobile Responsiveness'],
    desc: `Our ERP system streamlined business operations by integrating inventory, sales, finance, and HR modules. 
    It reduced manual efforts, ensured real-time data synchronization, and improved reporting accuracy. 
    Key highlights include role-based access control, notification systems, and third-party API integration.`,
    image: erp,
    docLink: '../assets/1.pdf',
  },
  {
    id: 2,
    title: 'Smart Ticket Management System',
    tech: ['SLA Management', 'Multilingual Support', 'Analytics Tools'],
    desc: `This system centralized customer queries and IT ticket tracking. 
    It enabled automatic ticket categorization, priority handling, and SLA management. 
    With advanced dashboards and real-time notifications, managers could allocate tasks effectively. 
    The solution improved customer satisfaction by 35% and reduced response times by 50%.`,
    image: ticket,
    docLink: '../assets/2.pdf',
  },
];

const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: 'easeOut',
    },
  },
});

const CaseStudiesPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const navigate = useNavigate();

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        initial="hidden"
        animate={heroInView ? 'visible' : 'hidden'}
        variants={fadeIn('up')}
      >
        <div
          style={{
            textAlign: 'center',
            padding: '100px 30px',
            background: 'linear-gradient(135deg, #e0f7fa, #ffffff)',
            borderRadius: '20px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            margin: '40px 20px',
          }}
        >
          <motion.div
            animate={{ y: [-10, 10] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          >
            <Title
              level={1}
              style={{
                fontWeight: 700,
                fontSize: '42px',
                color: '#007676',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                marginBottom: '10px',
                marginTop: '-15px',
              }}
            >
              Impactful Solutions, Real Results
            </Title>
          </motion.div>
          <Paragraph
            style={{
              fontSize: 20,
              maxWidth: 800,
              margin: '0 auto',
              color: '#007676',
              lineHeight: '1.6',
              textAlign: 'center',
            }}
          >
            Explore our case studies and discover how we've helped businesses thrive with innovative solutions.
          </Paragraph>
        </div>
      </motion.div>

      {/* Case Studies List */}
      <div style={{ marginTop: 60 }}>
        {caseStudies.map((study, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <motion.div
              key={study.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn(index % 2 === 0 ? 'left' : 'right', index * 0.3)}
              style={{
                display: 'flex',
                flexDirection: imageFirst ? 'row' : 'row-reverse',
                marginBottom: 100,
                alignItems: 'center',
                gap: 100,
                flexWrap: 'wrap',
                border: '1px solid rgba(0, 0, 0, 0.3)',
                borderRadius: 20,
                padding: 20,
              }}
            >
              {/* Image */}
              <motion.img
                src={study.image}
                alt={study.title}
                style={{
                  width: '100%',
                  maxWidth: 500,
                  borderRadius: 20,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  flex: 1,
                  marginBottom: '10px',
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 120 }}
              />

              {/* Text */}
              <motion.div
                style={{ flex: 1, color: '#000' }}
                initial="hidden"
                animate="visible"
                variants={fadeIn('up', 0.5)}
              >
                <h2 style={{ color: '#007676', fontSize: 32, fontWeight: 'bold' }}>
                  {study.title}
                </h2>
                <div style={{ margin: '10px 0' }}>
                  {study.tech.map((tech, idx) => (
                    <Tag key={idx} color="cyan" style={{ marginBottom: 5 }}>
                      {tech}
                    </Tag>
                  ))}
                </div>
                <Paragraph
                  style={{
                    fontSize: 16,
                    color: '#333',
                    lineHeight: '1.7',
                    maxWidth: 500,
                    whiteSpace: 'pre-line',
                    textAlign: 'justify',
                  }}
                >
                  {study.desc}
                </Paragraph>

                <div style={{ marginTop: 20, display: 'flex', gap: 20 }}>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Button
                      style={{ backgroundColor: '#2196F3', color: '#fff', border: 'none' }}
                      size="large"
                      href={study.docLink}
                      target="_blank"
                    >
                      Download PDF
                    </Button>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  >
                    <Button
                      style={{ backgroundColor: '#2196F3', color: '#fff', border: 'none' }}
                      size="large"
                      onClick={() => navigate('/contact')}
                    >
                      Contact Us
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudiesPage;
