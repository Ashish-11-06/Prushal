import React, { useState } from 'react';
import { Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  // Function to show the drawer
  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  // Function to close the drawer
  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  // Menu items for the navigation bar
  const menuItems = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'Services' },
    { key: '3', label: 'Capabilities' },
    { key: '4', label: 'About' },
    { key: '5', label: 'Contact' },
  ];

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="logo" style={logoStyle}>
        MySite
      </div>

      {/* Desktop Menu */}
      <div className="menu-desktop" style={desktopMenuStyle}>
        {menuItems.map((item) => (
          <div key={item.key} style={menuItemStyle}>
            {item.label}
          </div>
        ))}
      </div>

      {/* Button to open the drawer */}
      <Button
        className="menu-mobile-button"
        icon={<MenuOutlined />}
        onClick={showDrawer}
        style={mobileButtonStyle}
      />

      {/* Drawer Menu below the navbar */}
      <Drawer
        title="Menu"
        placement="top"  // Change placement to "bottom" for the drawer to slide down
        closable
        onClose={closeDrawer}
        open={isDrawerVisible}
        bodyStyle={drawerBodyStyle}
        style={drawerStyle}
      >
        <Menu mode="vertical">
          {menuItems.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </nav>
  );
};

// Inline Styles
const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#001529',
  zIndex: 10, // Ensure navbar is on top
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
  zIndex: 1000, 
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

const drawerBodyStyle = {
  padding: 0,
};

const drawerStyle = {
  zIndex: 1000, // Ensure drawer appears above the content
  position: 'absolute', // Absolute positioning for the drawer to control placement
};

export default Navbar;
