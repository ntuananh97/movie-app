import React, { useImperativeHandle, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useOutsideAlerter } from "../../hooks";
import { searchMovies } from "../../services/movieServices";
import {
  linkToDetailMoviePage,
  linkToSearchMoviePage,
} from "../../ultis/convertRouters";

function HeaderSearch({ isMobile }, ref) {
  const [value, setValue] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const [isDisplaySuggest, setIsDisplaySuggest] = useState(false);
  const [isDisplayInMobile, setIsDisplayInMobile] = useState(false);
  // const navigate = useNavigate()

  const timer = useRef();
  const boxSearchRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        changeDisplaySearch() {
          setIsDisplayInMobile(!isDisplayInMobile);
        },
      };
    },
    [isDisplayInMobile]
  );

  useOutsideAlerter(boxSearchRef, () => {
    if (isMobile) return
    setIsDisplaySuggest(false);
  });

  const handleChangeSearch = (e) => {
    const { value } = e.target;
    setValue(value);
    if (timer.current) clearTimeout(timer.current);
    if (value.length < 2) {
      setResultSearch([]);
      return;
    }
    if (!isDisplaySuggest) setIsDisplaySuggest(true);
    timer.current = setTimeout(() => {
      searchMovies({
        query: value,
      }).then((data) => {
        const searchData = data.results?.slice(0, 6) || [];
        setResultSearch(searchData);
      });
    }, 250);
  };

  const highlightSearchText = (text) => {
    const parts = text.split(new RegExp(`(${value})`, "gi"));
    return (
      <>
        {parts.map((part) =>
          part.toLowerCase() === value.toLowerCase() ? (
            <span className="suggestions__strong">{part}</span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  const handleSearch = () => {
    if (!value.trim()) return;
    window.location.href = linkToSearchMoviePage({
      query: value.trim(),
    });
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <form
        ref={boxSearchRef}
        onSubmit={(e) => e.preventDefault()}
        style={{
          display:
            !isMobile || (isMobile && isDisplayInMobile) ? "block" : "none",
        }}
      >
        <div className="input-search">
          <input
            type="text"
            placeholder="V.d: tên phim, tên diễn viên..."
            value={value}
            onChange={handleChangeSearch}
            onKeyUp={handleKeyUp}
          />
          <i
            className={
              isMobile
                ? "fa-solid fa-circle-arrow-right"
                : "fa-solid fa-magnifying-glass"
            }
            onClick={handleSearch}
          ></i>

          <div
            className="suggestions"
            style={{ display: isDisplaySuggest ? "block" : "none" }}
          >
            <ul className="suggestions__list">
              <li className="suggestions__item first">
                Kết quả tìm kiếm cho từ khoá:{" "}
                <span className="suggestions__strong">"{value.trim()}"</span>
              </li>
              <li className="suggestions__item type">Phim</li>
              {resultSearch.map((item) => (
                <li className="suggestions__item film" key={item.id}>
                  <Link
                    to={linkToDetailMoviePage(item.title, item.id)}
                    className="suggestions__link"
                  >
                    <p className="suggestions__title">
                      {highlightSearchText(item.title)}
                    </p>
                    <p className="suggestions__original-title">
                      {highlightSearchText(item.original_title)}
                    </p>
                  </Link>
                </li>
              ))}

              <li className="suggestions__item last">
                <Link to="/">
                  <span>Tìm kiếm tất cả từ khoá</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </form>

      {isMobile && (
        <div
          className={`over-lay ${isDisplayInMobile ? "active" : ""}`}
          onClick={() => {
            setIsDisplaySuggest(false);
            setIsDisplayInMobile(false)
          }}
        ></div>
      )}
    </>
  );
}

export default React.forwardRef(HeaderSearch);
