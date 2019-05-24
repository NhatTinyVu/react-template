import React from 'react';
import { Layout } from 'antd';
import styles from './Footer.less';

const Footer: React.FC = () => (
  <Layout.Footer className={styles.footer}>
    <a href="https://github.com/NhatTinyVu/react-template">React Template</a>
  </Layout.Footer>
);

export default Footer;
