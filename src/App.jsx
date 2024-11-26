import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import HeaderComponent from './components/Header';
import LandingContent from './components/LandingContent';
import FooterComponent from './components/Footer';
import './App.css';

const { Content } = Layout;

const App = () => {
  const theme = {
    token: {
      colorPrimary: '#2F2F9E', // Primary color
      colorBgContainer: '#009EDB', // Background color for containers
      colorText: '#000', // Text color
    },
  };

  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <HeaderComponent />
        <Content>
          <LandingContent />
        </Content>
        <FooterComponent />
      </Layout>
    </ConfigProvider>
  );
};

export default App;