import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import useRouter from 'use-react-router';
import { Menu } from 'antd';
import { get, find } from 'lodash';
import { routes } from '../constants';
import styles from './NavBar.less';

const initialKey = get(routes, '[0].url', '');

const NavBar: React.FC = () => {
  const {
    location: { pathname },
  }: RouteComponentProps = useRouter();

  const selectedKey = get(
    routes.find(({ url }) => pathname === url) ||
      find(routes, { children: [{ pathname }] }),
    'url',
    initialKey,
  );

  return (
    <Menu
      className={styles.navbar}
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[initialKey]}
      selectedKeys={[selectedKey]}
    >
      {routes.map(({ title, url }) => (
        <Menu.Item key={url}>
          <Link to={url}>{title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default NavBar;
