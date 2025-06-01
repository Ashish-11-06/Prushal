import { Button, Typography, Tag } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import celebrationImg from '../assets/fun.webp';
import techtrixImg from '../assets/fest.jpg';

const { Title, Paragraph } = Typography;

const stories = [
  {
    id: 1,
    title: 'A Decade of Excellence: Celebrating 10 Years of Innovation & Impact',
    tags: ['Public Speaking', 'Tech Talks', 'Quizzes', 'Personality Dev'],
    desc: `To mark the successful completion of 10 remarkable years of our organization, we hosted a grand celebration that brought together employees, senior leadership, and valued clients for a memorable get-together. This special occasion was filled with joy, appreciation, and reflection as we honored a decade of growth, innovation, and collaboration. Alongside this, we organized a dynamic series of internal events under the banner of "Data Fest," designed to highlight the talent and enthusiasm within our team. Data Fest featured a range of technical and non-technical competitions such as public speaking, storytelling, quizzes, and personality development sessions, all aimed at engaging and uplifting our employees. A keynote by esteemed industry experts added valuable insights and inspiration. Together, the celebration and Data Fest showcased the strength of our community, the spirit of continuous learning, and the passion that drives our success.`,
    image: celebrationImg,
  },
//   {
//     id: 2,
//     title: 'Successful Completion of Project TechTrix',
//     tags: ['Client Satisfaction', 'Full Implementation', 'Support System'],
//     desc: `Project TechTrix marked a milestone in our journey as we successfully completed the full-cycle implementation for a large-scale enterprise client.
// The project was delivered on time, with great attention to technical accuracy and process flow.
// The system now supports automated workflows, real-time analytics, and SLA-driven operations.
// Most importantly, the client shared a glowing review of their satisfaction, especially highlighting our proactive support and team collaboration.
// This project further establishes our footprint as a trusted tech solutions provider.`,
//     image: techtrixImg,
//   },
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

const SuccessStories = () => {
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
                fontSize: '36px',
                color: '#007676',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                marginBottom: '10px',
                marginTop: '-15px',
              }}
            >
              Celebrating Milestones & Making an Impact
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
            A glimpse into our journey of innovation, growth, and shared success.
          </Paragraph>
        </div>
      </motion.div>

      {/* Stories List */}
      <div style={{ marginTop: 60 }}>
        {stories.map((story, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <motion.div
              key={story.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn(index % 2 === 0 ? 'left' : 'right', index * 0.3)}
              style={{
                display: 'flex',
                flexDirection: imageFirst ? 'row' : 'row-reverse',
                backgroundColor:'white',
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
                src={story.image}
                alt={story.title}
                style={{
                  width: '100%',
                  maxWidth: 500,
                  borderRadius: 20,
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  flex: 1,
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
                  {story.title}
                </h2>
                <div style={{ margin: '10px 0' }}>
                  {story.tags.map((tag, idx) => (
                    <Tag key={idx} color="cyan" style={{ marginBottom: 5 }}>
                      {tag}
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
                  {story.desc}
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
                      Read More
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

export default SuccessStories;
