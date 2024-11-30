import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ImageComponent.css';
import image2 from '../../assets/home1/Hand.png';
import image3 from '../../assets/home1/roboHeadphone.png';
import image4 from '../../assets/home1/bird.png';

const images = [image2, image3, image4];

const ImageComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="image-container">
      <AnimatePresence>
        <motion.div
          key={currentImageIndex}
          className={`image-wrapper image-${currentImageIndex}`} // Apply a unique class based on the index
        >
          <motion.img
            src={images[currentImageIndex]}
            alt="Sample"
            className="overlay-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5 }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImageComponent;
