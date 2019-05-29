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
        title: 'useEventListener',
        url: '/react-hooks/use-event-listener',
        component: React.lazy(() =>
          import('src/containers/react-hooks/use-event-listener'),
        ),
      },
    ],
  },
];

export const allRoutes: Route[] = routes.reduce<Route[]>(
  (value, route) => [...value, route, ...((route && route.children) || [])],
  [],
);
