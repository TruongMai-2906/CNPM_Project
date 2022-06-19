import React, { useRef, useState } from "react";
// Import Swiper React components
import "./NewProduct.scss";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
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
import { useCheckMobileScreen } from "./customHook";
export interface NewProduct {
  title?: string;
  description?: string;
  newsList?: {
    title: string;
    background: {
      url: string;
    };
    description: string;
    readMoreLink: string;
  }[];
  filters?: {
    title: string;
  }[];
  searchText?: string;
}
// SwiperCore.use([Navigation, Autoplay, Pagination]);
const NewProduct: React.FC<NewProduct> = (props) => {
  const [news, setNews] = useState<NewProduct>();
  const useCustom = useCheckMobileScreen(768);
  const image: string = "https://www.w3schools.com/w3css/img_lights.jpg";
  const dataSlice: NewProduct = {
    title: "Our Latest News",
    description: `Check out what’s new at Gameloft! Deep dive into the latest news on your  <br />favorite games, as well as stories from Gamelofters all over the world.`,

    newsList: [
      {
        title: "HUMANS BEHIND THE GAME",

        background: {
          url: image,
        },

        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: {
          url: image,
        },
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: {
          url: image,
        },
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: {
          url: image,
        },
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: {
          url: image,
        },
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: {
          url: image,
        },
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: {
          url: image,
        },
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: {
          url: image,
        },
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: {
          url: image,
        },
        description:
          " Andrei Streche is a game producer at Gameloft Bucharest on one of our ambitious, unannounced, cross-platform games.",
        readMoreLink: "Read more",
      },
      {
        title: "HUMANS BEHIND THE GAME",
        background: {
          url: image,
        },
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
    searchText: "Search",
  };
  setNews(dataSlice);
  console.log(news);
  const menu = (
    <Menu
      items={[
        {
          label: "Human",
          key: "0",
        },
        {
          label: "truong",
          key: "1",
        },
        // {
        //   type: "divider",
        // },
        {
          label: "facebook",
          key: "3",
        },
      ]}
    />
  );
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
            <div className="newProduct-wrapper-right__filter">
              <Dropdown overlay={menu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                  <button className="newProduct-wrapper-right__filter-btn">
                    <div style={{ color: "black" }}>
                      <FontAwesomeIcon
                        className="newProduct-wrapper-right__filter-btn__icon"
                        icon={faFilter}
                      ></FontAwesomeIcon>{" "}
                      Filter
                    </div>
                    <span style={{ color: "black" }}>
                      <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                    </span>
                  </button>
                </a>
              </Dropdown>
            </div>
            <div className="newProduct-wrapper-right__search">
              <input
                className="newProduct-wrapper-right__search__input"
                placeholder={props?.searchText || dataSlice?.searchText || ""}
              />
              <FontAwesomeIcon
                className="newProduct-wrapper-right__search__input-icon"
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
          className="swiper"
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
                    <div className="newProduct-wiper__slide">
                      <div className="newProduct-wiper__slide-header">
                        {props.title || item.title || ""}
                        <div>-----------------</div>
                        <div className="newProduct-wiper__slide-header__name">
                          {props.description || item.description || ""}
                        </div>
                      </div>

                      <div>
                        <img
                          className="newProduct-wiper__slide-img"
                          src={item.background.url || ""}
                        ></img>
                      </div>
                      <div className="newProduct-wiper__slide-pink"></div>
                      <div className="newProduct-wiper__slide-title">
                        {props.title || item.title || ""}
                      </div>
                      <div className="newProduct-wiper__slide-footer">
                        <button className="newProduct-wiper__slide-footer__btn">
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
export default NewProduct;
