import React, { useRef, useState } from "react";
// Import Swiper React components
import styles from "./slider.module.scss";
import "./NewProduct.scss";
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
import { useCheckMobileScreen } from "./customHook.ts";
export interface sliceNewProduct {
  title: string;
  description: string;
  newsList: {
    title: string;
    background: string;
    description: string;
    readMoreLink: string;
  }[];
  filters: {
    title: string;
  }[];
  search: string;
}
// SwiperCore.use([Navigation, Autoplay, Pagination]);
const Slice: React.FC<sliceNewProduct> = (props) => {
  const useCustom = useCheckMobileScreen(768);
  const image: string = "https://www.w3schools.com/w3css/img_lights.jpg";
  const dataSlice: sliceNewProduct = {
    title: "Our Latest News",
    description: `Check out what’s new at Gameloft! Deep dive into the latest news on your  <br />favorite games, as well as stories from Gamelofters all over the world.`,

    newsList: [
      {
        title: "HUMANS BEHIND THE GAME",
        background: image,
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: image,
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: image,
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: image,
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: image,
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: image,
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: image,
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: image,
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: image,
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: image,
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
    ],
    filters: [
      {
        title: "facebook",
      },
      {
        title: "facebook",
      },
      {
        title: "facebook",
      },
    ],
    search: "Search",
  };

  const [currentEvent, setCurrentEvent] = useState(0);
  return (
    <>
      <div className="newProduct">
        {" "}
        <div className="newProduct-wrapper">
          <div className="newProduct-wrapper-left">
            {" "}
            <div className="title-header">
              {props?.title || dataSlice?.title || ""}
            </div>
            <div
              className="content-header"
              dangerouslySetInnerHTML={{
                __html: props?.description || dataSlice?.description || "",
              }}
            ></div>
          </div>

          <div className="newProduct-wrapper-right">
            <div className="wrapper-right__filter">
              <button className="wrapper-right__filter-btn">
                <div>
                  <FontAwesomeIcon
                    className="wrapper-right__filter-btn__icon"
                    icon={faFilter}
                  ></FontAwesomeIcon>{" "}
                  Filter
                </div>
                <span>
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </span>
              </button>
            </div>
            <div className="wrapper-right__search">
              <input
                className="wrapper-right__search__input"
                placeholder={props?.search || dataSlice?.search || ""}
              />
              <FontAwesomeIcon
                className="wrapper-right__search__input-icon"
                icon={faMagnifyingGlass}
              />
            </div>
          </div>
        </div>
        <Swiper
          cssMode={true}
          // navigation={true}
          spaceBetween={30}
          slidesPerView={useCustom ? 2 : 4}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          watchOverflow={true}
          // centeredSlides={true}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: true,
          // }}
          modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
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
          {dataSlice.newsList &&
            dataSlice?.newsList?.map((item, i) => {
              return (
                <>
                  <SwiperSlide key={i} className="newProduct-wiper">
                    <div className={styles["wiper-slide_wrapper"]}>
                      <div className={styles["wiper-slide_wrapper-header"]}>
                        {props.title || item.title || ""}
                        <div>-----------------</div>
                        <div
                          className={styles["wiper-slide_wrapper-header__name"]}
                        >
                          {props.description || item.description || ""}
                        </div>
                      </div>

                      <div>
                        <img
                          className={styles["wiper-slide_wrapper__img"]}
                          src={item.background || ""}
                        ></img>
                      </div>
                      <div
                        className={styles["wiper-slide_wrapper--pink"]}
                      ></div>
                      <div className={styles["wiper-slide_wrapper__title"]}>
                        {props.title || item.title || ""}
                      </div>
                      <div className={styles["wiper-slide_wrapper-footer"]}>
                        <button
                          className={styles["wiper-slide_wrapper-footer__btn"]}
                        >
                          {item.readMoreLink || ""}
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
};
export default Slice;
