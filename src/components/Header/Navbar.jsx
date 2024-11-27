import React from 'react';
import { Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Navbar.css';
import CustomMenuItem from './CustomMenuItem';

const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  const menuItems = [
    {
      key: '1',
      label: 'Home',
      children: [
        { key: '1-1', label: 'Industries' },
        { key: '1-2', label: 'Banking' },
        { key: '1-3', label: 'Healthcare' },
        { key: '1-4', label: 'Education' },
        { key: '1-5', label: 'Manufacturing' },
        { key: '1-6', label: 'Finance' },
        { key: '1-7', label: 'FMCG' },
        { key: '1-8', label: 'Energy' },
      ],
    },
    {
      key: '2',
      label: 'Services',
      children: [
        { key: '2-1', label: 'Application Services' },
        { key: '2-2', label: 'Automation' },
        { key: '2-3', label: 'Business Process Services' },
        { key: '2-4', label: 'Cloud' },
        { key: '2-5', label: 'Data and AI' },
        { key: '2-6', label: 'Software Engineering' },
        { key: '2-7', label: 'Internet of Things' },
      ],
    },
    { key: '3', label: 'Capabilities' },
    {
      key: '4',
      label: 'About',
      children: [{ key: '4-1', label: 'Careers' }],
    },
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
          <div
            key={item.key}
            style={{
              position: 'relative',
              marginRight: '20px', // Space between menu items
            }}
          >
            <CustomMenuItem item={item} />
            {item.children && (
              <div
                className="submenu"
                style={submenuStyle}
              >
                {item.children.map((child) => (
                  <div key={child.key} style={submenuItemStyle}>
                    {child.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <Button
        className="menu-mobile-button"
        icon={<MenuOutlined />}
        onClick={showDrawer}
        style={mobileButtonStyle}
      />

      {/* Drawer Menu */}
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={closeDrawer}
        open={isDrawerVisible}
      >
        <Menu mode="vertical" items={menuItems} />
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
};

const logoStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'white',
};

const desktopMenuStyle = {
  display: 'flex',
  alignItems: 'center',
};

const mobileButtonStyle = {
  backgroundColor: '#001529',
  color: 'white',
};

const submenuStyle = {
  position: 'absolute',
  top: '100%',
  left: '0',
  backgroundColor: '#fff',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '10px',
  display: 'none', // Hide by default, show on hover
};

const submenuItemStyle = {
  padding: '5px 10px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
};

// Show submenu on hover
document.addEventListener('mouseover', (e) => {
  if (e.target.closest('.menu-desktop div')) {
    const submenu = e.target.closest('.menu-desktop div').querySelector('.submenu');
    if (submenu) submenu.style.display = 'block';
  }
});

document.addEventListener('mouseout', (e) => {
  if (e.target.closest('.menu-desktop div')) {
    const submenu = e.target.closest('.menu-desktop div').querySelector('.submenu');
    if (submenu) submenu.style.display = 'none';
  }
});

export default Navbar;
