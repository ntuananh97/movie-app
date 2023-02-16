import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchPopularMovies,
  fetchUpcomingMovies,
  fetchNowPlayingMovies,
  fetchGenresMovies,
  getDetailMovie,
} from "../services/movieServices";
import { getDetailTvShow } from "../services/tvShowServices";

export const fetchPopularMoviesAction = createAsyncThunk(
  "movie/fetchPopularMovies",
  async (options) => {
    const response = await fetchPopularMovies(options);

    return response;
  }
);

export const fetchUpcomingMoviesAction = createAsyncThunk(
  "movie/fetchUpcomingMovies",
  async (options) => {
    const response = await fetchUpcomingMovies(options);

    return response;
  }
);

export const fetchNowPlayingMoviesAction = createAsyncThunk(
  "movie/fetchNowPlayingMovies",
  async (options) => {
    const response = await fetchNowPlayingMovies(options);

    return response;
  }
);

export const fetchGenresMoviesAction = createAsyncThunk(
  "movie/fetchGenresMovies",
  async (options) => {
    const response = await fetchGenresMovies(options);

    return response;
  }
);

export const getDetailMovieOrTvShowAction = createAsyncThunk(
  "movie/getDetailMovieOrTvShow",
  async ({isMovie, id, options}) => {
    const response = await isMovie ? getDetailMovie(id, options) : getDetailTvShow(id, options);
    return response;
  }
);
