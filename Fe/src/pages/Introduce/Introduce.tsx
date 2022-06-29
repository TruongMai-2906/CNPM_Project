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
import { useCheckMobileScreen } from './customeHooks';
import "antd/dist/antd.css";
import { Button, Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { post } from "../../utilities/api";

import query from "./query";
import { RawData } from "pages/HomePage/HomePage";

export interface IntroduceDataType{
  title?: string;
  description?: string;
  imageList?: {
    image: {
      url: string;
    };
  }[];
}

export interface IntroduceProps {
  
}

export const Introduce: React.FC<IntroduceDataType> = (props) => {

  // const data: IntroduceDataType = {
  //   title: "Introduce Game",
  //   description:" Browse the unique art collection and find the perfect wallpaper for your device.",
  //   imageList: [
  //     {
  //       image: Imager,
  //     },
  //     {
  //       image: Imager,
  //     },
  //     {
  //       image: Imager,
  //     },
  //     {
  //       image: Imager,
  //     },
  //     {
  //       image: Imager,
  //     },
  //     {
  //       image: Imager,
  //     },
  //   ]

  // }
  const mobile = useCheckMobileScreen(768);

  const [data, setData] = useState<IntroduceDataType>();

  useEffect(() => {
    const rawData: RawData = JSON.parse(localStorage.getItem("data") || "");
    const finalData  = rawData.sections?.find((section) => section.__typename === "ComponentHomepageIntroduce");
    setData((finalData as IntroduceDataType));
  }, []);

  const download = (e: any) => {
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
                    <Image className={styles["img-game"]} src={item.image.url} />
                  </div>
                  <div className={styles["button"]}>
                  <Button
                      type="primary"
                      shape="circle"
                      href={item.image.url}
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
                    <Image className={styles["img-game"]} src={`http://localhost:1337${item.image.url}`} />
                  </div>
                  <div className={styles["button"]}>
                  <Button
                      type="primary"
                      shape="circle"
                      href={item.image.url}
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
