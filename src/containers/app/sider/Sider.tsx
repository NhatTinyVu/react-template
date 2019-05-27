import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import useRouter from 'use-react-router';
import { get } from 'lodash';
import { Layout, Menu, Icon } from 'antd';
import { routes, allRoutes } from '../constants';

const initialKey = get(routes, '[0].url', '');

interface ItemProps {
  title: string;
  url: string;
}

export const Item: React.FC<ItemProps> = ({ title, url }: ItemProps) => (
  <span>
    <Icon type="unordered-list" />
    <span>
      <Link to={url}>{title}</Link>
    </span>
  </span>
);

const Sider: React.FC = () => {
  const {
    location: { pathname },
  }: RouteComponentProps = useRouter();

  const selectedKey = get(
    allRoutes.find(({ url }) => url === pathname),
    'url',
    initialKey,
  );

  return (
    <Layout.Sider breakpoint="md" collapsedWidth="0">
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={[initialKey]}
        selectedKeys={[selectedKey]}
      >
        {routes.map(({ title, url, children }) => (
          <Menu.SubMenu key={url} title={<Item title={title} url={url} />}>
            {children &&
              children.map(route => (
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
