import React from "react";
import { NUMBER_DISPLAY_HOME } from "../../constanst.js";
import { useGetNowPlayingMovies,  } from "../../hooks/movie";
import HotMovie from "../componentWeb/HotMovie";
import MovieBox from "../componentWeb/MovieBox";
import TvShowsHomePage from "../componentWeb/TvShowsHomePage.jsx";
import LayoutWithTopMovie from "../Layout/LayoutWithTopMovie";

function HomePage() {
  const { list: listNowPlayingMovies } = useGetNowPlayingMovies();

  return (
    <>
      <HotMovie />
      <LayoutWithTopMovie>
        <TvShowsHomePage />
        <div className="cate-movie cate-movie__hot">
          <div className="cate-movie__heading flex">
            <h2 className="tab-movie active">Đang chiếu rạp</h2>
          </div>

          <div className="cate-movie__main">
            <div className="row gx-5 row-grid">
              {listNowPlayingMovies.slice(0, NUMBER_DISPLAY_HOME).map((item) => (
                <MovieBox
                  className="col-6 col-sm-4 col-lg-3 col-grid"
                  key={item.id}
                  id={item.id}
                  pathImage={item.poster_path}
                  name={item.title}
                  voteAverage={item.vote_average}
                />
              ))}
            </div>
          </div>
        </div>
      </LayoutWithTopMovie>
    </>
  );
}

export default HomePage;
