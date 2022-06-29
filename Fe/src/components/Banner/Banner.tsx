import React, { useEffect } from "react";
import  "./Banner.scss";
import Imager from "../../assets/images/home/banner1.jpg";
import Imager1 from "../../assets/images/home/banner2.png";
import Logo1 from "../../assets/images/home/logo1.png";

import { useState } from 'react'
import ReactPlayer from "react-player";
import { CloseOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { SImage } from "types/types";
import { RawData } from "pages/HomePage/HomePage";
export interface BannerProps {}

export interface BannerDataType {
  background?: SImage;
  backgroundMobile?: SImage;
  logo?: SImage;
  description?: string;
  buttonText?: string;
  link?: string;
}

const Banner: React.FC<BannerDataType & BannerProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState<BannerDataType>({
    background:{url:Imager1},
    backgroundMobile:{url:Imager},
    logo:{url:Logo1},
    description:"Synergize and merge turrets in the heat of battle to withstand all enemy waves and advance to the next world, becoming a master strategist. Be careful, though! If you are defeated, you need to start from the beginning. Command your artillery to victory and eradicate waves of aliens to blow off some steam in Auto Defense!",
    buttonText:'Watch Trailer',
    link:'https://www.youtube.com/watch?v=X4XxEtUFEZU',
  });

  useEffect(() => {
    if (localStorage.getItem("data")) {
      const rawData: RawData = JSON.parse(localStorage.getItem("data") || "");
      const finalData  = rawData.sections?.find((section) => section.__typename === "ComponentHomepageBanner");
      setData(finalData as BannerDataType);
    }
  }, []);
  
  return (
    <div className="com-banner">
      <img className="com-banner__background" src={`http://localhost:1337${data?.background?.url}`} alt="background" />
      <div className="com-banner__content">
        <img className="banner__logo" src={`http://localhost:1337${data?.logo?.url}`} alt="logo" />
        <div className="banner__description">{data?.description}</div>
        <button className="banner__button" onClick={() => setIsOpen(!isOpen)}>{data?.buttonText}</button>
      </div>
      <div className="com-banner__overlay"></div>
      <div className={classNames("com-banner__popup", isOpen ? "com-banner__popup--show": "")}>
        <CloseOutlined className="com-banner__popup-close" onClick={() => setIsOpen(!isOpen)} />
        <ReactPlayer className="com-banner__popup-video" url={data?.link} loop muted playing={true} />
      </div>
    </div>
  );
};

export default Banner;
