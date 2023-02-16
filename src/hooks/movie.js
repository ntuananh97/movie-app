import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenresMoviesAction, fetchNowPlayingMoviesAction, fetchPopularMoviesAction, fetchUpcomingMoviesAction, getDetailMovieOrTvShowAction } from "../actions/movie";
import { selectDetailMovieOrTvShow, selectGenresMovies, selectNowPlayingMovies, selectPopularMovies, selectUpcomingMovies } from "../selector/movieSelector";

export function useGetPopularMovies() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => selectPopularMovies(state));
  useEffect(() => {
    dispatch(fetchPopularMoviesAction());
  }, [dispatch]);

  return { ...movie };
}

export function useGetUpcomingMovies() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => selectUpcomingMovies(state));
  useEffect(() => {
    dispatch(fetchUpcomingMoviesAction());
  }, [dispatch]);

  return { ...movie };
}

export function useGetNowPlayingMovies() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => selectNowPlayingMovies(state));
  useEffect(() => {
    dispatch(fetchNowPlayingMoviesAction());
  }, [dispatch]);

  return { ...movie };
}

export function useGetGenresMovies() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => selectGenresMovies(state));
  useEffect(() => {
    dispatch(fetchGenresMoviesAction({
      language: 'vi'
    }));
  }, [dispatch]);

  return { ...movie };
}


/**
* @param {undefined | string} language
* @param {boolean} isMovie
* @param {number} id
* @returns {Object}
*/
export function useGetDetailMovieOrTvShow(isMovie, id, language ) {
  const dispatch = useDispatch();
  const detail = useSelector((state) => selectDetailMovieOrTvShow(state));

  useEffect(() => {
    dispatch(getDetailMovieOrTvShowAction({
      isMovie,
      id,
      options: {
        language: language || 'vi'
      }
    }));
  }, [dispatch, isMovie, id, language]);

  return { ...detail };
}
