import React from 'react';
import { Typography } from 'antd';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './Home1.css';
import ParticleBackground from '../Animation/VideoParticles';
import ImageComponent from './ImageComponent'; // Import the Image Component

const { Title } = Typography;

const letterData = [
  { letter: 'P', meaning: 'Pioneering' },
  { letter: 'R', meaning: 'Research and' },
  { letter: 'U', meaning: 'Upgrading' },
  { letter: 'S', meaning: 'Solutions for' },
  { letter: 'H', meaning: 'Holistic' },
  {
    letter: 'A',
    meaning: (
      <Typewriter
        words={['Automation and', 'Advancements in ', 'Accentuation']}
        loop={0} // Infinite loop
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000} // Delay before changing
      />
    ),
  },
  {
    letter: 'L',
    meaning: (
      <Typewriter
        words={['Leadership    _', 'Language Models', 'Leading-edge']}
        loop={0} // Infinite loop
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000} // Delay before changing
      />
    ),
  },
];

const Home1 = () => {
  return (
    <div className="background-video-container">
      {/* Particle Overlay */}
      <div className="particles-overlay">
        <ParticleBackground />
      </div>
<div className='image'>
 {/* Image Overlay */}
      <ImageComponent /> {/* Display the image component */}

</div>
     

      {/* Text Overlay */}
      <div className="text-overlay">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Title level={1} className="prushal-heading">
            <motion.div
              className="letters-container"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              {letterData.map((data, index) => (
                <motion.div
                  key={index}
                  className="letter-item"
                  variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <span className="big-letter">{data.letter}</span>{' '}
                  <span className="letter-meaning">{data.meaning}</span>
                </motion.div>
              ))}
            </motion.div>
          </Title>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 6 }}
        >
          <p className="paraText">
            We specialize in providing data-driven solutions for your business needs.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home1;
