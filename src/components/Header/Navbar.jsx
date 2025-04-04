import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/PrushalLogo.png';

const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('');
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);

  const navigate = useNavigate();

  const handleMenuItemClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  const showDrawer = (title) => {
    setDrawerTitle(title);
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setDrawerTitle('');
  };

  const menuItems = [
    { key: '1', label: 'Home', path: '/' }, 
    { key: '2', label: 'Services', path: '/services' },
    { key: '3', label: 'Events and Stories', path: '/event-stories' },
    { key: '4', label: 'About', path: '/about' },
  ];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const mobileButton = document.querySelector('.menu-mobile-button');
    if (mobileButton) {
      if (!mediaQuery.matches) {
        mobileButton.style.display = 'none';
      }
    }
  }, []);

  // Inline Styles
  const navbarStyle = {
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 20px',
    background: 'linear-gradient(90deg, #2196f37a, #007676)',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    zIndex: 10000,
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    paddingLeft: '50px',
    height: '30px',
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

  const menuItemStyle = (isHovered) => ({
    marginRight: '20px',
    color: isHovered ? 'black' : 'white', // Change color on hover
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out',
  });

  const drawerWrapperStyle = {
    padding: '0px',
    zIndex: 1000,
  };

  return (
    <nav className="navbar" style={navbarStyle}>
      <div style={logoStyle}></div>

      {/* Desktop Menu */}
      <div className="menu-desktop" style={desktopMenuStyle}>
        {menuItems.map((item) => (
          <div
            key={item.key}
            style={menuItemStyle(hoveredMenuItem === item.key)}
            onClick={() => handleMenuItemClick(item.path)}
            onMouseEnter={() => setHoveredMenuItem(item.key)}
            onMouseLeave={() => setHoveredMenuItem(null)}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <Button
        className="menu-mobile-button"
        icon={<MenuOutlined />}
        onClick={() => showDrawer('Menu')}
        style={mobileButtonStyle}
      />

      {/* Drawer Menu */}
      <Drawer
        title={drawerTitle}
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
