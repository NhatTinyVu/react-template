import React from 'react';

export interface IRoutes {
  title: string;
  url: string;
  childrens: IRoutes[];
  component: React.ComponentType;
}
