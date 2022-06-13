import React, { useRef, useState } from "react";

import "./Store.scss";
export interface HeaderProps {}

const Store: React.FC<HeaderProps> = (props) => {
  return (
    <div className="store_container">
      <div className="store_container_main">
        <a className="store_container_main_item">
          <img
            nview-src="//media01.gameloft.com/web_mkt/global-store-badges-v2/appstore/EN.png?v=3"
            src="//media01.gameloft.com/web_mkt/global-store-badges-v2/appstore/EN.png?v=3"
            className="icon-bagde"
            alt=""
          />
        </a>
        <a className="store_container_main_item">
        <img inview-src="//media01.gameloft.com/web_mkt/global-store-badges-v2/googleplay/EN.png?v=3" src="//media01.gameloft.com/web_mkt/global-store-badges-v2/googleplay/EN.png?v=3" className="icon-bagde" alt=""/>
        </a>
        <a className="store_container_main_item">
        <img inview-src="//media01.gameloft.com/web_mkt/global-store-badges-v2/windowstore/EN.png?v=3" src="//media01.gameloft.com/web_mkt/global-store-badges-v2/windowstore/EN.png?v=3" className="icon-bagde" alt=""/>
        </a>
        <a className="store_container_main_item">
        <img inview-src="http://asphaltlegends.com/index.php/mirror_asphaltos/assets/os/dist/images/home/nintendo-eshop-btn.jpg" src="https://media01.gameloft.com/web_mkt/minisites/asphalt-9/assets/os/dist/images/home/nintendo-eshop-btn.jpg" className="icon-bagde" alt=""/>
        </a>
        <a className="store_container_main_item">
        <img inview-src="https://media01.gameloft.com/web_mkt/minisites/asphalt-9/assets/os/dist/images/home/galaxy-badge.png" src="https://media01.gameloft.com/web_mkt/minisites/asphalt-9/assets/os/dist/images/home/galaxy-badge.png" className="icon-bagde" alt="" height="48"/>
        </a>
        <a className="store_container_main_item">
        <img src="https://media01.gameloft.com/web_mkt/minisites/asphalt-9/assets/img/badges/huawei-store.png" className="icon-bagde" alt="" height="48"/>
        </a>
      </div>
    </div>
  );
};

export default Store;
