import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { merge } from "lodash";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import Banner2 from "../../assets/images/home/banner2.jpg";
import Bannerctv from "../../assets/images/home/bannerctv.jpg";
import { Link, useParams } from "react-router-dom";
import { get, post } from "../../utilities/api";
import query from "pages/Introduce/query";
import Introduce from "pages/Introduce/Introduce";
import News from "pages/news/News";
import Store from "pages/Store/Store";
import Banner from "../../components/Banner/Banner";
import Header from "components/Header/Header";
import Register from "../../pages/Register/Register";
import Footer from "components/Footer/Footer";

export interface HomePageProps {}

export interface HomePageDataType {}

type SectionName = keyof typeof SectionMap;

export interface RawData {
  sections?: {
    __typename: SectionName;
  }[];
}

const HomePage: React.FC<HomePageProps> = (props) => {
  const [data, setData] = useState<RawData>();
  const { slug } = useParams();
  const [customStyles, setCustomStyle] = useState<string>();

  useEffect(() => {
    const initData = async () => {
      const data = await post("http://localhost:1337/graphql", {
        query: query(slug || ""),
      });
      data.data.data.homepages[0].css ? setCustomStyle(data.data.data.homepages[0].css.css): null;
      setData(data.data.data.homepages[0]);
      localStorage.setItem("data", JSON.stringify(data.data.data.homepages[0]));
    };
    initData();
  }, []);

  const renderSection = (section: SectionName) => {
    const Component = SectionMap[section]?.component;
    if (Component) {
      return Component;
    }
    return null;
  };

  return (
    <div className={styles["root"]}>
      {/* <Store /> */}
      {/* <Header></Header> */}
      {/* <Header /> */}
      {
        customStyles && <style>{customStyles}</style>
      }
      {data?.sections?.map((section) => {
        return renderSection(section.__typename);
      })}
      {/* <Register /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;

const SectionMap = {
  // default product page sections
  ComponentHomepageBanner: { component: <Banner /> },
  ComponentHomepageIntroduce: { component: <Introduce /> },
  ComponentHomepageNews: { component: <News /> },
  ComponentHomepageStore: { component: <Store /> },
  ComponentHomepageRegister: { component: <Register /> },
};

