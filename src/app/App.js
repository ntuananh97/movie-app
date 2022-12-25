import "../assets/styles/reset.css";
import "../assets/styles/bootstrap-grid.min.css";
import "../assets/styles/base.css";
import "../assets/styles/global.scss";
import movieImage from "../assets/images/one piece.jpg";
import starImage from "../assets/images/star-on.png";
import Footer from "./componentWeb/Footer";
import Header from "./componentWeb/Header";

function App() {
  return (
    <div>
      <Header />

      <div className="main">
        <div className="container">
          <div className="hot-movie">
            <h1 className="title-section">Phim hot</h1>

            <div className="hot-movie-content">
              {[...Array(5)].map((x, i) => (
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
          <div className="row main-content">
            <div className="main-left col-12 col-lg-8 col-custom">
              <div className="cate-movie">
                <div className="cate-movie__heading flex">
                  <h2 className="tab-movie active">Phim bộ mới cập nhật</h2>
                  <h2 className="tab-movie">Phim lẻ mới cập nhật</h2>
                  <h2 className="tab-movie">Phim đã hoàn thành</h2>
                </div>

                <div className="cate-movie__main">
                  <div className="row gx-5 row-grid">
                    {[...Array(5)].map((x, i) => (
                      <div className="col-12 col-lg-3 col-grid" key={i}>
                        <a href="/" className="movie-box movie-special">
                          <div className="movie-box__img">
                            <img
                              src={movieImage}
                              alt="movie"
                              className="img-objc"
                            />
                          </div>

                          <div className="movie-sub">Tập 11 vietsub</div>
                          <h2 className="movie-box-title">
                            <a href="/">One Piece</a>
                          </h2>
                          <i className="icon-play"></i>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="cate-movie cate-movie__hot">
                <div className="cate-movie__heading flex">
                  <h2 className="tab-movie active">Được yêu thích</h2>
                </div>

                <div className="cate-movie__main">
                  <div className="row gx-5 row-grid">
                    {[...Array(5)].map((x, i) => (
                      <div className="col-12 col-lg-3 col-grid" key={i}>
                        <a href="/" className="movie-box movie-special">
                          <div className="movie-box__img">
                            <img
                              src={movieImage}
                              alt="movie"
                              className="img-objc"
                            />
                          </div>

                          <div className="movie-sub">Tập 11 vietsub</div>
                          <h2 className="movie-box-title">
                            <a href="/">One Piece</a>
                          </h2>
                          <i className="icon-play"></i>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="main-right col-12 col-lg-4 col-custom">
              <div className="incoming-movie">
                <div className="heading-top-movie">
                  <h1 className="heading-top-movie__title">Phim sắp chiếu</h1>
                  <div className="heading-top-movie__bar"></div>
                </div>

                <ul className="incoming-movie__list">
                  {[...Array(5)].map((_, i) => (
                    <li className={`incoming-movie__item flex ${i % 2 !== 0 ? 'active' : ''}`} key={i}>
                      <a href="/" className="incoming-movie__img">
                        <img alt="" src={movieImage} />
                      </a>
                      <div className="incoming-movie__content">
                        <a  href="/">
                          <h2 className="incoming-movie__title">Phù đỗ quyên</h2>
                        </a>
                        <p className="incoming-movie__date">2022</p>
                        <div className="incoming-movie__star">
                          <img src={starImage} alt="star" />
                          <img src={starImage} alt="star" />
                          <img src={starImage} alt="star" />
                          <img src={starImage} alt="star" />
                          <img src={starImage} alt="star" />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
