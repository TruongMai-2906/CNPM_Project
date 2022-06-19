import React, { useEffect, useState } from "react";
// @ts-ignore
import styles from "./Introduce.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
//@ts-ignore
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Imager from "../../assets/images/home/banner1.jpg";
import { useCheckMobileScreen } from './customeHooks.ts';
import "antd/dist/antd.css";
import { Button, Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export interface IntroduceDataType{
  title: string;
  description: string;
  imageList: {
  image: string;
  }[];
}

export interface IntroduceProps {
  
}

export const Introduce: React.FC<IntroduceProps & IntroduceDataType> = (props) => {

  const data: IntroduceDataType = {
    title: "Introduce Game",
    description:" Browse the unique art collection and find the perfect wallpaper for your device.",
    imageList: [
      {
        image: Imager,
      },
      {
        image: Imager,
      },
      {
        image: Imager,
      },
      {
        image: Imager,
      },
      {
        image: Imager,
      },
      {
        image: Imager,
      },
    ]

  }

  // const list = [
  //   {
  //     img: "https://games.assets.gameloft.com/assets/MOE_exclusive_3_thumb_674e8146d0.jpg",
  //     zoom: imager,
  //   },
  //   {
  //     img: "https://games.assets.gameloft.com/assets/MOE_exclusive_1_thumb_bf93a70b3e.jpg",
  //     zoom: "https://games.assets.gameloft.com/assets/MOE_exclusive_1_fec2a573ab.jpg",
  //   },
  //   {
  //     img: "https://games.assets.gameloft.com/assets/MOE_exclusive_2_thumb_0af32b71de.jpg",
  //     zoom: "https://games.assets.gameloft.com/assets/MOE_exclusive_2_137ee07e25.jpg",
  //   },
  //   {
  //     img: "https://games.assets.gameloft.com/assets/MOE_exclusive_4_thumb_69fea1dfa2.jpg",
  //     zoom: "https://games.assets.gameloft.com/assets/MOE_exclusive_4_thumb_69fea1dfa2.jpg",
  //   },
  // ];
  const mobile = useCheckMobileScreen(768);

  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div id={styles["introduce-movies"]}>
        <h1 className={styles["heading"]}> {props?.title || data?.title || ""} </h1>
        <h2 className={styles["heading"]}>
          {props?.description || data?.description || ""}
        </h2>
        <>
          <Swiper
            slidesPerView={mobile ? 1: 3}
            spaceBetween={35}
            slidesPerGroup={mobile ? 1: 3}
            loop={true}
            // loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={styles["mySwiper"]}
          >
            {props && props?.imageList?.map((item, i) => {
              return (
                <SwiperSlide key={i} className={styles["items"]}>
                  <div className={styles["box"]}>
                    <Image className={styles["img-game"]} src={item.image} />
                  </div>
                  <div className={styles["button"]}>
                  <Button
                      type="primary"
                      shape="circle"
                      href={item.image}
                      download
                      onClick={(e) => download(e)}
                    >
                      
                     <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </Button>
                  </div>
                </SwiperSlide>
              );
            })}

            {data && data?.imageList?.map((item, i) => {
              return (
                <SwiperSlide key={i} className={styles["items"]}>
                  <div className={styles["box"]}>
                    <Image className={styles["img-game"]} src={item.image} />
                  </div>
                  <div className={styles["button"]}>
                  <Button
                      type="primary"
                      shape="circle"
                      href={item.image}
                      download
                      onClick={(e) => download(e)}
                    >
                      
                     <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                    </Button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </div>
    </>
  );
};
export default Introduce;
