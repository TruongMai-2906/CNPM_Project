import React from 'react';
import styles from './Banner.module.scss';

export interface BannerProps {}

export interface DataType {}

const Banner: React.FC<BannerProps> = (props) => (
  <div className={styles['root']}>Copyright by Truong ©</div>
);

export default Banner;