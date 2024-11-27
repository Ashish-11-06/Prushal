// src/components/Header.js

import React from 'react';
import { Layout, Menu } from 'antd';
import './Header.css';  // Optional: Add a separate CSS file for styling
import Navbar from './Header/NavBar';

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
  <>
  <Navbar />
   
   
  </>
   
  );
};

export default HeaderComponent;
