import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import './ImageComponent.css';

import image2 from '../../assets/home1/ai.png';
import image3 from '../../assets/home1/cloudcom.png';
import image4 from '../../assets/home1/web.png';
import image5 from '../../assets/home1/data1.png';
import image6 from '../../assets/home1/iot_transaprent.png';
import image7 from '../../assets/home1/app1.png';

const images = [
  { src: image2, text: "Empowering smarter decisions through intelligent AI solutions." },
  { src: image3, text: "Scalable cloud services for seamless digital transformation." },
  { src: image4, text: "Modern, responsive web solutions for every business." },
  { src: image5, text: "Turning raw data into powerful business insights." },
  { src: image6, text: "Connecting devices to drive real-time smart solutions." },
  { src: image7, text: "Robust application development for agile business growth." }
];

const ImageComponent = () => {
  const [visibleImageIndex, setVisibleImageIndex] = useState(0);
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typedInstance.current) {
      typedInstance.current.destroy();
    }

    if (typedRef.current) {
      typedRef.current.innerHTML = '';
      typedInstance.current = new Typed(typedRef.current, {
        strings: [images[visibleImageIndex].text],
        typeSpeed: 30,
        backSpeed: 20,
        loop: false,
        showCursor: false,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [visibleImageIndex]);

  return (
    <div className="image-container">
      <motion.div
        key={visibleImageIndex}
        className="image-wrapper"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.img
          src={images[visibleImageIndex].src}
          alt={`Slide ${visibleImageIndex}`}
          className="overlay-image"
        />
      </motion.div>
      <div className="typing-effect">
        <span ref={typedRef} />
      </div>
    </div>
  );
};

export default ImageComponent;
