import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOnTheAirTvShowsAction,
  fetchPopularTvShowsAction,
  fetchTopRatingTvShowsAction,
} from "../../actions/tvShows.js";
import { NUMBER_DISPLAY_HOME, TV_SHOWS_TAB } from "../../constanst.js";
import {
  selectOnTheAirTvShows,
  selectPopularTvShows,
  selectTopRatingTvShows,
} from "../../selector/tvShowSelector.js";
import MovieBox from "./MovieBox";

function TvShowsHomePage() {
  const [tab, setTab] = useState(TV_SHOWS_TAB.POPULAR);
  const [clickTabs, setClickTabs] = useState([TV_SHOWS_TAB.POPULAR]);

  const dispatch = useDispatch();
  const { list: listPopularTvShows, loading: loadingPopularTvShows } =
    useSelector((state) => selectPopularTvShows(state));
  const { list: listTopRatingTvShows, loading: loadingTopRatingTvShows } =
    useSelector((state) => selectTopRatingTvShows(state));
  const { list: listOnTheAirTvShows, loading: loadingOnTheAirTvShows } =
    useSelector((state) => selectOnTheAirTvShows(state));

  useLayoutEffect(() => {
    switch (clickTabs[0]) {
      case TV_SHOWS_TAB.POPULAR:
        dispatch(fetchPopularTvShowsAction());
        break;
      case TV_SHOWS_TAB.TOP_RATED:
        dispatch(fetchTopRatingTvShowsAction());
        break;
      case TV_SHOWS_TAB.ON_AIR:
        dispatch(fetchOnTheAirTvShowsAction());
        break;

      default:
        break;
    }
  }, [clickTabs, dispatch]);

  const handleClickTab = (changeTab) => {
    setTab(changeTab);

    if (!clickTabs.includes(changeTab)) {
      setClickTabs([changeTab, ...clickTabs]);
    }
  };

  return (
    <div className="cate-movie">
      <div className="cate-movie__heading flex">
        <h2
          onClick={() => handleClickTab(TV_SHOWS_TAB.POPULAR)}
          className={`tab-movie ${
            tab === TV_SHOWS_TAB.POPULAR ? "active" : ""
          }`}
        >
          TV Shows phổ biến
        </h2>
        <h2
          onClick={() => handleClickTab(TV_SHOWS_TAB.TOP_RATED)}
          className={`tab-movie ${
            tab === TV_SHOWS_TAB.TOP_RATED ? "active" : ""
          }`}
        >
          TV Shows rating cao
        </h2>
        <h2
          onClick={() => handleClickTab(TV_SHOWS_TAB.ON_AIR)}
          className={`tab-movie ${tab === TV_SHOWS_TAB.ON_AIR ? "active" : ""}`}
        >
          TV Shows đang chiếu
        </h2>
      </div>

      {/* Popular  */}
      {clickTabs.includes(TV_SHOWS_TAB.POPULAR) && (
        <div
          className="cate-movie__main"
          style={{
            display: tab === TV_SHOWS_TAB.POPULAR ? "block" : "none",
          }}
        >
          <div className="row gx-5 row-grid">
            {listPopularTvShows.slice(0, NUMBER_DISPLAY_HOME).map((item) => (
              <MovieBox
                className="col-6 col-sm-4 col-lg-3 col-grid"
                key={item.id}
                id={item.id}
                pathImage={item.poster_path}
                name={item.name}
                voteAverage={item.vote_average}
                isTvShow
              />
            ))}
          </div>
        </div>
      )}

      {/* Top rating  */}
      {clickTabs.includes(TV_SHOWS_TAB.TOP_RATED) && (
        <div
          className="cate-movie__main"
          style={{
            display: tab === TV_SHOWS_TAB.TOP_RATED ? "block" : "none",
          }}
        >
          <div className="row gx-5 row-grid">
            {listTopRatingTvShows.slice(0, NUMBER_DISPLAY_HOME).map((item) => (
              <MovieBox
                className="col-6 col-sm-4 col-lg-3 col-grid"
                key={item.id}
                id={item.id}
                pathImage={item.poster_path}
                name={item.name}
                voteAverage={item.vote_average}
                isTvShow
              />
            ))}
          </div>
        </div>
      )}

      {/* On the air  */}
      {clickTabs.includes(TV_SHOWS_TAB.ON_AIR) && (
        <div
          className="cate-movie__main"
          style={{
            display: tab === TV_SHOWS_TAB.ON_AIR ? "block" : "none",
          }}
        >
          <div className="row gx-5 row-grid">
            {listOnTheAirTvShows.slice(0, NUMBER_DISPLAY_HOME).map((item) => (
              <MovieBox
                className="col-6 col-sm-4 col-lg-3 col-grid"
                key={item.id}
                id={item.id}
                pathImage={item.poster_path}
                name={item.name}
                voteAverage={item.vote_average}
                isTvShow
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TvShowsHomePage;
