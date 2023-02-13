import React from "react";
import MenuMobile from "./MenuMobile";
import HeaderLogo from "./HeaderLogo";
import MenuHeader from "./MenuHeader";
import { useWindowSize } from "../../hooks";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const {
    size: [screenWidth],
  } = useWindowSize();
  const isHiddenMenuMobile = screenWidth >= 1024;

  return (
    <div className="header">
      <div className="container">
        <div className="header-main flex-b-c">
          <div className="left flex-a-c">
            <HeaderLogo />
            <div className="header-search">
              <HeaderSearch />
              <p>Công cụ tìm kiếm phim.</p>
            </div>
          </div>

          <div className="right">
            <a href="/">
              <i className="fa-solid fa-right-to-bracket"></i>
              Login
            </a>
            <a href="/">
              <i className="fa-solid fa-users"></i>
              Sign up
            </a>
            <a href="/">
              <i className="fa-regular fa-bookmark"></i>
              Bookmark
            </a>
          </div>
        </div>
        {!isHiddenMenuMobile && <MenuMobile />}
      </div>
      <div className="header-menu">
        <div className="container">
          {isHiddenMenuMobile && <MenuHeader />}
        </div>
      </div>
    </div>
  );
};

export default Header;
