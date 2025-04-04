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
      {/* About Us Section */}
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
        Welcome to our company! We are dedicated to delivering innovative solutions with excellence and passion.
      </motion.p>

      {/* Vision, Mission, Values */}
      <motion.div className="about-cards" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
        <motion.div className="card" whileHover={{ scale: 1.1, rotate: 3 }}>
          <h2>Our Vision</h2>
          <p>To be a leading innovator in our industry.</p>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1, rotate: -3 }}>
          <h2>Our Mission</h2>
          <p>To provide top-tier solutions with a focus on quality.</p>
        </motion.div>
        <motion.div className="card" whileHover={{ scale: 1.1, rotate: 3 }}>
          <h2>Our Values</h2>
          <p>Integrity, Innovation, Excellence.</p>
        </motion.div>
      </motion.div>
      
      {/* Our Team Section */}
      <motion.h2 className="team-title" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}>Our Team</motion.h2>
      <motion.div className="team-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 1.5 }}>
        {["John Doe - CEO", "Jane Smith - CTO", "Robert Brown - Lead Developer"].map((member, index) => (
          <motion.div className="team-card" whileHover={{ scale: 1.1 }} key={index}>
            <img src={teamImage} alt={member} className="team-img" />
            <h3>{member.split(" - ")[0]}</h3>
            <p>{member.split(" - ")[1]}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievements Section */}
      <motion.h2 className="achievements-title" initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 2 }}>Achievements</motion.h2>
      <motion.div className="achievements-slider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2.5 }}>
        <div className="slider-track">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <motion.div className="achievement-card" key={index} whileHover={{ scale: 1.1 }}>
              <img src={teamImage} alt={`Achievement ${item}`} className="achievement-img" />
              <p>Achievement {item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Section */}
      <motion.h2 className="contact-title" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 3 }}>Contact Us</motion.h2>
      <motion.div className="contact-section" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 3.5 }}>
        {[{ title: "Address", detail: "123 Innovation Street, Tech City, USA" }, { title: "Phone", detail: "+1 234 567 890" }, { title: "Email", detail: "contact@company.com" }].map((contact, index) => (
          <motion.div className="contact-card" whileHover={{ scale: 1.1 }} key={index}>
            <h3>{contact.title}</h3>
            <p>{contact.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
