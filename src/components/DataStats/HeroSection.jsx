
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
  // State for counter animations
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [dataScientists, setDataScientists] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  // Use ref to track animation state for IntersectionObserver
  const hasAnimatedRef = useRef(false);
  hasAnimatedRef.current = hasAnimated;

  const animateCount = useCallback(() => {
    if (hasAnimatedRef.current) return;

    const animateNumber = (setter, target, step = 1, interval = 20) => {
      let current = 0;
      const increment = setInterval(() => {
        current += step;
        setter(Math.min(current, target));
        if (current >= target) clearInterval(increment);
      }, interval);
    };

    // Start all animations
    animateNumber(setClients, 100, 5);
    animateNumber(setProjects, 120, 5);
    animateNumber(setCompanies, 30, 1, 50);
    animateNumber(setDataScientists, 40, 1, 50);

    setHasAnimated(true);
    sessionStorage.setItem('heroAnimated', 'true');
  }, []);

  // Check if already animated on mount
  useEffect(() => {
    const alreadyAnimated = sessionStorage.getItem('heroAnimated');
    if (alreadyAnimated) {
      setClients(100);
      setProjects(120);
      setCompanies(30);
      setDataScientists(40);
      setHasAnimated(true);
    }
  }, []);

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimatedRef.current) {
          animateCount();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, [animateCount]);

  return (
    <div className="hero-container">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="hero-title">
            10 <span className="highlight-text">years </span>of Expertise in Data Science, Web Development for Digital Transformation, and Branding Management
          </h1>
          <p className="hero-subtitle">
            Let Prushal transform your Raw Data to Real Results and help you achieve your goals.
          </p>
         
        </motion.div>

        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="hero-image" />
        </motion.div>
      </div>

      <div className="stats-container" ref={statsRef}>
        <motion.div 
          className="stat"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2>{clients}+</h2>
          <p>Associates</p>
        </motion.div>
        
        <motion.div 
          className="stat"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2>{projects}+</h2>
          <p>Projects</p>
        </motion.div>
        
        <motion.div 
          className="stat"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>{companies}+</h2>
          <p>Companies</p>
        </motion.div>
        
        <motion.div 
          className="stat"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2>{dataScientists}+</h2>
          <p>Data Scientists</p>
          <p>& Developers</p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
