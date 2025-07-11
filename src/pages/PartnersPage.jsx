import { Button, Typography, Tag } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/product_images/Energy.gif';
import image10 from '../assets/product_images/digital.gif';


const { Title, Paragraph } = Typography;

const projects = [

    {
      id: 'exg-global',
      title: 'EXG Global',
      tech: ['WordPress', 'Oxygen Builder', 'Responsive Design', 'SEO Optimization'],
      desc: `EXG Global is a platform that helps businesses streamline ESG reporting and transition to renewable energy. Built with WordPress and Oxygen Builder, it provides tools for transparency and stakeholder engagement. The platform enables businesses to make informed, sustainable decisions and manage ESG initiatives effectively. The responsive, user-friendly design ensures an optimal experience across devices, while SEO optimization enhances visibility.`,

      image: image1,
    },
    {
      id: 'stratxg',
      title: 'StratXG',
      tech: ['WordPress', 'Responsive Design', 'SEO Optimization'],
      desc: `StratXG is a digital consulting company driving growth through strategic repositioning in infrastructure, green energy, e-education, e-healthcare, and digital tech. The website, built with WordPress, reflects their commitment to digital transformation. StratXG helps clients stay profitable and relevant in evolving markets. Our team focused on a modern, responsive design and SEO optimization to showcase their expertise and reach a wider audience.`,

      image: image10,
    }
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

const PartnersPage = () => {
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
             Collaborate with Visionary Partners for Sustainable Growth            </Title>
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
Forging lasting partnerships to drive mutual success and create shared value in every venture          </Paragraph>
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

export default PartnersPage;
