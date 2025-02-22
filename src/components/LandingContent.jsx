// src/components/LandingContent.jsx

import React, { useMemo } from 'react';
import ServicesList from './ServicesList';
import AnimatedBackground from '../components/Animation/AnimatedBackground'; // Import the AnimatedBackground component
import CircularAnimation from '../components/Animation/CircularAnimation';
import AnalyticsOffering from './home2/AnalyticsOffering';
import HeroSection from './DataStats/HeroSection';
import CapabilitiesOffering from './home2/CapabilitiesOffering';
import './LandingContent.css';
import CompanyLogos from './Clients/CompanyLogos';

const LandingContent = () => {
  const memoizedServicesList = useMemo(() => <ServicesList />, []);
  const memoizedHeroSection = useMemo(() => <HeroSection />, []);
  const memoizedAnalyticsOffering = useMemo(() => <AnalyticsOffering />, []);
  const memoizedCapabilitiesOffering = useMemo(() => <CapabilitiesOffering />, []);
  const memoizedCircularAnimation = useMemo(() => <CircularAnimation />, []);
  const memoizedCompanyLogos = useMemo(() => <CompanyLogos />, []);

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ padding: '50px' }}>
        {/* <AnimatedBackground /> */}
        <div style={{ padding: '10px 50px', borderRadius: '1%' }}>
          {memoizedServicesList}
        </div>
        {memoizedHeroSection}
        <section className="offerings">
          <div className="left-section">
            {memoizedAnalyticsOffering}
          </div>
          <div className="right-section">
            {memoizedCapabilitiesOffering}
            {memoizedCircularAnimation}
          </div>
        </section>
        {memoizedCompanyLogos}
      </div>
    </div>
  );
};

export default LandingContent;