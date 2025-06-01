import React, { useState, useEffect, useRef } from 'react'; 
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../../assets/PrushalLogo.png';

const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const productsRef = useRef(null);
  const aboutRef = useRef(null);

  const activeMenuItem = location.pathname;

  // Handle outside click for dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productsRef.current &&
        !productsRef.current.contains(event.target) &&
        aboutRef.current &&
        !aboutRef.current.contains(event.target)
      ) {
        setProductsDropdownOpen(false);
        setAboutDropdownOpen(false);
      }
      // If clicking on one dropdown, close the other
      if (
        productsRef.current &&
        productsRef.current.contains(event.target)
      ) {
        setAboutDropdownOpen(false);
      }
      if (
        aboutRef.current &&
        aboutRef.current.contains(event.target)
      ) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuItemClick = (path) => {
    if (path) {
      navigate(path);
      closeDrawer();
      setProductsDropdownOpen(false);
      setAboutDropdownOpen(false);
    }
  };

  const showDrawer = (title) => {
    setDrawerTitle(title);
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setDrawerTitle('');
    setProductsDropdownOpen(false);
    setAboutDropdownOpen(false);
  };

  const productsSubmenu = [
    { key: '3-1', label: 'Products', path: '/products' },
    { key: '3-2', label: 'Projects', path: '/projects' },
    { key: '3-3', label: 'Partners & Associates', path: '/partners' },
  ];

  const aboutSubmenu = [
    { key: '8-1', label: 'Who We Are', path: '/about' },
    { key: '8-2', label: 'Culture', path: '/culture' },
    { key: '8-3', label: 'Our Team', path: '/team' },
    { key: '8-4', label: 'Awards & Recognition', path: '/awards' },
  ];

  const menuItems = [
    { key: '1', label: 'Home', path: '/' }, 
    { key: '2', label: 'Services', path: '/services' },
    { key: '3', label: 'Solutions', submenu: productsSubmenu },
    { key: '4', label: 'Case Studies', path: '/case-studies' },
    { key: '5', label: 'Success Stories', path: '/success-stories' },
    { key: '6', label: 'Resources', path: '/resources' },
    { key: '7', label: 'About us', submenu: aboutSubmenu },
    { key: '8', label: 'Contact us', path: '/contact' },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setProductsDropdownOpen(false);
        setAboutDropdownOpen(false);
      }
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

  const menuItemStyle = (path, isActive = false) => ({
    marginRight: '20px',
    color: 'white',
    cursor: 'pointer',
    transition: 'color 0.3s ease-in-out',
    borderBottom: (activeMenuItem === path || isActive) ? '2px solid white' : 'none',
    position: 'relative',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
  });

  // Helper to check if any Solutions submenu is active
  const isSolutionsActive = () => {
    return productsSubmenu.some(subitem => activeMenuItem.startsWith(subitem.path));
  };

  const isAboutActive = () => {
    return aboutSubmenu.some(subitem => activeMenuItem.startsWith(subitem.path));
  };

  const caretStyle = (isOpen) => ({
    marginLeft: '6px',
    fontSize: '12px',
    userSelect: 'none',
    transition: 'transform 0.3s ease',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  });

  const submenuStyle = {
    position: 'absolute',
    top: 'calc(100% + 5px)',
    left: 0,
    background: 'linear-gradient(to right, #2898A8, #23889B)',
    padding: '8px 0',
    borderRadius: '0 0 4px 4px',
    minWidth: '160px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
    zIndex: 10000,
  };

  const submenuItemStyle = (path) => ({
    padding: '8px 20px',
    color: activeMenuItem === path ? 'white' : 'white',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.3s ease, text-decoration 0.3s ease',
    textDecoration: activeMenuItem === path ? 'underline' : 'none',
    textDecorationThickness: activeMenuItem === path ? '2px' : '0',
    paddingBottom: activeMenuItem === path ? '5px' : '0',
  });

  const drawerWrapperStyle = {
    padding: '0px',
    zIndex: 1000,
  };

  return (
    <nav className="navbar" style={navbarStyle}>
      {/* Logo */}
      <div style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        <div style={logoStyle}></div>
      </div>

      {/* Desktop Menu */}
      <div className="menu-desktop" style={desktopMenuStyle}>
        {menuItems.map((item) => {
          if (item.submenu) {
            const isSolutions = item.label === 'Solutions';
            const isAbout = item.label === 'About us';
            const dropdownOpen = isSolutions ? productsDropdownOpen : aboutDropdownOpen;
            const setDropdownOpen = isSolutions ? setProductsDropdownOpen : setAboutDropdownOpen;
            const isActive = isSolutions ? isSolutionsActive() : isAboutActive();
            const ref = isSolutions ? productsRef : aboutRef;

            return (
              <div
                key={item.key}
                ref={ref}
                style={menuItemStyle(item.path, isActive)}
                onClick={() => {
                  setDropdownOpen(!dropdownOpen);
                  // Only one dropdown open at a time
                  if (isSolutions) setAboutDropdownOpen(false);
                  if (isAbout) setProductsDropdownOpen(false);
                }}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span>{item.label}</span>
                <span style={caretStyle(dropdownOpen)}>⮟</span>
                {dropdownOpen && (
                  <div style={submenuStyle}>
                    {item.submenu.map((subitem) => (
                      <div
                        key={subitem.key}
                        style={submenuItemStyle(subitem.path)}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMenuItemClick(subitem.path);
                          setDropdownOpen(false);
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(64, 169, 255, 0.2)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        {subitem.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          } else {
            // Normal menu items
            return (
              <div
                key={item.key}
                style={menuItemStyle(item.path)}
                onClick={() => handleMenuItemClick(item.path)}
              >
                {item.label}
              </div>
            );
          }
        })}
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
          <div key={item.key}>
            <div
              style={{
                padding: '10px 0',
                fontSize: '16px',
                borderBottom: '1px solid #ddd',
                cursor: 'pointer',
                fontWeight: activeMenuItem === item.path ? 'bold' : 'normal',
              }}
              onClick={() => {
                if (!item.submenu) {
                  handleMenuItemClick(item.path);
                }
              }}
            >
              {item.label}
            </div>
            {/* Submenu in drawer */}
            {item.submenu && (
              <div style={{ paddingLeft: '20px', backgroundColor: '#f0f0f0' }}>
                {item.submenu.map((subitem) => (
                  <div
                    key={subitem.key}
                    style={{
                      padding: '8px 0',
                      fontSize: '15px',
                      borderBottom: '1px solid #ddd',
                      cursor: 'pointer',
                      fontWeight: activeMenuItem === subitem.path ? 'bold' : 'normal',
                      color: activeMenuItem === subitem.path ? '#1890ff' : 'black',
                    }}
                    onClick={() => handleMenuItemClick(subitem.path)}
                  >
                    {subitem.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </Drawer>
    </nav>
  );
};

export default Navbar;
