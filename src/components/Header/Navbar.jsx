import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/PrushalLogo.png'

const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState(''); // Track the clicked menu item for drawer header

  // Function to show the drawer
  const showDrawer = (title) => {
    setDrawerTitle(title); // Set the clicked item as the drawer title
    setIsDrawerVisible(true);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setDrawerTitle(''); // Reset the title when closing the drawer
  };

  // Function to handle click on menu items for opening drawer
  const handleMenuItemClick = (item) => {
    if (item === 'Services' || item === 'About' || item === 'Capabilities') {
      showDrawer(item); // Show drawer with the title of the clicked item
    }
  };

  // Menu items for the navigation bar
  const menuItems = [
    { key: '1', label: '' },
    // { key: '2', label: 'Services' },
    // { key: '3', label: 'Capabilities' },
    // { key: '4', label: 'About' },
    // { key: '5', label: 'Contact' },
  ];

  // UseEffect to hide the mobile button on larger screens
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const mobileButton = document.querySelector('.menu-mobile-button');
    if (mobileButton) {
      if (!mediaQuery.matches) {
        mobileButton.style.display = 'none'; // Hide mobile button on larger screens
      }
    }
  }, []); // Empty dependency array ensures this runs only once after initial render

  
// Inline Styles
const navbarStyle = {
  position: 'sticky', // Sticky positioning
  top: 0, // Sticks to the top of the page
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 20px',
  background: 'linear-gradient(90deg, #2196f37a, #007676)', // Gradient background
  zIndex: 1000, // Ensures it stays above other elements
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow for better visibility
};


const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
  zIndex: 10000,
  display: 'flex',
  alignItems: 'center',
  backgroundImage: `url(${logo})`, // Use imported image
  backgroundSize: 'cover', // Adjusts image size to fit
  backgroundRepeat: 'no-repeat', // Prevents repeating
  backgroundPosition: 'left center', // Positions the image
  paddingLeft: '50px', // Adds space so text doesn't overlap with the logo
  height: '30px', // Adjusts the height of the logo container
};

const desktopMenuStyle = {
  display: 'flex',
  alignItems: 'center',
  zIndex: 1000,
};

const mobileButtonStyle = {
  backgroundColor: '#001529',
  color: 'white',
  border: 'none',
  zIndex: 1000,
};

const menuItemStyle = {
  zIndex: 1000,
  marginRight: '20px',
  color: 'white',
  cursor: 'pointer',
};

const drawerWrapperStyle = {
  padding: '0px',
  zIndex: 1000, 
};

return (
  <nav className="navbar" style={navbarStyle}>
   <div style={logoStyle}>
  
  </div>

    {/* Desktop Menu */}
    <div className="menu-desktop" style={desktopMenuStyle}>
      {menuItems.map((item) => (
        <div
          key={item.key}
          style={menuItemStyle}
          onClick={() => handleMenuItemClick(item.label)}
        >
          {item.label}
        </div>
      ))}
    </div>

    {/* Button to open the drawer (visible only on mobile) */}
    <Button
      className="menu-mobile-button"
      icon={<MenuOutlined />}
      onClick={() => showDrawer('Menu')} // Show generic title for mobile menu
      style={mobileButtonStyle}
    />

    {/* Drawer Menu */}
    <Drawer
      title={drawerTitle} // Dynamically set the drawer title
      placement="top"
      closable
      onClose={closeDrawer}
      open={isDrawerVisible}
      styles={{ wrapper: drawerWrapperStyle }}
    >
      {/* Initially, nothing is displayed in the drawer */}
    </Drawer>
  </nav>
);
};

export default Navbar;