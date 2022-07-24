import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/home/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import Search from "antd/lib/input/Search";
import { Link } from "react-router-dom";

import { motion, Variant, Variants } from "framer-motion";
import { CloseOutlined } from "@ant-design/icons";
import { post } from "utilities/api";
import query from "./query";

export interface HeaderProps {

}

export interface HeaderDataType { }

const Header: React.FC<HeaderProps> = (props) => {

  const variants: Variants = {
    visible: { opacity: 1, pointerEvents: "auto" },
    hidden: { opacity: 0, right: 0 },
  }
  const [data, setData] = useState<{ name: string }[]>();

  useEffect(() => {
    const initData = async () => {
      const data = await post("http://localhost:1337/graphql", {
        query: query,
      });
      setData(data.data.data.homepages);
    };
    initData();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  console.log("header slug", data);
  

  return (
    <div className={styles["root"]}>
      <div className={styles["logo-container"]}>
        <svg width="566.87" height="130.71" viewBox="0 0 149.98 34.583" className={styles["logo"]}>
          <g transform="translate(70.456 83.815)"><g transform="matrix(.26457 0 0 .26457 -83.057 -93.761)" fill="currentColor">
            <path d="m53.08 147.92c3.2 5.57 8.08 8.18 14.21 8.87 22 2.51 87.63 1.14 87.73 1.14 15.57 0 28.07-7.13 31.45-21.86 0.86-3.75 1.54-16.46 0.76-29.94-0.82-14-7.2-23.25-26.24-24.55-25.29-1.71-61.06-0.9-75.53 0.59-7.73 0.8-12.23 6.08-12.13 13.28 0.23 17.16 0.42 19.8 0.6 20.73 7.68 1.1 7.59 1.17 7.82 0.75a8.64 8.64 0 0 1 6.69-4.46c3.26-0.43 0.8-0.3 68.7-1.33 2.65 0 4.23 1.2 4.72 3.81a38.25 38.25 0 0 1 0.31 10.25c-0.22 2.91-2.62 7.55-7 7.61-0.1 0-48.64 0.23-71.8-0.84-7-0.32-14.67-7.22-14.67-20.06 0-5.45 0-23 0.46-28.45a14.49 14.49 0 0 1 12-13.18c8.64-1.57 89.15-0.62 94.26 0.55 14.53 3.32 15.75 20.73 15.8 21.1 1.36 10 1.49 21.28 1.37 31.47-0.3 23-8.89 28.05-11.76 31.37-0.86 1 0.25 1.46 1.95 2.69 7.22-1.35 17.55-9.25 19.57-26 0.78-6.47 1.38-21.28 0.13-47.85-0.81-17.25-8.06-32.11-32.1-34.85-20.85-2.37-66.77-0.48-87.39 0-36 0.82-35.32 21.37-35.33 29.74-0.14 52.99-0.09 59.85 5.42 69.42z"></path>
            <path d="m301.82 79.16a4.92 4.92 0 0 1 3.08 0.93 5.88 5.88 0 0 1 1.84 2.46l18 44.2h-14.25c-0.43-0.09-0.66-0.5-0.85-1.22l-2.41-7.61c-0.1-0.82-0.55-1-1.57-1h-14.07c-1 0-1.47 0.19-1.57 1l-2.41 7.65c-0.18 0.72-0.41 1.13-0.85 1.22h-14.29l18.05-44.2a5.82 5.82 0 0 1 1.35-2 5.12 5.12 0 0 1 3.61-1.35zm-8.08 27.69h9.77l-4.89-14.17z"></path>
            <path d="m254.91 115.47c1.26 0 1.56-0.37 1.52-1.57v-7.34c0-1.81-0.88-2.81-2.43-3.65-0.42-0.22-2.2-1.47-1.06-1.47h14.51c1.2 0 1.58 0.28 1.57 1.53v17c0 3.44-2.36 6.78-6.23 6.78h-24.64c-2.49 0-12.93-1.55-12.93-13.85v-19.85c0-12.3 10.44-13.91 12.93-13.89h29.34c1.26 0 1.55 0.39 1.53 1.59v7.54c0 1.2-0.27 1.57-1.53 1.57h-21.82c-4.82 0-7.2 2.53-7.2 5.66v14.29c0 3.12 2.38 5.66 7.2 5.66 0.46 0-0.55-0.03 9.24 0z"></path>
            <path d="m504.45 115.47c-4.81 0-7.19-2.54-7.19-5.66v-14.29c0-3.13 2.38-5.66 7.2-5.66h6.11c4.81 0 7.19 2.53 7.19 5.66v14.29c0 3.12-2.37 5.66-7.19 5.66zm13.63 11.28c2.5 0 12.94-1.55 12.94-13.85v-19.85c0-12.3-10.44-13.91-12.93-13.89h-21.15c-2.5 0-12.93 1.59-12.93 13.89v19.87c0 12.3 10.43 13.87 12.93 13.85z"></path>
            <path d="m360.39 126.4 16.5-28.05v26.9c0 0.73 0 1.5 1.38 1.5h10.7c1 0 1.38-0.31 1.38-1.47 0-23 0.12-15.91 0-39.31 0-3.44-2.36-6.81-6.23-6.81h-5.09a3.78 3.78 0 0 0-3.52 1.61c-15.92 24.49-14.87 23.21-15.73 23.4-0.86-0.19 0.2 1.11-15.73-23.4a3.78 3.78 0 0 0-3.52-1.61h-5.14c-3.88 0-6.21 3.37-6.23 6.81v39.31c0 1.16 0.34 1.47 1.38 1.47h10.7c1 0 1.38-0.31 1.38-1.47v-26.93l16.5 28.05a0.7 0.7 0 0 0 1.27 0z"></path>
            <path d="m477.91 116.43a1.71 1.71 0 0 0-1.22-0.33h-15.12a1.45 1.45 0 0 1-1.45-1.46v-33.93c0-0.74 0-1.55-1.38-1.55h-10.7c-1 0-1.38 0.35-1.38 1.51v39.31c0 3.45 2.35 6.77 6.23 6.77h30a28.44 28.44 0 0 1-4.98-10.32z"></path>
            <path d="m614.39 88.22c-2.4-7.83-10.19-9.08-12.3-9.06h-57.53c-3.87 0-6.19 3.37-6.23 6.81v39.31c0 1.16 0.34 1.47 1.38 1.47h10c1 0 1.38-0.31 1.38-1.47v-15.82a1.46 1.46 0 0 1 1.46-1.46h11.49c1.26 0 1.53-0.35 1.53-1.57v-6.91c0-1.22-0.27-1.57-1.53-1.57h-11.5a1.45 1.45 0 0 1-1.46-1.45v-5.19a1.45 1.45 0 0 1 1.46-1.45h28.2v35.42c0 1.16 0.34 1.47 1.37 1.47h10.71c1 0 1.38-0.31 1.38-1.47v-35.42h18.68c1.26 0 1.92-0.3 1.51-1.64z"></path>
            <path d="m436.09 106.43c0 1.22-0.27 1.58-1.53 1.57h-22.29a1.47 1.47 0 0 0-1.46 1.46v5.18a1.46 1.46 0 0 0 1.46 1.46h25c1.26 0 1.53 0.41 1.53 1.57v7.54c0 1.2-0.27 1.55-1.52 1.54h-33c-3.87 0-6.19-3.32-6.22-6.77v-34c0-3.44 2.35-6.81 6.23-6.81h33c1.25 0 1.55 0.39 1.53 1.59v7.54c0 1.16-0.27 1.57-1.52 1.57h-25.03a1.46 1.46 0 0 0-1.46 1.45v5.19a1.46 1.46 0 0 0 1.46 1.45h22.29c1.26 0 1.53 0.35 1.53 1.57z"></path>
          </g>
          </g>
        </svg>
      </div>
      <div className={styles["hamburger-container"]}>
        <svg className="side-header__burger" xmlns="http://www.w3.org/2000/svg" width={30} height={30} onClick={() => handleOpen()}>
          <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={3}>
            <path d="M3,23L24,23" style={{transform: 'none', transformOrigin: '13.5px 23px'}} transform-origin="13.5px 23px" />
            <path d="M3 15h15" opacity={1} style={{transform: 'none', transformOrigin: '10.5px 15px'}} transform-origin="10.5px 15px" />
            <path d="M3,7L24,7" style={{transform: 'none', transformOrigin: '13.5px 7px'}} transform-origin="13.5px 7px" />
            <path d="M0 0h30v30H0z" stroke="none" />
          </g>
        </svg>
      </div>

      <motion.div className={styles["sidebar"]} initial={"hidden"} animate={isOpen ? "visible": "hidden"} variants={ variants }>
        <CloseOutlined className={styles["close"]} onClick={() => handleOpen()} />
        <div className={styles["sidebar-container"]}>
            <div className={styles["title"]}>Game</div>
            <div className={styles["subtitle-container"]}>
              {data && data.map((item, index) => 
                <div key={`item-${index}`} className={styles["subtitle"]}>
                  <a href={`/${item.name}`} >
                    <span>&#9679;</span> {item.name}
                  </a>
                </div>
              )}
            </div>
        </div>
      </motion.div>

      <motion.div className={styles["overlay"]} initial={"hidden"} animate={isOpen ? "visible": "hidden"} variants={ variants }></motion.div>
    </div>
  );
};

export default Header;
