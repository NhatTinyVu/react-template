import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Routes } from '../constants';
import Loading from '../loading';

const initialRoute = Routes[0];

const NavBar: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      {initialRoute && (
        <Route exact path="/" component={initialRoute.component} />
      )}
      {Routes.map(
        ({ url, component, childrens }): React.ReactNode => (
          <Route exact key={url} path={url} component={component} />
        ),
      )}
    </Switch>
  </Suspense>
);

export default NavBar;
