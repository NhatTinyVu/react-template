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
    url: '/',
    childrens: [],
    component: () => null,
  },
];
