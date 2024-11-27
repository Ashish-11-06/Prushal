import React from 'react';
import { Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './Navbar.css';

const Navbar = () => {
  const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  const menuItems = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'About' },
    { key: '3', label: 'Services' },
    { key: '4', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="logo">MySite</div>
      <div className="menu-desktop">
        <Menu mode="horizontal" items={menuItems} />
      </div>
      <Button
        className="menu-mobile-button"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
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

export default Navbar;
