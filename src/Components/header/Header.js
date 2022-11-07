import React, { useState } from "react";
import "./Header.css";
import logo from "../../images/other/logo.png";
import Menu from "../Menu/Menu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Main", href: "/main" },
    { value: "Compare", href: "/compare" },
    { value: "Air Power", href: "/airpower" },
    { value: "Defense Spending", href: "/spending" },
    { value: "Armored Vehicle", href: "/vehicle" },
  ];

  return (
    <div className="main-page">
      <header className="header_main-page">
        <nav>
          <a className="logo-a" href="/">
            <img className="logo-img" src={logo} alt="" />
          </a>
          <div
            className="burger-btn"
            onClick={() => {
              setMenuActive(!menuActive);
            }}
          >
            <span></span>
          </div>
          <span className="menu-name"></span>
        </nav>
      </header>
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Menu"}
        items={items}
      ></Menu>
    </div>
  );
};

export default Header;
