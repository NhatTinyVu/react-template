import React from 'react';

export interface IRoutes {
  title: string;
  url: string;
  component: React.ComponentType;
  childrens?: IRoutes[];
}

export const routes: IRoutes[] = [
  {
    title: 'React hooks',
    url: '/react-hooks',
    component: React.lazy(() => import('src/containers/react-hooks')),
    childrens: [
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

export const Routes: IRoutes[] = routes.reduce<IRoutes[]>(
  (value, route) => [...value, route, ...((route && route.childrens) || [])],
  [],
);
