import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from 'antd';
import Logo from './logo';
import NavBar from './navbar';
import Sider from './sider';
import Pages from './pages';
import Footer from './footer';
import styles from './App.less';

const { Header, Content } = Layout;

const App: React.FC = () => (
  <Router>
    <Layout className={styles.layout}>
      <Header>
        <Logo />
        <NavBar />
      </Header>
      <Content className={styles.content}>
        <Layout className={styles.page}>
          <Sider />
          <Layout>
            <Pages />
            <Footer />
          </Layout>
        </Layout>
      </Content>
    </Layout>
  </Router>
);

export default App;
