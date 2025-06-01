import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Row, Col } from 'antd';
import './HeroSection.css';

const HeroSection = () => {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [dataScientists, setDataScientists] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
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

    animateNumber(setClients, 100, 5);
    animateNumber(setProjects, 120, 5);
    animateNumber(setCompanies, 30, 1, 50);
    animateNumber(setDataScientists, 40, 1, 50);
    setHasAnimated(true);
    sessionStorage.setItem('heroAnimated', 'true');
  }, []);

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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            10 <span className="highlight-text">years</span> of Expertise in Data Science, Web Development for Digital Transformation, and Branding Management
          </h1>
          <p className="hero-subtitle">
            Let Prushal transform your Raw Data to Real Results and help you achieve your goals.
          </p>
        </motion.div>
      </div>

      <div className="stats-container" ref={statsRef}>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={12} sm={6}>
            <div className="stat-box">
              <h2>{clients}+</h2>
              <p>Associates</p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="stat-box">
              <h2>{projects}+</h2>
              <p>Projects</p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="stat-box">
              <h2>{companies}+</h2>
              <p>Companies</p>
            </div>
          </Col>
          <Col xs={12} sm={6}>
            <div className="stat-box">
              <h2>{dataScientists}+</h2>
              <p>Data Scientists</p>
              <p>& Developers</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
