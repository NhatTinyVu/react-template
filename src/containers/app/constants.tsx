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
      {
        title: 'useWhyDidYouUpdate',
        url: '/react-hooks/use-why-did-you-update',
        component: React.lazy(() =>
          import('src/containers/react-hooks/use-why-did-you-update'),
        ),
      },
      {
        title: 'useEffectAsync',
        url: '/react-hooks/use-safe-promise',
        component: React.lazy(() =>
          import('src/containers/react-hooks/use-effect-async'),
        ),
      },
    ],
  },
];

export const allRoutes: Route[] = routes.reduce<Route[]>(
  (value, route) => [...value, route, ...((route && route.children) || [])],
  [],
);
