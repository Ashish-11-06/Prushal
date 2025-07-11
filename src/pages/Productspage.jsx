import { Button, Typography, Tag } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import image from '../assets/erp.gif';
import image2 from '../assets/ticket.gif';
import image3 from '../assets/product_images/healthSuite.gif';
import image4 from '../assets/product_images/chatbot.gif';



const { Title, Paragraph } = Typography;

const projects = [
  
  {
    id: 'support-ease',
    title: 'Support Ease',
    tech: ['React','Ant Design', 'Spring Boot', 'MySql', 'REST API'],
    desc:`This tool helps the TechTrix team create, manage, and assign support tickets efficiently. Clients raise tickets via a web portal, which the support team tracks with status, priority, and assignment logs. Admins manage all tickets, while users follow their own. It includes a quotation generator based on selected modules and preferences. Built with Django (SQLite) and React, it uses Axios for API calls, with loading indicators and toast notifications. Now used by 50+ enterprise clients, it supports email alerts and SLA tracking.`,

    image: image2,
  },
    
    {
      id: 'infi-chatbot-solutions',
      title: 'Infi Chatbot Solutions',
      tech: [ 'Django', 'SQLite', 'REST API', 'NLP', 'Transformer Models', 'WebSockets'],
      desc: `A hybrid chatbot solution blending rule-based workflows with LLM (GPT-3.5/4) for enterprise use. It supports text and voice chats with company-specific knowledge bases. Rule-based logic handles structured tasks, while LLM manages open-ended dialogue. Features include sentiment analysis, chat history, and smooth switching between modes. It integrates with databases for personalized replies, includes an analytics dashboard, and supports domain training. Built with Django and WebSockets for real-time use across web and mobile, ideal for support and internal knowledge systems.`,

      image: image4,
    },
    {
      id: 'simple-erp',
      title: 'Simple ERP',
      tech: [ 'Django', 'SQlite','REST API', 'Bootstrap', 'HTML', 'CSS'],
      desc: `A full ERP system built for Kavya Enterprises to manage water supply and dry cleaning services. It includes order handling, tracking, dashboards, invoicing, and task assignment. Admins access analytics, while secure login and payment integration enhance usability. Built with Django REST APIs, React, and Redux, the platform features modules for product, request, and employee management. It reduces manual errors, supports regional languages, and improves overall operations.`,

      image: image,
    },
     
    
    {
      id: 'health-suite',
      title: 'HSuite',
      tech: ['React', 'Django', 'SQlite', 'Ant Design', 'Redux', 'Rest API',  ],
      desc: `A medical coding platform for healthcare professionals to search, add, and manage codes with descriptions and sub-descriptions. Users can like/dislike codes, edit them with version tracking, and use advanced filters by type, category, and popularity. It includes an assessment module for personality tests with detailed results. Built with Django for backend efficiency and React with Ant Design for a clean UI, it logs all changes for audits. The system supports role-based access and data export for reporting.`,

      image: image3,
    },

];

const fadeIn = (direction = 'up', delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 20 : 0,
    x: direction === 'left' ? -10 : direction === 'right' ? 20 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.1,
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
                fontFamily: 'Poppins, sans-serif',

                fontWeight: 700,
                fontSize: '36px',
                color: '#007676',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                marginBottom: '10px',
                marginTop: '-20px',
              }}
            >
              Cutting Edge Products Designed to Drive Innovation.
            </Title>
          </motion.div>
          <Paragraph
            style={{
              fontFamily: 'Poppins, sans-serif',

              fontSize: 18,
              maxWidth: 800,
              margin: '0 auto',
              color: '#007676',
              lineHeight: '1.6',
              textAlign: 'center',
            }}
          >
Empowering businesses with advanced tools to simplify processes and enhance productivity          </Paragraph>
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
        style={{
          
          display: 'flex',
          flexDirection: imageFirst ? 'row' : 'row-reverse',
          backgroundColor:'white',
          marginBottom: 60,
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
            width: '85%',
            height: '280px',
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
          style={{ flex: 1, color: '#000', }}
          initial="hidden"
          animate="visible"
          variants={fadeIn('up', 0.2)}
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
             fontFamily: 'Poppins, sans-serif',
              fontSize: 15,
              color: '#black',
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
                onClick={() => navigate(`/products/${project.id}`)}
              >
                Explore
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
