import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Loading from '../../components/loading';
import styles from './App.less';

const { Header, Footer, Content } = Layout;

const App: React.FC = () => (
  <Layout className={styles.layout}>
    <Header>
      <div className={styles.logo}>
        <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo" />
      </div>
      <Menu className={styles.navbar} theme="dark" mode="horizontal">
        <Menu.Item key="1">React Hooks</Menu.Item>
      </Menu>
    </Header>
    <Content className={styles.content}>
      <Layout className={styles.page}>
        <Router>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route
                exact
                path="/"
                component={React.lazy(() => import('../../components/loading'))}
              />
            </Switch>
          </Suspense>
        </Router>
      </Layout>
    </Content>
    <Footer className="text-center">
      <a href="https://github.com/NhatTinyVu/react-template">React Template</a>
    </Footer>
  </Layout>
);

export default App;
