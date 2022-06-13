import React, { useRef, useState } from "react";
import "./Header.scss";
import logo from "../../assets/images/home/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import Search from "antd/lib/input/Search";
import { Link } from "react-router-dom";
// import Hambugur from "./Hambugur.tsx";
export interface HeaderProps {
  logo: string;
}

export interface HeaderDataType {}

export interface propTypes {
  logo: string;
}
const Header: React.FC<HeaderProps> = (props) => {
  const refForm = useRef<HTMLUListElement>(null);
  const [openMenu, setIsOpenMenu] = useState(false);
  // function handleMenu()
  const handleMenu = (e: any) => {
    console.log("eeeeeee:", e);
    setIsOpenMenu(!openMenu);
    // refForm.current.classList.value="noichunglabuon";
    // console.log("reform là:", refForm.current.classList);

    // setIsOpenMenu(true);
  };

  return (
    <>
      <div className="header">
        <div className="header__inner container">
          <div className="header__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="header__nav" ref={refForm}>
            <li>
              <a href="#">overview</a>
            </li>
            <li>
              <a href="#">news</a>
            </li>
            <li>
              <a href="#">champions</a>
            </li>
            <li>
              <a href="#">support</a>
            </li>
          </ul>
          <div className="menu_responsive">
            <div className="menu_responsive_icon" onClick={handleMenu}>
              <FontAwesomeIcon
                style={{ fontSize: "1.35rem", width: "100%" }}
                icon={faBars}
              />
            </div>

            {/* <div className={(openMenu)?'menu_responsive_container show-menu':'menu_responsive_container'}> */}
            <div className={(openMenu)?'menu_responsive_container show-menu':'menu_responsive_container'}>
              <div className='menu_responsive_container_btn' onClick={handleMenu}>
                <FontAwesomeIcon
                  icon={openMenu?faClose:faBars}
                  className="menu_responsive_container_btn_icon"
                />
              </div>
              <div className="menu_responsive_container_search">
                <input placeholder="Tìm kiếm" />
              </div>
              <ul className="menu_responsive_container_list">
                <li className="menu_responsive_container_item">
                  <a href="#">OverView</a>
                </li>
                <li className="menu_responsive_container_item">
                  <a href="#">news</a>
                </li>
                <li className="menu_responsive_container_item">
                  <a href="#">champions</a>
                </li>
                <li className="menu_responsive_container_item">
                  <a href="#">support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
          className={openMenu ? "menu_responsive_overlay" : ""}
          onClick={handleMenu}
        ></div>
    </>
  );
};

export default Header;
