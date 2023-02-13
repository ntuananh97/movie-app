import React from "react";
import BreadCrumb from "../componentWeb/BreadCrumb";
import SearchCategories from "../componentWeb/SearchCategories";
import LayoutWithTopMovie from "../Layout/LayoutWithTopMovie";
import movieImage from "../../assets/images/one piece.jpg";
import Pagination from "../common/Pagination";

function DirectorPage() {
  return (
    <>
      <BreadCrumb />
      <LayoutWithTopMovie>
        <SearchCategories />
        <section className="categories-page cate-movie">
          <div className="row row-grid">
            {[...Array(5)].map((x, i) => (
              <div className="col-6 col-sm-4 col-lg-3 col-grid" key={i}>
                <a href="/" className="movie-box movie-special">
                  <div className="movie-box__img">
                    <img src={movieImage} alt="movie" className="img-objc" />
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

          <Pagination />
        </section>
        
      </LayoutWithTopMovie>
    </>
  );
}

export default DirectorPage;
