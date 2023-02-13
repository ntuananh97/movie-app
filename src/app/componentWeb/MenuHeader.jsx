import React from "react";
import { Link } from "react-router-dom";
import { COUNTRIES, NAVIGATION, TYPE_NAVIGATION } from "../../constanst.js";
import { useGetGenresMovies } from "../../hooks/movie";
import { renderYearList } from "../../ultis/index.js";

const YEAR_LIST = renderYearList();

function MenuHeader() {
  const { list: listGenresMovie } = useGetGenresMovies();

  return (
    <ul className="header-list flex-a-c">
      {NAVIGATION.map((item) => {
        const parentLink = (
          <Link to={item.linkParent} className="header-link">
            {item.name}
          </Link>
        );
        if (!item.hasChildren)
          return (
            <li className="header-item" key={item.id}>
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

        return (
          <li className="header-item" key={item.id}>
            {item.linkParent ? (
              parentLink
            ) : (
              <p className="header-link">{item.name}</p>
            )}
            <ul className={`header-list-child ${item.specialListChildClassPC}`}>
              {childDatas.map((child) => {
                const idChild = child[item.attributesChild.id] || child;
                const nameChild = child[item.attributesChild.name] || child;
                return (
                  <li key={idChild} className="header-list-child-item">
                    <Link to={item.attributesChild.link(nameChild, idChild, {
                      name: nameChild
                    })}>
                      {nameChild}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

export default React.memo(MenuHeader);
