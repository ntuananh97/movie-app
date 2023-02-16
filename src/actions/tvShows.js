import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchPopularTvShows,
  fetchTopRatingTvShows,
  fetchOnTheAirTvShows,
  fetchGenresTvShow,
  getDetailTvShow,
} from "../services/tvShowServices";

export const fetchPopularTvShowsAction = createAsyncThunk(
  "tvShows/fetchPopularTvShows",
  async (options) => {
    const response = await fetchPopularTvShows(options);

    return response;
  }
);

export const fetchTopRatingTvShowsAction = createAsyncThunk(
  "tvShows/fetchTopRatingTvShows",
  async (options) => {
    const response = await fetchTopRatingTvShows(options);

    return response;
  }
);

export const fetchOnTheAirTvShowsAction = createAsyncThunk(
  "tvShows/fetchOnTheAirTvShows",
  async (options) => {
    const response = await fetchOnTheAirTvShows(options);

    return response;
  }
);

export const fetchGenresTvShowsAction = createAsyncThunk(
  "tvShows/fetchGenresTvShow",
  async (options) => {
    const response = await fetchGenresTvShow(options);

    return response;
  }
);

