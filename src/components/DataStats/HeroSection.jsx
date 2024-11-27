import React from 'react';
import { motion } from 'framer-motion'; // Import motion for animation
import './HeroSection.css'; // For styling

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div>   
          {/* Animated Text 1 */}
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }} // Start off-screen
            whileInView={{ opacity: 1, y: 0 }} // Trigger when in view
            transition={{ duration: 1, ease: 'easeOut' }} // Animation timing
          >
            <h1 className="hero-title">
              10 <span className="highlight-text">years</span> of Data Science Expertise
            </h1>
            <p className="hero-subtitle">
              Let Prushal transform your Raw Data to Real Results and help you achieve your goals.
            </p>
          </motion.div>

          {/* Animated Text 2 */}
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }} // Start off-screen
            whileInView={{ opacity: 1, y: 0 }} // Trigger when in view
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }} // Animation timing with delay
          >
            <h1 className="hero-title">
              10 <span className="highlight-text">years</span> of Data Science Expertise
            </h1>
            <p className="hero-subtitle">
              Let Prushal transform your Raw Data to Real Results and help you achieve your goals.
            </p>
          </motion.div>
        </div>
     
        {/* <button className="hero-btn">Learn More</button> */}
      </div>
    </div>
  );
};

export default HeroSection;
