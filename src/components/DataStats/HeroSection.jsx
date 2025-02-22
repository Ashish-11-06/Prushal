import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion'; // Import motion for animation
import './HeroSection.css'; // For styling

const HeroSection = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [dataScientists, setDataScientists] = useState(0); // New state for Data Scientists
  const [developers, setDevelopers] = useState(0); // New state for Developers
  const [imageLoaded, setImageLoaded] = useState(false); // State to track if the image is loaded

  const statsRef = useRef(null);
  const imageRef = useRef(null); // Reference to the image for lazy loading

  const animateCount = useCallback(() => {
    // Define target values for each statistic
    let associatesTarget = 100;
    let projectTarget = 120;
    let companyTarget = 30;
    let dataScientistsTarget = 40; // Target for Data Scientists
    let developersTarget = 20; // Target for Developers

    // Increment clients count
    const clientIncrement = setInterval(() => {
      setClients((prev) => {
        if (prev < associatesTarget) return prev + 20;
        clearInterval(clientIncrement);
        return prev;
      });
    }, 10);

    // Increment projects count
    const projectIncrement = setInterval(() => {
      setProjects((prev) => {
        if (prev < projectTarget) return prev + 20;
        clearInterval(projectIncrement);
        return prev;
      });
    }, 15);

    // Increment companies count
    const companyIncrement = setInterval(() => {
      setCompanies((prev) => {
        if (prev < companyTarget) return prev + 1;
        clearInterval(companyIncrement);
        return prev;
      });
    }, 20);

    // Increment data scientists count
    const dataScientistsIncrement = setInterval(() => {
      setDataScientists((prev) => {
        if (prev < dataScientistsTarget) return prev + 1;
        clearInterval(dataScientistsIncrement);
        return prev;
      });
    }, 25);

    // Increment developers count
    const developersIncrement = setInterval(() => {
      setDevelopers((prev) => {
        if (prev < developersTarget) return prev + 1;
        clearInterval(developersIncrement);
        return prev;
      });
    }, 30);
  }, []);

  const observer = useMemo(() => new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !imageLoaded) {
        setImageLoaded(true); // Mark the image as loaded
      }
      if (entries[0].isIntersecting) {
        // Start animating numbers when in view
        animateCount();
      }
    },
    { threshold: 0.5 }
  ), [imageLoaded, animateCount]);

  useEffect(() => {
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    if (imageRef.current) {
      observer.observe(imageRef.current); // Observe the image for lazy loading
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
      if (imageRef.current) {
        observer.unobserve(imageRef.current); // Clean up observer
      }
    };
  }, [observer]);

  return (
    <div className="hero-container">
      {/* Hero Image */}
      <div className="hero-content">
        {/* Animated Text */}
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="hero-title">
            10 <span className="highlight-text">years </span>of Expertise in Data Science, Web Development for Digital Transformation, and Branding Management
          </h1>
          <p className="hero-subtitle">
            Let Prushal transform your Raw Data to Real Results and help you achieve your goals.
          </p>
        </motion.div>
      
      </div>

      {/* Stats Section */}
      <div className="stats-container" ref={statsRef}>
        <motion.div className="stat">
          <h2>{clients} +</h2>
          <p>Associates</p>
        </motion.div>
        <motion.div className="stat">
          <h2>{projects} +</h2>
          <p>Projects</p>
        </motion.div>
        <motion.div className="stat">
          <h2>{companies} +</h2>
          <p>Companies</p>
        </motion.div>
        <motion.div className="stat">
          <h2>{dataScientists} +</h2>
          <p>Data Scientists</p>
          <p>& Developers</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
