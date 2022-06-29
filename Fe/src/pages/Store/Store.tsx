import { RawData } from 'pages/HomePage/HomePage';
import React, { useEffect, useState } from 'react';
import './Store.scss';
import GoogleStore from "../../assets/images/home/googleplay.png";
import AppStore from "../../assets/images/home/appstore.png";
import { SImage } from 'types/types';

export interface StoreProps {}

export interface StoreDataType {
  title?: string;
  stores?: {
    storeImage: SImage;
    link: string;
  }[];
}

const Store: React.FC<StoreProps> = (props) => {
  const [data, setData] = useState<StoreDataType>({
    title: "Download lastest version",
    stores: [
      {
        link: "/",
        storeImage: {url: AppStore},
      },
      {
        link: "/",
        storeImage: {url: GoogleStore},
      },
    ],
  });
  useEffect(() => {
    const rawData: RawData = JSON.parse(localStorage.getItem("data") || "");
    const finalData  = rawData.sections?.find((section) => section.__typename === "ComponentHomepageStore");
    setData(finalData as StoreDataType);
  }, []);

  return (
    <div className="com-store">
      <div className="com-store__title">{data?.title}</div>
      <div className="com-store__store-list">
        {data?.stores?.map((store, index) => <a href={store.link} key={index} className="com-store__store-item">
          <img src={`http://localhost:1337${store.storeImage.url}` || ""} alt="store"></img>
        </a>)}
      </div>
    </div>
  )
};

export default Store;