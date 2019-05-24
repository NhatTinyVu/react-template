import React from 'react';
import { Layout, Icon } from 'antd';
import styles from './Footer.less';

const Footer: React.FC = () => (
  <Layout.Footer className={styles.footer}>
    <a href="https://github.com/NhatTinyVu/react-template">
      <Icon type="github" />
      &nbsp;Github
    </a>
  </Layout.Footer>
);

export default Footer;
