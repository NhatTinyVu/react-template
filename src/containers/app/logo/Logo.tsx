import React from 'react';
import styles from './Logo.less';

const Logo: React.FC = () => (
  <div className={styles.logo}>
    <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="logo" />
  </div>
);

export default Logo;
