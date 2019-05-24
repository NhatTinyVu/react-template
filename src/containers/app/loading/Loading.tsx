import React from 'react';
import { Spin, Icon } from 'antd';
import styles from './Loading.scss';

const Loading: React.FC = () => (
  <Spin
    className={styles.container}
    indicator={<Icon type="loading" className={styles.icon} spin />}
  />
);

export default Loading;
