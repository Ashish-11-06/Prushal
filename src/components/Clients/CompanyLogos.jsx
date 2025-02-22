import React from 'react';
import './CompanyLogos.css'; // Importing CSS for styling

// Importing images
import img1 from "../../assets/Clients/1.png";
import img2 from "../../assets/Clients/2.png";
import img3 from "../../assets/Clients/3.png";
import img4 from "../../assets/Clients/4.png";
import img5 from "../../assets/Clients/5.png";
import img6 from "../../assets/Clients/6.png";
import img7 from "../../assets/Clients/7.png";
import img8 from "../../assets/Clients/8.png";
import img9 from "../../assets/Clients/9.png";
import img10 from "../../assets/Clients/10.png";
import img11 from "../../assets/Clients/11.png";
import img12 from "../../assets/Clients/12.png";
import img13 from "../../assets/Clients/13.png";
import img14 from "../../assets/Clients/14.png";
import img15 from "../../assets/Clients/15.png";
import img16 from "../../assets/Clients/16.png";
import img17 from "../../assets/Clients/17.png";
import img18 from "../../assets/Clients/18.png";
import img19 from "../../assets/Clients/19.png";
import img20 from "../../assets/Clients/20.png";

// Logos array with the imported images
const logos = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15,
  img16, img17, img18, img19, img20
];

const CompanyLogos = () => {
  // Split the logos array into two parts (for two lines)
  const firstLineLogos = logos.slice(0, 10);  // First 10 logos
  const secondLineLogos = logos.slice(10, 20); // Last 10 logos

  return (
    <div className="company-logos-container">
      {/* First line of logos with CSS animation */}
      <div className="logos-line scroll-left">
        {firstLineLogos.concat(firstLineLogos).map((logo, index) => (
          <img src={logo} className="logo-img" alt={`Logo ${index + 1}`} key={index} />
        ))}
      </div>

      {/* Second line of logos with CSS animation */}
      <div className="logos-line scroll-right">
        {secondLineLogos.concat(secondLineLogos).map((logo, index) => (
          <img src={logo} className="logo-img" alt={`Logo ${index + 11}`} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
