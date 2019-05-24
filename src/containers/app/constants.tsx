import React from 'react';

export interface IRoutes {
  title: string;
  url: string;
  childrens: IRoutes[];
  component: React.ComponentType;
}

export const routes: IRoutes[] = [
  {
    title: 'React hooks',
    url: '/react-hooks',
    component: () => <span>React hooks</span>,
    childrens: [
      {
        title: 'useState',
        url: '/react-hooks/use-state',
        component: () => <span>useState</span>,
        childrens: [],
      },
    ],
  },
];

export const Routes: IRoutes[] = routes.reduce<IRoutes[]>(
  (value, route) => [...value, route, ...route.childrens],
  [],
);
