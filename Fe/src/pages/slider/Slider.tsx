import React, { useRef, useState } from "react";
// Import Swiper React components
import styles from "./slider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  faFilter,
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";
export interface imgList {
  img: String;
}
// SwiperCore.use([Navigation, Autoplay, Pagination]);
export default function Slider() {
  const list = [
    {
      img: "https://www.w3schools.com/w3css/img_lights.jpg",
    },
    {
      img: "https://www.w3schools.com/w3css/img_lights.jpg",
    },
    {
      img: "https://www.w3schools.com/w3css/img_lights.jpg",
    },
    {
      img: "https://www.w3schools.com/w3css/img_lights.jpg",
    },
    {
      img: "https://www.w3schools.com/w3css/img_lights.jpg",
    },
    {
      img: "https://www.w3schools.com/w3css/img_lights.jpg",
    },
    {
      img: "https://www.w3schools.com/w3css/img_lights.jpg",
    },
    {
      img: "https://www.w3schools.com/w3css/img_lights.jpg",
    },
    {
      img: "https://www.w3schools.com/w3css/img_lights.jpg",
    },
    {
      img: "https://www.w3schools.com/w3css/img_lights.jpg",
    },
  ];
  const listTitle = [
    {
      img: "HUMANS BEHIND THE GAME",
    },
    {
      img: "Join the game",
    },
    {
      img: "Join the game",
    },
    {
      img: "Join the game",
    },
    {
      img: "Join the game",
    },
    {
      img: "Join the game",
    },
    {
      img: "Join the game",
    },
    {
      img: "Join the game",
    },
    {
      img: "Join the game",
    },
    {
      img: "Join the game",
    },
  ];
  const contents = [
    {
      name: " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
    },
    {
      name: " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
    },
    {
      name: " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
    },
    {
      name: " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
    },
    {
      name: " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
    },
    {
      name: " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
    },
    {
      name: " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
    },
    {
      name: " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
    },
    {
      name: " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
    },
    {
      name: " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
    },
  ];
  const [currentEvent, setCurrentEvent] = useState(0);
  return (
    <>
      <div className={styles["container"]}>
        {" "}
        <div className={styles["wrapper"]}>
          <div className={styles["wrapper-left"]}>
            {" "}
            <div className={styles["title-header"]}>Our Latest News</div>
            <div className={styles["content-header"]}>
              Check out what’s new at Gameloft! Deep dive into the latest news
              on your <br></br>favorite games, as well as stories from
              Gamelofters all over the world.
            </div>
          </div>

          <div className={styles["wrapper-right"]}>
            <div className={styles["wrapper-right__filter"]}>
              <button className={styles["wrapper-right__filter-btn"]}>
                <div>
                  <FontAwesomeIcon
                    className={styles["wrapper-right__filter-btn__icon"]}
                    icon={faFilter}
                  ></FontAwesomeIcon>{" "}
                  Filter
                </div>
                <span>
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </span>
              </button>
            </div>
            <div className={styles["wrapper-right__search"]}>
              <input className={styles["wrapper-right__search__input"]} />
              <FontAwesomeIcon
                className={styles["wrapper-right__search__input-icon"]}
                icon={faMagnifyingGlass}
              />
            </div>
          </div>
        </div>
        <Swiper
          cssMode={true}
          navigation={true}
          spaceBetween={30}
          slidesPerView={4}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className={styles.swiper}
          onInit={(swiper) => {
            setCurrentEvent(swiper.activeIndex);
            console.log("first");
          }}
          // onSlideChange={(swiper) => {
          //   setCurrentEvent(swiper.activeIndex);
          // }}
          onSlideChange={() => console.log("slide change")}

          // onSwiper={(swiper) => console.log(swiper)}
        >
          {list.map((item, i) => {
            return (
              <>
                <SwiperSlide key={i} className={styles["wiper-slide"]}>
                  <div className={styles["wiper-slide_wrapper"]}>
                    <div className={styles["wiper-slide_wrapper-header"]}>
                      {listTitle[i].img}
                      <div>-----------------</div>
                      <div>{contents[i].name}</div>
                    </div>

                    <div>
                      <img
                        className={styles["wiper-slide_wrapper__img"]}
                        src={item.img}
                      ></img>
                    </div>
                    <div className={styles["wiper-slide_wrapper--pink"]}></div>
                    <div className={styles["wiper-slide_wrapper__title"]}>
                      {listTitle[i].img}
                    </div>
                    <div className={styles["wiper-slide_wrapper-footer"]}>
                      <button
                        className={styles["wiper-slide_wrapper-footer__btn"]}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
