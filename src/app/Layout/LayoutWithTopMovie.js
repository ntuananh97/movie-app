import dayjs from "dayjs";
import React from "react";
import { Link } from "react-router-dom";
import { useGetUpcomingMovies } from "../../hooks/movie";
import { renderImage } from "../../ultis";
import { linkToDetailMoviePage } from "../../ultis/convertRouters";
import Stars from '../componentWeb/Stars'
import { fileSizeImageConfig } from "../../api/apiConfig";

function LayoutWithTopMovie({ children }) {
  const { list } = useGetUpcomingMovies();

  return (
    <div className="row main-content">
      <div className="main-left col-12 col-lg-8 col-custom">{children}</div>
      <div className="main-right col-12 col-lg-4 col-custom">
        <div className="incoming-movie">
          <div className="heading-top-movie">
            <h1 className="heading-top-movie__title">Phim sắp chiếu</h1>
            <div className="heading-top-movie__bar"></div>
          </div>

          <ul className="incoming-movie__list">
            {list.slice(0, 5).map((item, i) => (
              <li
                className={`incoming-movie__item flex ${
                  i % 2 !== 0 ? "active" : ""
                }`}
                key={item.id}
              >
                <Link
                  to={linkToDetailMoviePage(item.title, item.id)}
                  className="incoming-movie__img"
                >
                  <img src={renderImage(item.poster_path, fileSizeImageConfig[200])} alt={item.title} />
                </Link>
                <div className="incoming-movie__content">
                  <Link to={linkToDetailMoviePage(item.title, item.id)}>
                    <h2 className="incoming-movie__title" title={item.title}>{item.title}</h2>
                  </Link>
                  <p className="incoming-movie__date">{dayjs(item.release_date).format('YYYY')}</p>
                  <div className="incoming-movie__star">
                    <Stars number={5} total={5} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="trending-movie">
          <div className="heading-top-movie">
            <h1 className="heading-top-movie__title">Trending</h1>
            <div className="heading-top-movie__bar"></div>
          </div>

          <div className="trending-movie__tabs flex-b-c">
            <div className="trending-movie__tab active">Ngày</div>
            <div className="trending-movie__tab">Tuần</div>
            <div className="trending-movie__tab">Tháng</div>
          </div>

          <ul className="trending-movie__list">
            {[...Array(5)].map((_, i) => (
              <li
                className={`trending-movie__item flex ${
                  i % 2 !== 0 ? "active" : ""
                }`}
                key={i}
              >
                <div className="trending-movie__rank">
                  <div className="trending-movie__number">{i + 1}</div>
                </div>
                <div className="trending-movie__content">
                  <a href="/">
                    <h2 className="trending-movie__title">Phù đỗ quyên</h2>
                  </a>
                  <p className="trending-movie__info">84 lượt quan tâm</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="keywords">
          <div className="heading-top-movie">
            <h1 className="heading-top-movie__title">Từ khoá nổi bật</h1>
            <div className="heading-top-movie__bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutWithTopMovie;
