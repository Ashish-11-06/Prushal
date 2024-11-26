// src/components/Header.js

import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const HeaderComponent = () => {
  // Define the menu items as an array of objects
  const items = [
    { key: '1', label: 'Home' },
    { key: '2', label: 'About' },
    { key: '3', label: 'Services' },
    { key: '4', label: 'Contact' },
  ];

  return (
    <Header>
      <div className="logo" />
      {/* Use the items prop for the Menu component */}
      <Menu theme="dark" mode="horizontal" items={items} />
    </Header>
  );
};

export default HeaderComponent;