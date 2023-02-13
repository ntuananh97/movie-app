import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ listLink = [] }) {
  return (
    <div className="breadcrumb flex-a-c">
      <Link className="breadcrumb__link flex-a-c" to="/">
        <p>Trang chủ</p>
        <span>/</span>
      </Link>
      {listLink.map((item, index) => {
        if (listLink.length === 1 || index === listLink.length - 1)
          return (
            <p className="breadcrumb__title" key={index}>
              {item.name}
            </p>
          );
        return (
          <Link className="breadcrumb__link flex-a-c" to={item.url} key={index}>
            <p>{item.name}</p>
            <span>/</span>
          </Link>
        );
      })}
    </div>
  );
}

export default React.memo(BreadCrumb);
