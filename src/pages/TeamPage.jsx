import React from 'react';
import { Row, Col, Button } from 'antd';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaPhoneAlt,
  FaQuoteLeft,
  FaUsers,
  FaLeaf,
  FaBalanceScale,FaHandsHelping
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './teampage.css';

// Images (replace with your real images)
import ceoImg from '../assets/ceo.jpg';
import emp1 from '../assets/teammember.jpg';


const ceo = {
  name: 'Mr. Kushal Sharma',
  designation: 'Founder & CEO',
  img: ceoImg,
  linkedin: 'https://www.linkedin.com/in/kushalsharma76/?originalSubdomain=in',
  phone: '+91 97622 03269',
  say: `“At our company here , we everyone believe in empowering every individual to innovate,collaborate,  grow, and make a real impact personally and professionally. Our success is built on the passion, integrity, inclusivity and collaboration of our team and their dedicated hardwork. Let us continue to dream high, support each other, and create a future we're all proud of..”`
};

const hrManager = {
  name: 'Mr. Shivsingh Patel',
  designation: 'Manager',
  img: emp1, // Replace with actual HR image if available
  linkedin: 'https://www.linkedin.com/in/shivsinghpatel/',
  phone: '+91 98506 03269',
  say: `“People are our greatest asset. As a manager, my mission is to build a culture where every team member feels valued and empowered. When individuals thrive, teams succeed. By nurturing talent, promoting inclusivity, and investing in both personal and professional growth, we foster a workplace where innovation, collaboration, and purpose drive meaningful and lasting impact.””`
};
const team = [
  // First row
  {
    name: 'Ashish Bhosale',
    designation: 'Full Stack Developer',
    img: emp1,
    linkedin: 'https://www.linkedin.com/in/ashish-bhosale/',
    phone: '+91 65432 10987'
  },
  {
    name: 'Aarti Lahane',
    designation: 'AI/ML Developer',
    img: emp1,
    linkedin: 'https://www.linkedin.com/in/arati-lahane/',
    phone: '+91 98765 43210'
  },
  {
    name: 'Priyanshu Sharma',
    designation: 'Full Stack Developer',
    img: emp1,
    linkedin: 'https://www.linkedin.com/in/pri-sharma/',
    phone: '+91 87654 32109'
  },
  {
    name: 'Gayatri Rajguru',
    designation: 'Junior Developer',
    img: emp1,
    linkedin: '',
    phone: ''
  },
  // Second row
  {
    name: 'Kiran Gaikwad',
    designation: 'Junior Developer',
    img: emp1,
    linkedin: 'https://www.linkedin.com/in/kiran-gaikwad/',
    phone: '+91 8999649495'
  },
  {
    name: 'Samruddhi Manikeri',
    designation: 'Junior Developer',
    img: emp1,
    linkedin: 'https://www.linkedin.com/in/samruddhi-manikeri/',
    phone: '+91 76543 21098'
  },
  {
    name: 'Shraddha Irale',
    designation: 'Junior Developer',
    img: emp1,
    linkedin: '',
    phone: ''
  },
  
  {
    name: 'Shweta Bamane',
    designation: 'Junior Developer',
    img: emp1,
    linkedin: '',
    phone: ''
  },
  {
    name: 'Shrutika Desai',
    designation: 'Junior Developer',
    img: emp1,
    linkedin: '',
    phone: ''
  },
  {
    name: 'Sejal Bhambare',
    designation: 'Junior Developer',
    img: emp1,
    linkedin: '',
    phone: ''
  },
  {
    name: 'Nikita Pawale',
    designation: 'AI/ML Intern',
    img: emp1,
    linkedin: '',
    phone: ''
  },
  {
    name: 'Akanksha Shivale',
    designation: 'AI/ML Intern',
    img: emp1,
    linkedin: '',
    phone: ''
  }
];

