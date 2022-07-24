import React, { useEffect, useState } from 'react';
import styles from './ListGame.module.scss';
// import Banner from '../../assets/images/home/listgame-banner.jpg';
import Banner from '../../assets/images/home/listgamebanner.jpg';
import Thumb from '../../assets/images/home/game1-thumb.jpg';
import { Link } from 'react-router-dom';
import { post } from 'utilities/api';
import query from './query';
import { SImage } from 'types/types';


export interface ListGameProps { }

export interface ListGameDataType {
  list: GameDataType[];
}

export interface GameDataType {
  slug: string;
  name: string;
  thumbnail: SImage;
}

const ListGame: React.FC<ListGameProps> = (props) => {

  const [data, setData] = useState<ListGameDataType>();

  useEffect(() => {
    const initData = async () => {
      const data = await post("http://localhost:1337/graphql", {
        query: query,
      });
      setData({list: data.data.data.homepages});
    };
    initData();
  }, []);

  console.log("list game thumb:", data);
  


  return (
    <div className={styles['root']}>
      <div className={styles['banner']}>
        <img className={styles['banner-background']} src={Banner} alt="background" />
        <div className={styles['banner-content']}>
          <div className={styles['banner-title']}>
            Games
          </div>
          <div className={styles['banner-subtitle']}>
            Find the latest games and enjoy it
          </div>
        </div>
      </div>
      <div className={styles['listgame']}>
        {
          data?.list?.map((game, index) => 
            <div className={styles['game-container']}>
              <div className={styles['thumbnail-container']}>
                <img className={styles['thumbnail']} src={`http://localhost:1337${game.thumbnail?.url}` || Thumb} alt="background" />
                <Link to={`/${game.slug}`} className={styles['overlay']}>
                  <div className={styles['readmore-text']}>Explore More</div>
                </Link>
              </div>
              <div className={styles['game-title']}>{game.name}</div>
            </div>
          )}
      </div>
    </div>
  )
}

export default ListGame;