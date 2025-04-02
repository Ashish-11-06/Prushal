import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import teamImage from "../assets/card1.jpg";

const AboutUs = () => {
  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1 
        className="about-title"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h1>
      <motion.p
        className="about-description"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Welcome to our company! We are dedicated to delivering innovative solutions with excellence and passion. Our mission is to create impactful products that enhance lives and businesses.
      </motion.p>
      <motion.div
        className="about-cards"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div className="card" whileHover={{ scale: 1.1, rotate: 3 }}>
          <h2>Our Vision</h2>
          <p>To be a leading innovator in our industry, setting standards for excellence.</p>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1, rotate: -3 }}>
          <h2>Our Mission</h2>
          <p>To provide top-tier solutions with a focus on quality, innovation, and customer satisfaction.</p>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1, rotate: 3 }}>
          <h2>Our Values</h2>
          <p>Integrity, Innovation, Excellence, Customer-Centric Approach.</p>
        </motion.div>
      </motion.div>
      
      {/* Our Team Section */}
      <motion.h2 
        className="team-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Our Team
      </motion.h2>
      <motion.div 
        className="team-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <motion.div className="team-card" whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" }}>
          <img src={teamImage} alt="John Doe" className="team-img" />
          <h3>John Doe</h3>
          <p>CEO & Founder</p>
        </motion.div>
        <motion.div className="team-card" whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" }}>
          <img src={teamImage} alt="Jane Smith" className="team-img" />
          <h3>Jane Smith</h3>
          <p>CTO</p>
        </motion.div>
        <motion.div className="team-card" whileHover={{ scale: 1.1, boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" }}>
          <img src={teamImage} alt="Robert Brown" className="team-img" />
          <h3>Robert Brown</h3>
          <p>Lead Developer</p>
        </motion.div>
      </motion.div>

      {/* Address & Contact Section */}
      <motion.h2 
        className="contact-title"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Contact Us
      </motion.h2>
      <motion.div 
        className="contact-section"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div className="contact-card" whileHover={{ scale: 1.1 }}>
          <h3>Address</h3>
          <p>123 Innovation Street, Tech City, USA</p>
        </motion.div>
        <motion.div className="contact-card" whileHover={{ scale: 1.1 }}>
          <h3>Phone</h3>
          <p>+1 234 567 890</p>
        </motion.div>
        <motion.div className="contact-card" whileHover={{ scale: 1.1 }}>
          <h3>Email</h3>
          <p>contact@company.com</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;