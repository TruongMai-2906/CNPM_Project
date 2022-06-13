import React from 'react';
import styles from './banner.module.scss';
export interface BannerProps {}

export interface DataType {}

const Banner:React.FC = () => {
  return(
    <div className={styles["banner"]}>
              <button className={styles["button-banner"]}>Watch Trailer</button>
    </div>
  )
}


export default Banner;