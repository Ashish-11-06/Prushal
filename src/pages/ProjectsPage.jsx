import { Button, Typography, Tag } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/product_images/Energy.gif';
import image from '../assets/erp.gif';
import image2 from '../assets/ticket.gif';
import image3 from '../assets/product_images/healthSuite.gif';
import image4 from '../assets/product_images/chatbot.gif';
import image5 from '../assets/product_images/marine.webp';
import image6 from '../assets/product_images/fintech.gif';
import image7 from '../assets/product_images/carbon.gif';
import image8 from '../assets/product_images/real.gif';
import image9 from '../assets/product_images/yoga.gif';
import image10 from '../assets/product_images/digital.gif';


const { Title, Paragraph } = Typography;

const projects = [
  {
    id: 'green-energy-portal',
    title: 'Green Energy Portal',
    tech: ['React.js', 'Ant Design', 'Axios', 'Framer Motion', 'Django', 'Django REST Framework (DRF)', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'Docker', 'AWS', 'GitHub Actions', 'NGINX', 'Chart.js', 'JWT', 'WebSockets'],
    desc: 'The Green Energy Portal is a transparent marketplace that connects consumers with renewable energy producers, enabling individuals and businesses to transition to clean energy with ease. Through real-time data, simplified supplier comparisons, and tailored recommendations, users can make informed, cost-effective energy decisions. The platform supports purchasing surplus solar or wind power, investing in green projects, and monitoring usage through a unified dashboard. Designed for both savings and sustainability, it turns environmental commitment into practical action while contributing to global net-zero goals.',
    image: image1,
  },
  {
    id: 'cleanroomcart',
    title: 'Cleanroomcart',
    tech: ['MERN Stack', 'Ant Design', 'Node.js', 'Express.js', 'MongoDB', 'React.js', 'JWT', 'Redux', 'REST API'],
    desc: `Cleanroomcart is a scalable eCommerce platform built with the MERN stack for purchasing cleanroom equipment. It supports both user and admin roles, offering efficient inventory management for admins and a smooth shopping experience for users. With secure JWT login, Redux state management, and a responsive Ant Design UI, the platform delivers a complete, functional, and user-friendly eCommerce solution.`,

    image: image3,
  },
 
    
    {
      id: 'nbs-marine-solutions',
      title: 'NBS Marine Solutions',
      tech: ['WordPress', 'Elementor', 'Responsive Design', 'SEO Optimization', 'Contact Forms'],
      desc: `A corporate website for NBS Marine Solutions, a global provider of marine engineering, AC, and industrial services with 25+ years of expertise. It highlights their capabilities in motor winding, ship spares, centralized AC, and industrial refrigeration. Built on WordPress for easy management, the site presents services, history, and contact options to drive leads. Targeting marine, offshore, and industrial sectors, the responsive design builds trust and reinforces NBS as a reliable engineering partner.`,

      image: image5,
    },
    {
      id: 'dazzlepay-fintech-engagement',
      title: 'Dazzlepay Fintech Engagement',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Basic Web Hosting'],
      desc: `A sleek web presence for DazzlePay, a fintech company transforming digital payment experiences for retailers, corporates, and banks. The platform positions DazzlePay as a forward-thinking brand, placing payments at the heart of customer engagement and loyalty. The site communicates their vision to empower businesses with seamless, tech-driven payment tools. With a modern design and concise messaging, it appeals to enterprise clients and fintech investors, enhancing brand visibility and generating leads.`,

      image: image6,
    },

    {
      id: 'neelansh-equipments-machines',
      title: 'Neelansh Equipments & Machines',
      tech: ['WordPress', 'Elementor', 'Responsive Design', 'SEO Optimization', 'Custom Contact Forms'],
      desc: `A corporate website for Neelansh Equipments & Machines, a leading manufacturer of stainless steel equipment for pharmaceutical, biotech, hospital, and kitchen industries. Focused on custom SS fabrication, it highlights their ability to provide tailored solutions across sectors. Built on WordPress, the site showcases their product portfolio, emphasizing quality, precision, and customer satisfaction. Responsive and SEO-optimized, it enhances visibility and offers an easy path for clients to learn more and contact for customized solutions.`,

      image: image3,
    },
    {
      id: 'seemas-project',
      title: 'Seemas Project',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'WordPress'],
      desc: `Seema’s Project is a charitable initiative focused on rescuing, rehabilitating, and providing care for children of sex workers in Pune, regardless of gender, caste, race, or ethnicity. Created as part of our company’s social responsibility, the platform showcases their mission to offer hope and healing. The site raises awareness, connects donors and volunteers, and supports the goal of rescuing over 200 children and adults by the end of 2022. It helps build community support and encourages actions to improve the lives of these marginalized individuals.`,

      image: image3,
    },
    {
      id: 'carbonutral',
      title: 'carbonutral',
      tech: ['WordPress', 'Responsive Design', 'SEO Optimization', 'Custom Forms'],
      desc: `Carbonutral is an initiative focused on developing solar, wind, biogas, and bioenergy capacities in India. The platform highlights its commitment to low-carbon power, reducing consumption, and cutting emissions. Through solutions like energy-efficient buildings, smart lighting, and energy management, Carbonutral aims to provide sustainable electricity, create jobs, and support community development. The website serves as an informative hub for investors, stakeholders, and community members, showcasing the company’s environmental and societal impact while promoting clean energy solutions in India.`,

      image: image7,
    },
    {
      id: 'redwoods-group',
      title: 'Redwoods Group',
      tech: ['WordPress', 'Responsive Design', 'SEO Optimization', 'Custom Forms', 'Portfolio Gallery'],
      desc: `Redwoods Group, established in 2006, provides end-to-end services in real estate, fund management, and deal structuring. The website reflects the company’s core values of credibility, transparency, and client focus. With over two decades of experience, Redwoods is trusted by property buyers, investors, and partners. The site showcases their services, portfolio, and expertise, offering an accessible platform for clients to learn more about home and office investments. The responsive, SEO-optimized design boosts their online presence as a leader in the industry.`,

      image: image8,
    },
    {
      id: 'shivayog-yoga-with-kavita-tripathi',
      title: 'Shivayog – Yoga with Kavita Tripathi',
      tech: ['Web Development', 'Responsive UI', 'Online Booking', 'Video Integration', 'User Authentication'],
      desc: `Shivayog – Yoga with Kavita Tripathi is a digital platform promoting mindful living and accessible yoga globally. Founded by Kavita Tripathi, a visionary educator with an army background, the platform offers yoga classes for physical wellness, mental balance, and personal transformation. It caters to various fitness goals and medical conditions, such as PCOS, thyroid issues, diabetes, and stress. Shivayog provides personalized guidance, wellness plans, and programs for all body types and experience levels, fostering self-care, discipline, and long-term wellbeing from home.`,

      image: image9,
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

const ProjectsPage = () => {
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
              Transform Ideas into Scalable Solutions
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
Delivering impactful projects that shape the future of industries through innovative solutions.          </Paragraph>
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

export default ProjectsPage;
