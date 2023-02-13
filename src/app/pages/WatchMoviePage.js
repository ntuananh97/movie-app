import React from "react";
import BreadCrumb from "../componentWeb/BreadCrumb";
import hemoji from "../../assets/images/hemoji.png";
import movieImage from "../../assets/images/one piece.jpg";

function WatchMoviePage() {
  return (
    <main className="main">
      <div className="container">
        <section className="watch-movie">
          <div className="film-notes introduce">
            Nhà Mọt có địa chỉ chính thức là <strong>motchill.tv</strong>, các
            bạn hãy chia sẻ & ủng hộ tụi mình nhé!&nbsp;
            <img src={hemoji} width="20px" alt="icon-hemoji" />
          </div>
          <BreadCrumb />
          <div className="film-notes show-time">
            LỊCH CHIẾU: 1 Tập mỗi tối Thứ 7, CN trên Mọt Chill.
          </div>
          <div className="film-notes change-server flex-a-c">
            Bạn xem phim bị lag, giật? Đổi server tại đây&nbsp;
            <i className="fa-solid fa-arrow-down" />
          </div>

          <div className="flex-center" style={{ height: "552px" }}>
            Video phim
          </div>

          <div className="watch-movie__movie-actions flex-b-c">
            <div>Face actions</div>
            <div className="watch-movie__actions-btn flex-a-c">
              <button className="btn btn--watch-movie ad-close">
                <i className="fa-solid fa-eye-slash" />
                Tắt quảng cáo
              </button>
              <button className="btn btn--watch-movie">
                <i className="fa-solid fa-eye-slash" />
                Tắt quảng cáo
              </button>
              <button className="btn btn--watch-movie">
                <i className="fa-solid fa-eye-slash" />
                Tắt quảng cáo
              </button>
              <button className="btn btn--watch-movie">
                <i className="fa-solid fa-eye-slash" />
                Tắt quảng cáo
              </button>
            </div>
          </div>

          <ul className="flex-a-c list-espoide flex-wr">
            {[...Array(25)].map((_, i) => (
              <li key={i}>
                <a
                  className={`list-espoide__movie ${i === 0 ? "current" : ""}`}
                  href="/"
                >
                  Tập {i + 1}
                </a>
              </li>
            ))}
          </ul>

          <article className="watch-movie__info">
            <h1 className="watch-movie__title">
              <a href="/">Tam thế</a>
              <span>&nbsp;-&nbsp;</span>
              <span className="watch-movie__chapter-name">&nbsp;Tập 1</span>
            </h1>
            <p className="watch-movie__real-name">
              <a href="/">Three Body (2023)</a>
            </p>
            <p className="watch-movie__short-des">
              Tam Thể kể về năm khoa học cơ bản trên Trái Đất đã xảy ra một sự
              xáo trộn bất thường khiến giới khoa học hoang mang lo sợ. Vụ tự
              sát kì lạ của một nhà khoa học một phép đếm ngược gần như là phép
              màu Biên giới Khoa học hành động bí mật trò chơi Tam Thể đầy bí
              ẩn... Uông Diểu một nhà khoa học về vật liệu nano ... [
              <a href="/">Xem thêm</a>]
            </p>
            <div className="watch-movie__review flex-b-c">
              <div>Facebook like and Share</div>
              <div>Đánh giá</div>
            </div>
          </article>

          <div className="recommend-movie">
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
          </div>
        </section>
      </div>
      <section className="watch-movie__bottom-contents">
        <div className="container">
          <div>Facebook comments</div>
          <article className="watch-movie__tags">
            <h2>Tags</h2>
            <p>
              xem phim Trạch Quân Ký tập 1, Phim Trạch Quân Ký tập 1 Vietsub,
              Trạch Quân Ký ep 1 full hd, download phim Trạch Quân Ký tập 1, xem
              online Trạch Quân Ký tập 1 netflix, wetv, vieon, phim keeng,
              youtube, phimmoi, bilutv, biphim, hdvip, hayghe, motphim, tvhay,
              zingtv, fptplay, phim1080, luotphim, fimfast, dongphim, dongphym,
              fullphim, phephim, vtvgiaitri, preview Trạch Quân Ký tập 1 thuyết
              minh, Trạch Quân Ký tập 1 lồng tiếng
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default WatchMoviePage;