const testimonials = [
  {
    quote: "“The cross-functional collaboration here is exceptional. Teams work seamlessly across departments, breaking silos to deliver outstanding results.”",
    name: "Priyanshu Sharma",
    role: "Full Stack developer"
  },
  {
    quote: "“What makes this place special is how leadership fosters psychological safety - everyone's voice is heard and valued equally in decision making.”",
    name: "Aarti Lahane",
    role: "AI ML Developer"
  },
  {
    quote: "“The mentorship culture has accelerated my growth exponentially. Senior colleagues invest time in knowledge sharing without hesitation.”",
    name: "Samruddhi Manikeri",
    role: "Junior Developer"
  },
  {
    quote: "“Conflict resolution is handled with remarkable maturity. Disagreements become opportunities to find better solutions together.”",
    name: "Ashish Bhosale",
    role: "Full Stack Developer"
  },
  {
    quote: "“The 'fail fast' culture removes fear. Teams innovate boldly knowing they have organizational support when experiments don't work out.”",
    name: "Kiran Gaikwad",
    role: "Junior Developer"
  },

  {
      quote: "Working here has allowed me to grow rapidly as a developer while being part of an inspiring team.",
      name: "Shweta Bamane",
      role: "Junior Developer",
      
    },
    {
      quote: "The learning environment here is phenomenal, encouraging innovation and personal growth every day..",
      name: "Nikita Pawale",
      role: "AI/ML Intern",
      
    },
    {
      quote: "Collaboration and continuous improvement make this workplace special — proud to be part of this team!",
      name: "Shraddha Irale",
      role: "Junior Developer",
    }
  
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, type: 'spring', stiffness: 80, damping: 14 },
  }),
};

const LeaderCard = ({ leader }) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
    style={{
      background: "#fff",
      borderRadius: 16,
      boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
      textAlign: "center",
      padding: "32px 24px 24px 24px",
      margin: "0 auto",
      maxWidth: 420,
      minHeight: 440,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
    }}
  >
    <img
      src={leader.img}
      alt={leader.name}
      style={{
        width: 120,
        height: 120,
        objectFit: "cover",
        borderRadius: "50%",
        boxShadow: "0 4px 20px #18e8ff2b",
        border: "4px solid #007676",
        marginBottom: 12
      }}
    />
    <h3 style={{ fontSize: 24, color: "#007676", fontWeight: 700, margin: "8px 0 2px 0" }}>{leader.name}</h3>
    <div style={{ fontSize: 16, color: "#2196F3", fontWeight: 600, marginBottom: 8 }}>{leader.designation}</div>
    <div style={{ display: "flex", justifyContent: "center", gap: 18, marginBottom: 14 }}>
      <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: "#007676", fontSize: 22 }}>
        <FaLinkedin />
      </a>
      <a href={`tel:${leader.phone.replace(/\s/g, '')}`} style={{ color: "#007676", fontSize: 20 }}>
        <FaPhoneAlt />
      </a>
    </div>
    <div style={{
      background: "#f8f8f8",
      borderRadius: 12,
      padding: "18px 16px",
      marginTop: 8,
      fontStyle: "italic",
      color: "#333",
      fontSize: 16,
      boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
      position: "relative"
    }}>
      <FaQuoteLeft style={{ color: "#2196F3", marginRight: 8, fontSize: 18, verticalAlign: "middle" }} />
      {leader.say}
    </div>
  </motion.div>
);

