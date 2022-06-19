import React from "react";
import  "./banner.scss";
import ModalVideo from "react-modal-video";
import Imager from "../../assets/images/home/banner1.jpg";
import Logo from "../../assets/images/home/logobanner.png";

import {useState} from 'react'
export interface BannerProps {}

export interface DataType {
  background?:{
    url?:string
  }
  backgroundMobile?:{
    url?:string
  }
  logo?:{
    url?:string
  }
  description?:string
  buttonText?:string
  link?:string
}

const Banner: React.FC<DataType & BannerProps> = (props) => {
  const [isOpen, setOpen] = useState(false)
  const data:DataType={
      background:{url:Imager},
      backgroundMobile:{url:Imager},
      logo:{url:Logo},
      description:"March of Empires",
      buttonText:'Watch Trailer',
      link:'linkkk'
  }
  return (
    <div className="banner">  
      <img src={data?.logo?.url} className="banner_logo" alt="" />
      <h2 className="banner_description">{data?.description||props.description||""}</h2>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="J8W4Lm1nTWk" onClose={() => setOpen(false)} />
			<button className="banner_button" onClick={()=> setOpen(true)}>{props?.buttonText||data?.buttonText||""}</button>
    </div>
  );
};

export default Banner;
