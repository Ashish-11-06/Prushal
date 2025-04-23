import React from 'react';
import { Row, Col, Button, Card, Grid } from 'antd';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Culture.css';
import { FaUsers, FaLeaf, FaBalanceScale, FaChalkboardTeacher } from 'react-icons/fa';


import training from "../assets/success.jpg";
import training1 from "../assets/fest.jpg";
import training2 from "../assets/fun.webp";
import training3 from "../assets/birthday.jpg";
import training4 from "../assets/discuss.webp";
import img from "../assets/grow_together.gif"; // Behind the Scenes Image
 // Behind the Scenes Image
import localVideo from "../assets/culture_vedio.mp4"; // Local Video File

AOS.init();

const values = [
  { icon: '🚀', title: 'Innovation' },
  { icon: '🤝', title: 'Collaboration' },
  { icon: '🧭', title: 'Integrity' },
  { icon: '📚', title: 'Continuous Learning' },
  { icon: '💖', title: 'Customer Satisfaction' },
  { icon: '🌍', title: 'Sustainability & Responsibility' },
];


const testimonials = [
  {
    quote: "“The cross-functional collaboration here is exceptional. Teams work seamlessly across departments, breaking silos to deliver outstanding results.”",
    name: "Priyanshu Sharma",
    role: "Full Stack developer"
  },
  {
    quote: "“What makes this place special is how leadership fosters psychological safety - everyone's voice is heard and valued equally in decision making.”",
    name: "Arati Lahane",
    role: "AI ML Developer"
  },
  // {
  //   quote: "“Our agile squads demonstrate true collective ownership. When one team member struggles, three others immediately jump in to help without being asked.”",
  //   name: "Neha Patel",
  //   role: "Scrum Master"
  // },
 
  {
    quote: "“Remote collaboration feels natural here. The digital tools and meeting rhythms maintain strong team connectivity across timezones.”",
    name: "Divyansh Sharma",
    role: "Senior developer"
  },
  {
    quote: "“Conflict resolution is handled with remarkable maturity. Disagreements become opportunities to find better solutions together.”",
    name: "Ashish Bhosale",
    role: "Full Stack Developer"
  },
  // {
  //   quote: "“Our retrospectives actually drive change. Action items from team feedback get implemented visibly, proving leadership listens.”",
  //   name: "Ananya Reddy",
  //   role: "QA Engineer"
  // },
  {
    quote: "“The 'fail fast' culture removes fear. Teams innovate boldly knowing they have organizational support when experiments don't work out.”",
    name: "Kiran Gaikwad",
    role: "Junior Developer"
  },
  {
    quote: "“The mentorship culture has accelerated my growth exponentially. Senior colleagues invest time in knowledge sharing without hesitation.”",
    name: "Samruddhi Manikeri",
    role: "Junior Developer"
  }
];

const { useBreakpoint } = Grid;

const Culture = () => {

  const screens = useBreakpoint();
  const isMobile = !screens.sm;

  return (
    <div className="culture-page" style={{ padding: isMobile ? '5px' : '40px',}}>

      {/* Hero Section */}
      <section className="hero">
  <div className="hero-overlay" />
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1.2 }} 
    whileHover={{ scale: 1.02 }} 
    className="hero-content"
  >
    <h2 className="hero-heading" style={{background: ' #fdfdfd',  fontSize: isMobile ? '28px' : '42px',}}> We don’t just work. We grow together.</h2>
    <p className="hero-subheading" style={{background: ' #fdfdfd'}}>Explore our culture that fuels innovation, collaboration, and joy.</p>
    <Button type="primary" className="hero-button">Join Us</Button>
  </motion.div>
</section>



<section className="core-values">
  <h2 className="core-title">Our Core Values</h2>
  <Row gutter={[16, 16]} justify="center">
    {values.map((val, index) => (
      <Col xs={24} sm={12} md={8} lg={6} key={index}>
        <motion.div
          className="value-card"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            delay: index * 0.2,
          }}
          whileHover={{ scale: 1.05 }}
        >
          <Card hoverable bordered>
  <div className="value-inner">  {/* ✅ Inner wrapper */}
    <div className="icon">{val.icon}</div>
    <p className="value-title">{val.title}</p>
  </div>
</Card>

        </motion.div>
      </Col>
    ))}
  </Row>