const TeamPage = () => (
  <div className="culture-page" style={{ backgroundColor: "#f7f7f7", minHeight: '100vh' }}>
    {/* Hero Section */}
    <section className="hero1" style={{
      minHeight: '30vh',
      backgroundImage: "url('../assets/grow_together.gif')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div className="hero-overlay" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="hero-content"
        style={{ minWidth: 340, maxWidth: 700, padding: 0 }}
      >
        <h2 className="hero-heading" style={{ color: "#007676", fontWeight: "bold", fontSize: 28, marginBottom: 8 }}>
          Meet Our Team
        </h2>
        <p className="hero-subheading" style={{ fontSize: 16, marginBottom: 12 }}>
          The people who drive our vision, innovation, and success.
        </p>
        <Link to="/contact">
          <Button type="primary" className="hero-button" style={{ backgroundColor: "#2196F3" }}>
            Join Our Team
          </Button>
        </Link>
      </motion.div>
    </section>

    {/* CEO and HR Manager Side by Side */}
    <section style={{ margin: '0 auto 48px auto', maxWidth: 1100, width: '100%' }}>
      <Row gutter={[32, 32]} justify="center" align="top">
        <Col xs={24} md={12}>
          <LeaderCard leader={ceo} />
        </Col>
        <Col xs={24} md={12}>
          <LeaderCard leader={hrManager} />
        </Col>
      </Row>
    </section>


{/* Team Members Section */}
<section className="core-values" style={{ backgroundColor: "#f8f8f8", paddingTop: 40 }}>
  <h2 className="core-title" style={{ color: "#007676", fontSize: 32, marginBottom: 24 }}>
    Our Team Members
  </h2>
  <Row gutter={[24, 24]} justify="center">
    {team.map((member, i) => (
      <Col xs={24} sm={12} md={6} lg={6} key={member.name}>
        <motion.div
          className="value-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={i}
          variants={cardVariants}
          whileHover={{ scale: 1.05, boxShadow: "0 12px 32px rgba(33,150,243,0.15)" }}
          style={{
            backgroundColor: "#fff",
            borderRadius: 16,
            boxShadow: "0 6px 25px rgba(0,0,0,0.08)",
            padding: "28px 12px 18px 12px",
            minHeight: 220, // reduced height since less content
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <img
            src={member.img}
            alt={member.name}
            style={{
              width: 90,
              height: 90,
              objectFit: "cover",
              borderRadius: "50%",
              boxShadow: "0 2px 10px #18e8ff2b",
              border: "3px solid #2196F3",
              marginBottom: 10,
            }}
          />
          <div style={{ fontSize: 17, fontWeight: 700, color: "#007676", marginBottom: 2 }}>
            {member.name}
          </div>
          <div style={{ fontSize: 15, color: "#2196F3", fontWeight: 600 }}>
            {member.designation}
          </div>
          {/* Removed social icons and phone */}
        </motion.div>
      </Col>
    ))}
  </Row>
</section>







    {/* Team Spirit/Values Section */}
    <section className="env-culture-section">
  <h2 className="section-title">Our Team Spirit</h2>
  <div
    className="culture-cards-container"
    style={{
      display: "flex",
      justifyContent: "center",
      gap: 24,
      marginTop: 24,
      flexWrap: "wrap",
    }}
  >
    <div
      className="culture-card fade-in-up"
      style={{
        background: "#fff",
        borderRadius: 14,
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        padding: 24,
        width: 200,
        textAlign: "center",
      }}
    >
      <FaUsers
        className="card-icon"
        style={{ color: "#2196F3", fontSize: 28, marginBottom: 12 }}
      />
      <h3 style={{ color: "#007676", fontWeight: 700 }}>Collaboration</h3>
      <p style={{ color: "#333" }}>
        We work as one, supporting each other to achieve our shared vision.
      </p>
    </div>
    <div
      className="culture-card zoom-in"
      style={{
        background: "#fff",
        borderRadius: 14,
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        padding: 24,
        width: 200,
        textAlign: "center",
      }}
    >
      <FaLeaf
        className="card-icon"
        style={{ color: "#2196F3", fontSize: 28, marginBottom: 12 }}
      />
      <h3 style={{ color: "#007676", fontWeight: 700 }}>Growth Mindset</h3>
      <p style={{ color: "#333" }}>
        Continuous learning and self-improvement are at our core.
      </p>
    </div>
    <div
      className="culture-card slide-in-left"
      style={{
        background: "#fff",
        borderRadius: 14,
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        padding: 24,
        width: 200,
        textAlign: "center",
      }}
    >
      <FaBalanceScale
        className="card-icon"
        style={{ color: "#2196F3", fontSize: 28, marginBottom: 12 }}
      />
      <h3 style={{ color: "#007676", fontWeight: 700 }}>Integrity</h3>
      <p style={{ color: "#333" }}>
        We act with honesty, transparency, and respect in all we do.
      </p>
    </div>
    <div
      className="culture-card bounce-in"
      style={{
        background: "#fff",
        borderRadius: 14,
        boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
        padding: 24,
        width: 200,
        textAlign: "center",
      }}
    >
      <FaHandsHelping
        className="card-icon"
        style={{ color: "#2196F3", fontSize: 28, marginBottom: 12 }}
      />
      <h3 style={{ color: "#007676", fontWeight: 700 }}>Support & Care</h3>
      <p style={{ color: "#333" }}>
        We prioritize empathy, ensuring everyone feels heard and valued.
      </p>
    </div>
  </div>
</section>


    {/* Testimonials */}
    <section className="testimonials">
      <h2 className="testimonial-title">What Our People Say</h2>
      <div className="testimonial-row">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="testimonial-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            style={{ minHeight: '250px' }}
          >
            <div className="chat-box" style={{ height: '100%' }}>
              <p className="quote" style={{
                marginBottom: '20px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 5,
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
    </section>
  </div>
);

export default TeamPage;
