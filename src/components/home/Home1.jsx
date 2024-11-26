import React from 'react';
import './BackgroundVideo.css'; // Ensure you create the CSS for styling

const BackgroundVideo = () => {
  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src="your-video-url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="text-overlay">
        <h1>Your Branding Text Here</h1>
        <p>Subtext for additional branding or message</p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
