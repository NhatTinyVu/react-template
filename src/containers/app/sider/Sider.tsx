import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { routes } from '../constants';

const Sider: React.FC = () => (
  <Layout.Sider>
    <Menu mode="inline" defaultSelectedKeys={[routes[0].url]}>
      {routes.map(({ title, url, childrens }) => (
        <Menu.SubMenu key={url} title={<Link to={url}>{title}</Link>}>
          {childrens.map(route => (
            <Menu.Item key={route.url}>{route.title}</Menu.Item>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  </Layout.Sider>
);

export default Sider;
