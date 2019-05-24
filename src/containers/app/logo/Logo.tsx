import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.less';

const Logo: React.FC = () => (
  <Link to="/">
    <div className={styles.logo}>
      <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo" />
    </div>
  </Link>
);

export default Logo;
