import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { routes } from '../constants';
import styles from './NavBar.less';

const NavBar: React.FC = () => (
  <Menu
    className={styles.navbar}
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={[routes[0].url]}
  >
    {routes.map(({ title, url }) => (
      <Menu.Item key={url}>
        <Link to={url}>{title}</Link>
      </Menu.Item>
    ))}
  </Menu>
);

export default NavBar;
