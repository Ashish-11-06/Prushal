import { Button, Typography, Tag } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/erp.gif';
import image2 from '../assets/ticket.gif';
import image3 from '../assets/healthSuite.gif';
import image4 from '../assets/chatbot.gif';


const { Title, Paragraph } = Typography;

const projects = [
  {
    id: 1,
    title: 'Simple ERP',
    tech: [ 'Django', 'SQlite','REST API', 'Bootstrap', 'HTML', 'CSS'],
    desc: `A full-featured ERP system developed for Kavya Enterprises to manage their water supply and dry cleaning businesses. 
This platform includes order management, real-time tracking, customer and vendor dashboards, and invoice generation. 
Admins can assign tasks, update orders, and generate monthly analytics reports. 
The backend was built using Django with REST APIs, while the frontend uses React and Redux for state management. 
The platform includes secure authentication, responsive UI, and integration with payment gateways. 
Multiple modules are designed for product management, customer requests, and employee tracking. 
This system has helped the company reduce manual errors and streamline operations effectively. 
It supports both English and regional language preferences for better usability.`,
    image: image1,
  },
  {
    id: 2,
    title: 'Support Ease',
    tech: ['React','Ant Design', 'Spring Boot', 'MySql', 'REST API'],
    desc: `This tool enables the TechTrix support team to create, manage, and assign technical support tickets seamlessly. 
It allows clients to raise tickets via a web portal, which are then tracked by the support team. 
Each ticket includes status updates, priority levels, and assignment logs. 
Admins can oversee all tickets, while users can track the progress of their own. 
The tool also includes a quotation generator for tech services based on the selected modules and client preferences. 
Technologies used include Django for backend with SQLite for easy deployment and React for a snappy frontend UI. 
Axios is used for API communication with built-in loading indicators and toast notifications. 
The tool is now used by over 50+ enterprise clients and supports email notifications and SLA tracking.`,
    image: image2,
  },
    {
      id: 3,
      title: 'Health Suite',
      tech: ['React', 'Django', 'SQlite', 'Ant Design', 'Redux', 'Rest API',  ],
      desc: `A comprehensive medical coding platform that enables healthcare professionals to search, add, and manage medical codes with their descriptions and sub-descriptions. 
  Users can like/dislike codes to indicate usefulness and edit code descriptions with version history tracking. 
  The system includes an advanced search functionality with filters for code types, categories, and popularity. 
  A unique assessment module allows patients to take various personality tests and receive detailed analyses. 
  The backend uses Django  for efficient data queries, while React and Ant Design provide a clean, accessible interface. 
  All code changes are logged with complete history for audit purposes. 
  The platform supports role-based access control for different types of medical professionals and includes data export capabilities for reporting.`,
      image: image3,
    },
    {
      id: 4,
      title: 'Infi - Chatbot Solutions',
      tech: [ 'Django', 'SQLite', 'REST API', 'NLP', 'Transformer Models', 'WebSockets'],
      desc: `A hybrid chatbot solution combining rule-based systems with LLM capabilities for enterprise use. 
  The platform offers both text and voice-based interactions with company-specific knowledge bases. 
  Rule-based components handle structured workflows while the LLM (GPT-3.5/4) manages open-ended conversations. 
  Features include sentiment analysis, conversation history, and seamless handoff between rule-based and AI modes. 
  The system integrates with company databases to provide personalized responses and can be trained on domain-specific documents. 
  Includes analytics dashboard showing conversation metrics, user satisfaction, and common query patterns. 
  Deployed with Django backend and WebSockets for real-time communication, supporting both web and mobile interfaces. 
  Particularly effective for customer support, IT helpdesk, and internal knowledge management applications.`,
      image: image4,
    }
  
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

const ProductsPage = () => {
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
              Transforming Ideas into Scalable Solutions
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
            Empowering enterprises with custom web applications tailored for real-world impact.
          </Paragraph>
        </div>
      </motion.div>

      {/* Projects List */}
      <div style={{ marginTop: 60 }}>
        {projects.map((project, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <motion.div
              key={project.id}
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
                src={project.image}
                alt={project.title}
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
                  {project.title}
                </h2>
                <div style={{ margin: '10px 0' }}>
                  {project.tech.map((tech, idx) => (
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
                  {project.desc}
                </Paragraph>

                <div style={{ marginTop: 20, display: 'flex', gap: 20 }}>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Button
                      style={{ backgroundColor: '#2196F3', color: '#fff', border: 'none' }}
                      size="large"
                    >
                      View Demo
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

export default ProductsPage;
