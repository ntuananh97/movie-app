import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGenresMoviesAction, fetchNowPlayingMoviesAction, fetchPopularMoviesAction, fetchUpcomingMoviesAction } from "../actions/movie";
import { selectGenresMovies, selectNowPlayingMovies, selectPopularMovies, selectUpcomingMovies } from "../selector/movieSelector";

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