</section>



<section className="env-culture-section">
  <h2 className="section-title">Environment & Culture</h2>
  <div className="culture-cards-container">
    <div className="culture-card fade-in-up">
      <FaUsers className="card-icon" />
      <h3>Inclusive Culture</h3>
      <p>We celebrate diversity and ensure everyone feels welcome, respected, and valued.</p>
    </div>
    <div className="culture-card zoom-in">
      <FaLeaf className="card-icon" />
      <h3>Eco-Friendly Workspace</h3>
      <p>Our initiatives promote sustainability—from green spaces to energy-saving practices.</p>
    </div>
    <div className="culture-card slide-in-left">
      <FaBalanceScale className="card-icon" />
      <h3>Work-Life Balance</h3>
      <p>We support flexible working hours, mental health, and a stress-free workplace.</p>
    </div>
    <div className="culture-card bounce-in">
      <FaChalkboardTeacher className="card-icon" />
      <h3>Continuous Learning</h3>
      <p>From weekly workshops to cross-functional training, growth never stops here.</p>
    </div>
  </div>
</section>








      {/* Behind the Scenes */}
      <section className="gallery-section">
  <h2 className="gallery-title">Behind the Scenes</h2>
  <div className="carousel-wrapper">
    <motion.div
      className="carousel-track"
      animate={{ x: ['-50%', '0%'] }}
      transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
    >
      {[...Array(2)].flatMap(() =>
        [
          { img: training, text: "Cheering to success together" },
          { img: training1, text: "Celebrating festivals together." },
          { img: training2, text: "Fun saturdays!!" },
          { img: training3, text: "Celebarting birthdays!!" },
          { img: training4, text: "Group discussions and barin-storming" },
          { img: training, text: "Team building games in full swing!" },
          { img: training, text: "Cultural night filled with colors & fun." },
          { img: training, text: "Field visit to historic Rajgad Fort." },
          { img: training, text: "Workshop on modern dairy automation." },
        ].map((item, index) => (
          <div className="carousel-item" key={`${index}-${Math.random()}`}>
            <img src={item.img} alt={`Activity ${index + 1}`} className="gallery-img" />
            <p className="img-caption">{item.text}</p>
          </div>
        ))
      )}
    </motion.div>
  </div>
</section>



{/* Testimonials */}
<section className="testimonials" style={{ padding: '40px 20px' }}>
  <h2 className="testimonial-title" style={{ textAlign: 'center', marginBottom: 40 }}>
    What Our People Say
  </h2>
 
  <div
  className="testimonial-row"
  style={{
    display: 'flex',
    overflowX: 'auto',
    gap: 24,
    paddingBottom: 16,
    scrollSnapType: 'x mandatory',
  }}
>
<motion.div
      className="carousel-track"
      // animate={{ x: ['0%', '-50%'] }}
      transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
    >
  {testimonials.map((testimonial, index) => (
    <motion.div
      className="testimonial-card"
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.4 }}
      style={{
        flex: '0 0 auto',
        width: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 20,
        borderRadius: 16,
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        scrollSnapAlign: 'start',
      }}
    >
      <p
        className="quote"
        style={{
          marginBottom: 20,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 5,
          WebkitBoxOrient: 'vertical',
          lineHeight: 1.6,
        }}
      >
        {testimonial.quote}
      </p>

      <div className="author-info">
        <p className="author" style={{ fontWeight: 'bold', marginBottom: 4 }}>
          - {testimonial.name}
        </p>
        <p className="role" style={{ color: '#777' }}>
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  ))}
  </motion.div>
</div>



</section>




      {/* Culture Video */}
{/* <section className="culture-videos">
  <h2 className="culture-heading">Our Culture in Motion</h2>
  <div className="video-container" data-aos="zoom-in">
    <video controls className="custom-video-player" autoPlay loop muted>
      <source src={localVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</section> */}


    </div>
  );
};

export default Culture;
