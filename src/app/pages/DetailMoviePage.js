import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../componentWeb/BreadCrumb";
import LayoutWithTopMovie from "../Layout/LayoutWithTopMovie";
import movieImage from "../../assets/images/one piece.jpg";
import starOnImage from "../../assets/images/star-on.png";
import starOffImage from "../../assets/images/star-off.png";
import { useGetDetailMovieOrTvShow } from "../../hooks/movie";
import { useCurrentPath } from "../../hooks";
import { ROUTER_PATH } from "../../constanst.js";
import {
  linkToCountriesMoviePage,
  linkToGenresMoviePage,
} from "../../ultis/convertRouters";
import dayjs from "dayjs";
import { renderImage } from "../../ultis";
import { fileSizeImageConfig } from "../../api/apiConfig";

function DetailMoviePage() {
  const currentPath = useCurrentPath();
  const { id } = useParams();
  const [breadCrumb, setBreadCrumb] = useState([]);

  const isMovie = currentPath === ROUTER_PATH.DETAIL_MOVIE;

  const { detail = {} } = useGetDetailMovieOrTvShow(isMovie, Number(id));
  console.log("DetailMoviePage ~ detail", detail);

  const country = useMemo(
    () => detail.production_countries?.[0] || {},
    [detail]
  );

  const name = detail.name || detail.title;
  const produceYear = dayjs(
    detail.first_air_date || detail.release_date
  ).year();
  console.log("DetailMoviePage ~ produceYear", produceYear);

  useEffect(() => {
    setBreadCrumb([
      {
        name: country.name || "Không có",
        url: country.iso_3166_1
          ? linkToCountriesMoviePage(country.name, country.iso_3166_1)
          : "",
      },
      {
        name,
      },
    ]);
  }, [country, name]);

  const renderLanguages = (languages = []) =>
    languages.reduce(
      (prevVal, val) => `${prevVal ? `${prevVal}, ` : ""}${val.name}`,
      ""
    );

  console.log(
    "DetailMoviePage ~ renderLanguages",
    renderLanguages(detail.spoken_languages)
  );
  return (
    <>
      <BreadCrumb listLink={breadCrumb} />
      <LayoutWithTopMovie>
        <section className="detail-movie">
          <div className="detail-movie__heading flex-s-b">
            <div className="detail-movie__image"
              style={{
                backgroundImage: `url(${renderImage(detail.poster_path, fileSizeImageConfig[500])})`
              }}
            >
              <div className="detail-movie__btn-wrapper flex-center">
                <a href="/" className="btn btn--detail-movie primary">
                  Tải phim
                </a>
                <a href="/" className="btn btn--detail-movie danger">
                  Xem phim
                </a>
              </div>
            </div>
            <div className="detail-movie__info">
              <h1 className="detail-movie__title">{name}</h1>
              <p className="detail-movie__text">
                {detail.original_name || detail.original_title} ({produceYear})
              </p>
              <div className="detail-movie__box detail-movie__introduce">
                <ul className="detail-movie__info-list">
                  <li className="detail-movie__info-item">
                    <span>Trạng thái</span>{" "}
                    <span className="detail-movie__film-status">
                      {detail.status}
                    </span>
                  </li>
                  {!isMovie && detail.next_episode_to_air?.id && (
                    <li className="detail-movie__info-item">
                      <span>Sắp chiếu</span>{" "}
                      <span>Tập {detail.episode_number}</span>
                    </li>
                  )}
                  {isMovie && (
                    <li className="detail-movie__info-item">
                      <span>Thời lượng</span> <span>{detail.runtime} phút</span>
                    </li>
                  )}
                  {!isMovie && (
                    <li className="detail-movie__info-item">
                      <span>Số tập</span>{" "}
                      <span>{detail.number_of_episodes} Tập</span>
                    </li>
                  )}

                  <li className="detail-movie__info-item">
                    <span>Ngôn ngữ</span>{" "}
                    <span>{renderLanguages(detail.spoken_languages)}</span>
                  </li>
                  <li className="detail-movie__info-item">
                    <span>Năm sản xuất</span> <span>{produceYear}</span>
                  </li>
                  <li className="detail-movie__info-item">
                    <span>Quốc gia</span> <span>{country.name}</span>
                  </li>
                  {detail.genres?.length > 0 && (
                    <li className="detail-movie__info-item">
                      <span>Thể loại</span>
                      {detail.genres.map((gen, ind) => (
                        <a
                          key={gen.id}
                          href={linkToGenresMoviePage(gen.name, gen.id)}
                        >
                          {gen.name}
                          {ind < detail.genres.length - 1 ? <>,&nbsp;</> : ''}
                        </a>
                      ))}
                    </li>
                  )}
                 
                  {!isMovie && detail.created_by?.length > 0 && (
                    <li className="detail-movie__info-item">
                      <span>Đạo diễn</span>
                      {detail.created_by.map((item, ind) => (
                        <span
                          key={item.id}
                          href={linkToGenresMoviePage(item.name, item.id)}
                        >
                          {item.name}
                          {ind < detail.created_by.length - 1 ? <>,&nbsp;</> : ''}
                        </span>
                      ))}
                    </li>
                  )}
                </ul>
              </div>
              <div className="detail-movie__box detail-movie__review">
                <div>Plugin like share Facebook</div>
                <div className="detail-movie__star flex-a-c">
                  <div className="detail-movie__star-review flex-a-c">
                    {[...Array(10)].map((_, i) =>
                      i <= 7 ? (
                        <img src={starOnImage} alt="star-on" />
                      ) : (
                        <img src={starOffImage} alt="star-off" />
                      )
                    )}
                  </div>
                  <div className="detail-movie__score-review flex-a-c">
                    <p className="detail-movie__score">8/10&nbsp;</p>
                    <p className="detail-movie__total-review">
                      (8.2 điểm <span>/</span> 5 lượt)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <article className="detail-movie__lastest flex flex-wr">
            <h2 className="detail-movie__box-heading">Tập mới nhất :</h2>
            <ul className="flex-a-c list-espoide flex-wr">
              <li>
                <a className="list-espoide__movie" href="/">
                  Tập 11
                </a>
              </li>
              <li>
                <a className="list-espoide__movie" href="/">
                  Tập 10
                </a>
              </li>
              <li>
                <a className="list-espoide__movie" href="/">
                  Tập 09
                </a>
              </li>
            </ul>
          </article>

          <article className="detail-movie__content">
            <h2 className="detail-movie__box-heading">Nội dung phim</h2>
            <p>
              Khoá Học Yêu Cấp Tốc kể về một người mẹ tốt bụng xoay xở với thế
              giới giáo dục tư thục khắc nghiệt khi con gái của cô cố gắng tham
              gia lớp học của một giáo viên dạy toán nổi tiếng.
            </p>
          </article>

          <article className="detail-movie__tags flex-a-c flex-wr">
            <h3>
              <span>Tags</span>
              <i className="fa-solid fa-caret-right" />
            </h3>
            <ul className="flex-a-c">
              <li>
                <a
                  className="detail-movie__tags-link"
                  href="/tags/crash+course+in+romance/"
                >
                  khoá học yêu cấp tốc
                </a>
              </li>
              <li>
                <a
                  className="detail-movie__tags-link"
                  href="/tags/crash+course+in+romance/"
                >
                  crash course in romance
                </a>
              </li>
            </ul>
          </article>
          <p className="detail-movie__keywords">
            xem phim Khoá Học Yêu Cấp Tốc vietsub, phim Crash Course in Romance
            vietsub, xem Khoá Học Yêu Cấp Tốc vietsub online tap 1, tap 2, tap
            3, tap 4, phim Crash Course in Romance ep 5, ep 6, ep 7, ep 8, ep 9,
            ep 10, xem Khoá Học Yêu Cấp Tốc tập 11, tập 12, tập 13, tập 14, tập
            15, phim Khoá Học Yêu Cấp Tốc tap 16, tap 17, tap 18, tap 19, tap
            20, xem phim Khoá Học Yêu Cấp Tốc tập 21, 23, 24, 25, 26, 27, 28,
            29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
            46, 47, 48, 49, 50, Khoá Học Yêu Cấp Tốc tap cuoi, Crash Course in
            Romance vietsub tron bo, review Khoá Học Yêu Cấp Tốc netflix, Khoá
            Học Yêu Cấp Tốc wetv, Khoá Học Yêu Cấp Tốc phimmoi, Khoá Học Yêu Cấp
            Tốc youtube, Khoá Học Yêu Cấp Tốc dongphym, Khoá Học Yêu Cấp Tốc
            vieon, phim keeng, bilutv, biphim, hdvip, hayghe, motphim, tvhay,
            zingtv, fptplay, phim1080, luotphim, fimfast, dongphim, fullphim,
            phephim, vtvgiaitri Khoá Học Yêu Cấp Tốc full, Crash Course in
            Romance online, Khoá Học Yêu Cấp Tốc Thuyết Minh, Khoá Học Yêu Cấp
            Tốc Vietsub, Khoá Học Yêu Cấp Tốc Lồng Tiếng
          </p>

          <div className="film-notes">
            LỊCH CHIẾU: 1 Tập mỗi tối Thứ 7, CN trên Mọt Chill.
          </div>

          <div className="detail-movie__comments">Facebook Comment</div>
        </section>

        <section className="recommend-movie">
          <h2 className="recommend-movie__heading">
            <i className="fa-regular fa-star"></i>
            <span>Phim đề cử</span>
          </h2>

          <div className="hot-movie-content">
            {[...Array(4)].map((x, i) => (
              <a href="/" className="movie-box" key={i}>
                <div className="movie-box__img">
                  <img src={movieImage} alt="movie" className="img-objc" />
                </div>

                <div className="movie-sub">Tập 11 vietsub</div>
                <h2 className="movie-box-title">One Piece</h2>
                <i className="icon-play"></i>
              </a>
            ))}
          </div>
        </section>
      </LayoutWithTopMovie>
    </>
  );
}

export default DetailMoviePage;
