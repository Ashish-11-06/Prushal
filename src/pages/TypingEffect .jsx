import React, { useState, useEffect } from 'react';

/**
 * TypingEffect
 * @param {string} direction - "right" (default) or "left"
 */
const TypingEffect = ({ direction = "right" }) => {
  // Choose symbols based on direction
  const symbols = direction === "right" ? '»»»»»»»»' : '««««««««';
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(1);
  const typingSpeed = 300;
  const pauseTime = 800;

  useEffect(() => {
    let timer;
    if (index <= symbols.length) {
      timer = setTimeout(() => {
        setDisplayed(symbols.substring(0, index));
        setIndex(index + 1);
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setIndex(1);
      }, pauseTime);
    }
    return () => clearTimeout(timer);
  }, [index, symbols]);

  // Reset animation if direction changes
  useEffect(() => {
    setDisplayed('');
    setIndex(1);
  }, [direction]);

  return (
    <span
      style={{
        fontSize: 28,
        color: '#007676',
        marginLeft: direction === "right" ? 8 : 0,
        marginRight: direction === "left" ? 8 : 0,
        letterSpacing: 1,
        userSelect: "none",
      }}
      aria-hidden="true"
    >
      {displayed}
    </span>
  );
};

export default TypingEffect;
