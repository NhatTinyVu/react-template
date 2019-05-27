import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { allRoutes } from '../constants';
import Loading from '../loading';
import styles from './Pages.less';

const initialRoute = allRoutes[0];

const NavBar: React.FC = () => (
  <Layout className={styles.content}>
    <Suspense fallback={<Loading />}>
      <Switch>
        {initialRoute && (
          <Route exact path="/" component={initialRoute.component} />
        )}
        {allRoutes.map(
          ({ url, component }): React.ReactNode => (
            <Route exact key={url} path={url} component={component} />
          ),
        )}
      </Switch>
    </Suspense>
  </Layout>
);

export default NavBar;
