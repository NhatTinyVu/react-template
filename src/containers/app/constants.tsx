import React from 'react';

export interface Route {
  title: string;
  url: string;
  component: React.ComponentType;
  children?: Route[];
}

export const routes: Route[] = [
  {
    title: 'React hooks',
    url: '/react-hooks',
    component: React.lazy(() => import('src/containers/react-hooks')),
    children: [
      {
        title: 'useState',
        url: '/react-hooks/use-state',
        component: React.lazy(() =>
          import('src/containers/react-hooks/use-state'),
        ),
      },
    ],
  },
];

export const allRoutes: Route[] = routes.reduce<Route[]>(
  (value, route) => [...value, route, ...((route && route.children) || [])],
  [],
);
