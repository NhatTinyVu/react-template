import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Loading from '../../components/loading';
import { IRoutes } from './types';
import styles from './App.less';

const { Header, Footer, Content } = Layout;

const routes: IRoutes[] = [
  {
    title: 'React hooks',
    url: '/',
    childrens: [],
    component: () => null,
  },
];

const App: React.FC = () => (
  <Router>
    <Layout className={styles.layout}>
      <Header>
        <div className={styles.logo}>
          <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo" />
        </div>
        <Menu
          className={styles.navbar}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[routes[0].url]}
        >
          {routes.map(({ title, url }) => (
            <Menu.Item key={url}>
              <Link className={styles.noStyle} to={url}>
                {title}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content className={styles.content}>
        <Layout className={styles.page}>
          <Suspense fallback={<Loading />}>
            <Switch>
              {routes.map(
                ({ url, component }): React.ReactNode => (
                  <Route exact key={url} path={url} component={component} />
                ),
              )}
            </Switch>
          </Suspense>
        </Layout>
      </Content>
      <Footer className="text-center">
        <a href="https://github.com/NhatTinyVu/react-template">
          React Template
        </a>
      </Footer>
    </Layout>
  </Router>
);

export default App;
