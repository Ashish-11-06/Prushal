import React, { useState, useEffect } from 'react'; 
import { useNavigate } from "react-router-dom";
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/PrushalLogo.png';

const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('');
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const navigate = useNavigate();

  const handleMenuItemClick = (path) => {
    if (path) {
      navigate(path);
      closeDrawer(); // Close drawer on navigation
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
    { key: '3', label: 'Products', path: '/products' },
    { key: '4', label: 'Success Stories', path: '/success-stories' },
    { key: '5', label: 'Case Studies', path: '/case-studies' },
    { key: '6', label: 'Culture', path: '/culture' },
    { key: '7', label: 'About us', path: '/about' },
    { key: '8', label: 'Contact us', path: '/contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    display: isMobile ? 'none' : 'flex',
    alignItems: 'center',
    zIndex: 1000,
  };

  const mobileButtonStyle = {
    backgroundColor: '#001529',
    color: 'white',
    border: 'none',
    display: isMobile ? 'block' : 'none',
    zIndex: 1000,
  };

  const menuItemStyle = (isHovered) => ({
    marginRight: '20px',
    color: isHovered ? 'black' : 'white',
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out',
  });

  const drawerWrapperStyle = {
    padding: '0px',
    zIndex: 1000,
  };

  return (
    <nav className="navbar" style={navbarStyle}>
  {/* Clickable logo linking to "/" */}
  <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
    <div style={logoStyle}></div>
  </div>

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
    {menuItems.map((item) => (
      <div
        key={item.key}
        style={{
          padding: '10px 0',
          fontSize: '16px',
          borderBottom: '1px solid #ddd',
          cursor: 'pointer'
        }}
        onClick={() => handleMenuItemClick(item.path)}
      >
        {item.label}
      </div>
    ))}
  </Drawer>
</nav>

  );
};

export default Navbar;
