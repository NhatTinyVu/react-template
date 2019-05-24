import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '../constants';
import Loading from '../loading';

const NavBar: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {routes.map(
        ({ url, component }): React.ReactNode => (
          <Route exact key={url} path={url} component={component} />
        ),
      )}
    </Switch>
  </Suspense>
);

export default NavBar;
