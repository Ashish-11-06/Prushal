import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageComponent.css';
import image2 from '../../assets/home1/Hand__New.png';
import image3 from '../../assets/home1/roboHeadphone__New.png';
import image4 from '../../assets/home1/bird__New.png';

const images = [image2, image3, image4];

const ImageComponent = () => {
  const [visibleImageIndex, setVisibleImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change visible image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="image-container">
      <AnimatePresence>
        {images.map((image, index) => (
          <motion.div
            key={index}
            className={`image-wrapper image-${index}`} // Apply a unique class based on the index
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: visibleImageIndex === index ? 1 : 0, scale: visibleImageIndex === index ? 1 : 0.9 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5 }}
            style={{ maxWidth: '100%', display: visibleImageIndex === index ? 'block' : 'none' }} // Ensure responsiveness
          >
            <motion.img
              src={image}
              alt={`Sample ${index}`}
              className="overlay-image"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ImageComponent;
