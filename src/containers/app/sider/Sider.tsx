import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import useRouter from 'use-react-router';
import { get } from 'lodash';
import { Layout, Menu } from 'antd';
import { routes, Routes } from '../constants';

const initialKey = get(routes, '[0].url', '');

const Sider: React.FC = () => {
  const {
    location: { pathname },
  }: RouteComponentProps = useRouter();

  const selectedKey = get(
    Routes.find(({ url }) => url === pathname),
    'url',
    initialKey,
  );

  return (
    <Layout.Sider>
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[initialKey]}
        selectedKeys={[selectedKey]}
      >
        {routes.map(({ title, url, childrens }) => (
          <Menu.SubMenu key={url} title={<Link to={url}>{title}</Link>}>
            {childrens &&
              childrens.map(route => (
                <Menu.Item key={route.url}>
                  <Link to={route.url}>{route.title}</Link>
                </Menu.Item>
              ))}
          </Menu.SubMenu>
        ))}
      </Menu>
    </Layout.Sider>
  );
};

export default Sider;
