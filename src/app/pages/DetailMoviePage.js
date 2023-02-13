import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../componentWeb/BreadCrumb";
import LayoutWithTopMovie from "../Layout/LayoutWithTopMovie";
import movieImage from "../../assets/images/one piece.jpg";
import starOnImage from "../../assets/images/star-on.png";
import starOffImage from "../../assets/images/star-off.png";

function DetailMoviePage() {

  const params = useParams();
  console.log("DetailMoviePage ~ params", params)
  return (
    <>
      <BreadCrumb />
      <LayoutWithTopMovie>
        <section className="detail-movie">
          <div className="detail-movie__heading flex-s-b">
            <div className="detail-movie__image">
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
              <h1 className="detail-movie__title">Chuỗi vòng quỷ ám</h1>
              <p className="detail-movie__text">Michecl Balacj (2023)</p>
              <div className="detail-movie__box detail-movie__introduce">
                <ul className="detail-movie__info-list">
                  <li className="detail-movie__info-item">
                    <span>Trạng thái</span>{" "}
                    <span className="detail-movie__film-status">
                      Tập 1 vietsub
                    </span>
                  </li>
                  <li className="detail-movie__info-item">
                    <span>Sắp chiếu</span> <span>Tập 2, 3 vietsub</span>
                  </li>
                  <li className="detail-movie__info-item">
                    <span>Đạo diễn</span>{" "}
                    <a href="/">Bunjong Sinthanamongkolkul</a>
                  </li>
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
                <a className="detail-movie__tags-link" href="/tags/crash+course+in+romance/">
                  khoá học yêu cấp tốc
                </a>
              </li>
              <li>
                <a className="detail-movie__tags-link" href="/tags/crash+course+in+romance/">
                  crash course in romance
                </a>
              </li>
            </ul>
          
          </article>
          <p className="detail-movie__keywords">
              xem phim Khoá Học Yêu Cấp Tốc vietsub, phim Crash Course in
              Romance vietsub, xem Khoá Học Yêu Cấp Tốc vietsub online tap 1,
              tap 2, tap 3, tap 4, phim Crash Course in Romance ep 5, ep 6, ep
              7, ep 8, ep 9, ep 10, xem Khoá Học Yêu Cấp Tốc tập 11, tập 12, tập
              13, tập 14, tập 15, phim Khoá Học Yêu Cấp Tốc tap 16, tap 17, tap
              18, tap 19, tap 20, xem phim Khoá Học Yêu Cấp Tốc tập 21, 23, 24,
              25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
              41, 42, 43, 44, 45, 46, 47, 48, 49, 50, Khoá Học Yêu Cấp Tốc tap
              cuoi, Crash Course in Romance vietsub tron bo, review Khoá Học Yêu
              Cấp Tốc netflix, Khoá Học Yêu Cấp Tốc wetv, Khoá Học Yêu Cấp Tốc
              phimmoi, Khoá Học Yêu Cấp Tốc youtube, Khoá Học Yêu Cấp Tốc
              dongphym, Khoá Học Yêu Cấp Tốc vieon, phim keeng, bilutv, biphim,
              hdvip, hayghe, motphim, tvhay, zingtv, fptplay, phim1080,
              luotphim, fimfast, dongphim, fullphim, phephim, vtvgiaitri Khoá
              Học Yêu Cấp Tốc full, Crash Course in Romance online, Khoá Học Yêu
              Cấp Tốc Thuyết Minh, Khoá Học Yêu Cấp Tốc Vietsub, Khoá Học Yêu
              Cấp Tốc Lồng Tiếng
            </p>

          <div className="film-notes">
            LỊCH CHIẾU: 1 Tập mỗi tối Thứ 7, CN trên Mọt Chill.
          </div>

          <div className="detail-movie__comments">
            Facebook Comment
          </div>
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
