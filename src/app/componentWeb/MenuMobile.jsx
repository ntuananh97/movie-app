import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { COUNTRIES, NAVIGATION, TYPE_NAVIGATION } from "../../constanst.js";
import { useLocationChange } from "../../hooks/index.js";
import { useGetGenresMovies } from "../../hooks/movie.js";
import { renderYearList } from "../../ultis/index.js";
import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch.jsx";

const YEAR_LIST = renderYearList();

function MenuMobile() {
  const [isShowMenuBar, setIsShowMenuBar] = useState(false);
  const [activeChildMenu, setactiveChildMenu] = useState([]);
  const { list: listGenresMovie } = useGetGenresMovies();

  const headerSearchRef = useRef(null);

  const showChildMenu = (id) => {
    if (activeChildMenu.includes(id))
      setactiveChildMenu(activeChildMenu.filter((x) => x !== id));
    else setactiveChildMenu([id]);
  };

  useLocationChange(() => {
    setIsShowMenuBar(false);
  });

  return (
    <>
      <div className="header-mobile">
        <i
          className={`fa-solid fa-bars header-mobile__bar ${
            isShowMenuBar ? "active" : ""
          }`}
          onClick={() => setIsShowMenuBar(!isShowMenuBar)}
        ></i>
        <HeaderLogo />
        <i
          className="fa-solid fa-magnifying-glass header-mobile__search-icon"
          onClick={() => {
            headerSearchRef.current?.changeDisplaySearch?.();
           
          }}
        ></i>

        <ul className={`menu-mobile ${isShowMenuBar ? "active" : ""}`}>
          {NAVIGATION.map((item) => {
            const parentLink = (
              <Link
                className={`menu-mobile__item-link ${
                  item.linkParent === "/" ? "active" : ""
                }`}
                to={item.linkParent}
              >
                <span>{item.name}</span>
              </Link>
            );
            if (!item.hasChildren)
              return (
                <li className="menu-mobile__item" key={item.id}>
                  {parentLink}
                </li>
              );

            let childDatas = [];
            switch (item.type) {
              case TYPE_NAVIGATION.categories:
                childDatas = listGenresMovie;
                break;
              case TYPE_NAVIGATION.countries:
                childDatas = COUNTRIES;
                break;
              case TYPE_NAVIGATION.year:
                childDatas = YEAR_LIST;
                break;
              default:
                break;
            }

            const isActiveMenuChildren = activeChildMenu.includes(item.id);

            return (
              <li className="menu-mobile__item" key={item.id}>
                {item.linkParent ? (
                  parentLink
                ) : (
                  <p
                    className={`menu-mobile__item-link ${
                      isActiveMenuChildren ? "active" : ""
                    }`}
                    onClick={() => showChildMenu(item.id)}
                  >
                    <span>{item.name}</span>
                    {isActiveMenuChildren ? (
                      <i className="fa-solid fa-minus"></i>
                    ) : (
                      <i className="fa-solid fa-plus"></i>
                    )}
                  </p>
                )}
                {isActiveMenuChildren && (
                  <ul className="menu-mobile-lv1">
                    {childDatas.map((child) => {
                      const idChild = child[item.attributesChild.id] || child;
                      const nameChild =
                        child[item.attributesChild.name] || child;
                      return (
                        <li key={idChild} className="menu-mobile__item-lv1">
                          <Link
                            to={item.attributesChild.link(nameChild, idChild)}
                            className="menu-mobile__item-link-lv1"
                          >
                            {nameChild}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`over-lay ${isShowMenuBar ? "active" : ""}`}
        onClick={() => setIsShowMenuBar(!isShowMenuBar)}
      ></div>

      <div className="search-mobile">
        <HeaderSearch isMobile ref={headerSearchRef} />
      </div>
    </>
  );
}

export default React.memo(MenuMobile);
