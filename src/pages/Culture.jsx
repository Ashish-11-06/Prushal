import React from 'react';
import { Row, Col, Button, Card } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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
    quote: "“The mentorship culture has accelerated my growth exponentially. Senior colleagues invest time in knowledge sharing without hesitation.”",
    name: "Samruddhi Manikeri",
    role: "Junior Developer"
  },
  // {
  //   quote: "“Remote collaboration feels natural here. The digital tools and meeting rhythms maintain strong team connectivity across timezones.”",
  //   name: "Sonia Desai",
  //   role: "Remote Team Lead"
  // },
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
  }
];

const Culture = () => {
  const navigate = useNavigate();
  return (
    <div className="culture-page">

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
<h2 className="hero-heading" style={{ backgroundColor: '#F8F8FF' }}>
  Don't Just work.
</h2>
        <h2 style={{ backgroundColor: '#F8F8FF' }} >We grow together</h2>

    <p className="hero-subheading">Explore culture that fuels innovation,collaboration & joy.</p>
<Button
        type="primary"
        className="hero-button"
        onClick={() => navigate("/contact")} // ✅ navigate on click
      >
        Join Us
      </Button>  </motion.div>
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
          <Card hoverable bordered className="value-card-inner">
            <div className="value-inner">
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
        <motion.div
          className="culture-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaUsers className="card-icon" />
          <h3>Inclusive Culture</h3>
          <p>We celebrate diversity and ensure everyone feels welcome, respected, and valued.</p>
        </motion.div>

        <motion.div
          className="culture-card"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaLeaf className="card-icon" />
          <h3>Eco-Friendly Workspace</h3>
          <p>Our initiatives promote sustainability—from green spaces to energy-saving practices.</p>
        </motion.div>

        <motion.div
          className="culture-card"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaBalanceScale className="card-icon" />
          <h3>Work-Life Balance</h3>
          <p>We support flexible working hours, mental health, and a stress-free workplace.</p>
        </motion.div>

        <motion.div
          className="culture-card"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <FaChalkboardTeacher className="card-icon" />
          <h3>Continuous Learning</h3>
          <p>From weekly workshops to cross-functional training, growth never stops here.</p>
        </motion.div>
      </div>
    </section>








      {/* Behind the Scenes */}
      <section className="gallery-section">
  <h2 className="gallery-title">Behind the Scenes</h2>
  <div className="carousel-wrapper">
    <motion.div
      className="carousel-track"
      animate={{ x: ['0%', '-50%'] }}
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
          { img: training1, text: "Cultural night filled with colors & fun." },
          { img: training2, text: "Field visit to historic Rajgad Fort." },
          { img: training3, text: "Workshop on AI and Data Analytics." },
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
{/* <section className="testimonials">
  <h2 className="testimonial-title">What Our People Say</h2>
  <div className="testimonial-row">
    {testimonials.map((testimonial, index) => (
      <motion.div
        className="testimonial-card"
        key={index}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.3, duration: 0.6 }}
        style={{ minHeight: '250px' }} // Add fixed minimum height
      >
        <div className="chat-box" style={{ height: '100%' }}> 
          <p className="quote" style={{ 
            marginBottom: '20px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 5, // Limit to 5 lines max
            WebkitBoxOrient: 'vertical'
          }}>
            {testimonial.quote}
          </p>
          <div className="author-info" style={{ marginTop: 'auto', height: '100%' }}> 
            <p className="author"><strong>{testimonial.name}</strong></p>
            <p className="role">{testimonial.role}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section> */}




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
