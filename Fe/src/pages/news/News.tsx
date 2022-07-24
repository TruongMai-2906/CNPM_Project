import React, { useEffect, useState } from "react";
// Import Swiper React components
import "./News.scss";
import type { MenuProps } from 'antd';
import { DownOutlined, FilterOutlined, LeftOutlined, RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



import { useCheckMobileScreen } from "./customHook";
import { RawData } from "pages/HomePage/HomePage";
import { SImage } from "types/types";
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

export interface NewsDataType {
  title?: string;
  description?: string;
  newsList?: NewsCardDataType[];
}

export interface NewsCardDataType {
  type: "facebook" | "twitter" | "linkedln";
  background: SImage;
  description: string;
  readMoreLink: string;
}

const News: React.FC<NewsDataType> = (props) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [totalSlide, setTotalSlide] = useState<number>(0);

  const [initCardList, setInitCardList] = useState<NewsCardDataType[]>([]);
  const [searchList, setSearchList] = useState<NewsDataType>();

  const [data, setData] = useState<NewsDataType>();

  useEffect(() => {
    if (localStorage.getItem("data")) {
      const rawData: RawData = JSON.parse(localStorage.getItem("data") || "");
      const finalData  = rawData.sections?.find((section) => section.__typename === "ComponentHomepageNews");
      setData(finalData as NewsDataType);
      setInitCardList((finalData as NewsDataType).newsList!);
    }
  }, []);

  const onClick: MenuProps['onClick'] = ({ key }) => {
    const filterData = key === "all" ? initCardList : initCardList.filter((item) => item.type === key);
    setData({...data, newsList: filterData});
    setTotalSlide(filterData.length);
    setSearchList(undefined);
  };

  const handleSearch = (e: HTMLInputElement) => {
    const filterData = data?.newsList?.filter((item) => item.description.includes(e.value));
    setSearchList({...data, newsList: filterData});
    setTotalSlide(filterData?.length || 0);
  }
  
  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: 'Facebook',
          key: 'facebook',
        },
        {
          label: 'Twitter',
          key: 'twitter',
        },
        {
          label: 'Linkedln',
          key: 'linkedln',
        },
        {
          label: 'All',
          key: 'all',
        },
      ]}
    />
  );
  
  return (
    <div className="com-news">
      <div className="com-news-top">
        <div className="com-news__content">
          <div className="com-news__title">{data?.title}</div>
          <div className="com-news__description">{data?.description}</div>
        </div>
        <div className="com-news__button">
          <div className="com-news__button-filter">
            <Dropdown overlay={menu} className="filter-list">
              <a onClick={e => e.preventDefault()}>
                <div>
                  <FilterOutlined />
                  Filter
                </div>
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <div className="com-news__button-search">
            <SearchOutlined />
            <input type="text" onChange={(e) => handleSearch(e.target)}/>
          </div>
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={"auto"}
          centeredSlides={true}
          scrollbar={{ draggable: true }}
          onInit={(swiper) => setTotalSlide(swiper.slides.length)}
          // onSwiper={(swiper) => setTotalSlide(swiper.slides.length)}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
          className="com-news__slider"
        >
          {searchList && searchList?.newsList?.map((news, index) => 
            <SwiperSlide className="com-news__slide" key={`slide-${index}`}>
              <NewsCard {...news}></NewsCard>
            </SwiperSlide>
          )}

          {!searchList && data && data?.newsList?.map((news, index) => 
            <SwiperSlide className="com-news__slide" key={`slide-${index}`}>
              <NewsCard {...news}></NewsCard>
            </SwiperSlide>
          )}

          <div className="com-news__slide-group-button">
            <SwiperButtonPre></SwiperButtonPre>
            <div className="com-news__slide-number">
              <b>{currentSlide}</b> / {totalSlide}
            </div>
            <SwiperButtonNext></SwiperButtonNext>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
export default News;

const NewsCard: React.FC<NewsCardDataType> = (props) => {
  return (
    <a className="news-card-container" href={props.readMoreLink}>
      <div className="news-card">
        <img src={`http://localhost:1337${props?.background?.url}`} alt="" className="news-card__background"/>
        <div className="news-card__social">{props.type}</div>
        <div className="news-card__description">
          {props.description}
        </div>
        <div className="news-card__overlay"></div>
      </div>
    </a>
  )
}

const SwiperButtonPre: React.FC = () => {
  const swiper = useSwiper();
  return <div onClick={() => swiper.slidePrev()} className="com-news__slide-button"><LeftOutlined /></div>;
};

const SwiperButtonNext: React.FC = () => {
  const swiper = useSwiper();
  return <div onClick={() => swiper.slideNext()} className="com-news__slide-button"><RightOutlined /></div>;
};