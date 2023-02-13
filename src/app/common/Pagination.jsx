import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";


function Pagination({ page = 1, total = 1, onChangePage }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (total <= 1) return;

    // Hiển thị 5 trang đằng sau trang hiện tại
    // Nếu số trang sau >= 6, thì hiển thị 4 trang, ..., trang cuối
    // Hiển thị 2 trang trước trang hiện tại
    // Nếu số trang >= 3, hiển thị 1 trang, ..., trang đầu
    let pageArr = [];
    if (page - 1 >= 3) {
      pageArr = [1, "", page - 1, page];
    } else {
      for (let i = 1; i <= page; i++) {
        pageArr.push(i);
      }
    }

    if (total - page >= 6) {
      for (let i = page + 1; i <= page + 4; i++) {
        pageArr.push(i);
      }
      pageArr = [...pageArr, "", total];
    } else {
      for (let i = page + 1; i <= total; i++) {
        pageArr.push(i);
      }
    }

    setPages(pageArr);
  }, [page, total]);

  const changePage = (target) => {
    let targetPage = target;
    switch (target) {
      case "prev":
        targetPage = page - 1;
        break;
      case "next":
        targetPage = page + 1;
        break;

      default:
        break;
    }

    onChangePage?.(targetPage);
  };

  if (total <= 1) return null;

  return (
    <>
      <ul className="pagination flex-a-c">
        {page !== 1 && (
          <li className="pagination__item " onClick={() => changePage("prev")}>
            <p className="pagination__link">Trước</p>
          </li>
        )}
        {pages.map((pg, index) =>
          pg ? (
            <li
              className="pagination__item"
              key={index}
              onClick={() => changePage(pg)}
            >
              <p className={`pagination__link ${pg === page ? "active" : ""}`}>
                {pg}
              </p>
            </li>
          ) : (
            <li className="pagination__item pagination__dots" key={index}>
              ...
            </li>
          )
        )}

        {page !== total && (
          <li className="pagination__item" onClick={() => changePage("next")}>
            <p className="pagination__link">Sau</p>
          </li>
        )}
      </ul>
    </>
  );
}

Pagination.prototype = {
  page: PropTypes.number,
  total: PropTypes.number,
  onChangePage: PropTypes.func,
};

export default React.memo(Pagination);
