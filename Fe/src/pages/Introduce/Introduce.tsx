import React, { useEffect, useState } from "react";
// @ts-ignore
import "./Introduce.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Imager from "../../assets/images/home/banner1.jpg";
import { useCheckMobileScreen } from './customeHooks';
import "antd/dist/antd.css";
import { Button, Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { post } from "../../utilities/api";

import query from "./query";
import { RawData } from "pages/HomePage/HomePage";
import { CloseOutlined, DownloadOutlined, LeftOutlined, RightOutlined, ZoomInOutlined } from "@ant-design/icons";
import { SImage } from "types/types";
import classNames from "classnames";

export interface IntroduceDataType{
  title?: string;
  description?: string;
  background?: SImage;
  imageList?: {
    image: SImage
  }[];
}

export interface IntroduceProps {
  
}

export const Introduce: React.FC<IntroduceDataType> = (props) => {

  // const data: IntroduceDataType = {
  //   title: "Introduce Game",
  //   description:" Browse the unique art collection and find the perfect wallpaper for your device.",
  //   imageList: [
  //     { url: "https://www.w3schools.com/w3css/img_lights.jpg" },
  //     { url: "https://www.w3schools.com/w3css/img_lights.jpg" },
  //     { url: "https://www.w3schools.com/w3css/img_lights.jpg" },
  //     { url: "https://www.w3schools.com/w3css/img_lights.jpg" },
  //     { url: "https://www.w3schools.com/w3css/img_lights.jpg" },
  //     { url: "https://www.w3schools.com/w3css/img_lights.jpg" },
  //     { url: "https://www.w3schools.com/w3css/img_lights.jpg" },
  //     { url: "https://www.w3schools.com/w3css/img_lights.jpg" },
  //   ]

  // }
  const mobile = useCheckMobileScreen(768);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [totalSlide, setTotalSlide] = useState<number>(0);
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState<IntroduceDataType>();

  console.log(totalSlide);
  

  useEffect(() => {
    const rawData: RawData = JSON.parse(localStorage.getItem("data") || "");
    const finalData  = rawData.sections?.find((section) => section.__typename === "ComponentHomepageIntroduce");
    setData((finalData as IntroduceDataType));
    setTotalSlide((finalData as IntroduceDataType).imageList?.length!);
  }, []);


  return (
    <div className="com-introduce">
      <img className="com-introduce__background" src={`http://localhost:1337${data?.background?.url}`|| ""} alt="background" />
      <div className="com-introduce__content">
        <div className="com-introduce__title">{data?.title}</div>
        <div className="com-introduce__description">{data?.description}</div>
      </div>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={"auto"}
          centeredSlides={true}
          scrollbar={{ draggable: true }}
          // onInit={(swiper) => setTotalSlide(swiper.slides.length)}
          // onSwiper={(swiper) => setTotalSlide(swiper.slides.length)}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
          className="com-introduce__slider"
        >
          {data?.imageList?.map((image, index) => 
            <SwiperSlide className="com-introduce__slide" key={`slide-${index}`}>
              <div className={classNames("com-introduce__slide-item", {"com-introduce__slide-item--active": index === currentSlide - 1})}>
                <img src={ `http://localhost:1337${image.image.url}` } alt="" className="introduce-card__background"/>
                <div className="introduce-card__button">
                  <a className="introduce-card__button-item" href={`http://localhost:1337${image.image.url}`} download>
                    <DownloadOutlined />
                  </a>
                  <div className="introduce-card__button-item" onClick={() => setIsOpen(!isOpen)}>
                    <ZoomInOutlined />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )}

          <div className="com-introduce__slide-group-button">
            <SwiperButtonPre></SwiperButtonPre>
            <div className="com-introduce__slide-number">
              <b>{currentSlide}</b> / {totalSlide}
            </div>
            <SwiperButtonNext></SwiperButtonNext>
          </div>
        </Swiper>
      </div>
      <div className={classNames("com-introduce__popup", isOpen ? "com-introduce__popup--show": "")}>
        <CloseOutlined className="com-introduce__popup-close" onClick={() => setIsOpen(!isOpen)} />
        {
          data?.imageList && <img src={ `http://localhost:1337${data?.imageList[currentSlide-1]?.image.url}`  || "" } alt="image"/>
        }
      </div>
    </div>
  );
};
export default Introduce;

const SwiperButtonPre: React.FC = () => {
  const swiper = useSwiper();
  return <div onClick={() => swiper.slidePrev()} className="com-introduce__slide-button"><LeftOutlined /></div>;
};

const SwiperButtonNext: React.FC = () => {
  const swiper = useSwiper();
  return <div onClick={() => swiper.slideNext()} className="com-introduce__slide-button"><RightOutlined /></div>;
};
