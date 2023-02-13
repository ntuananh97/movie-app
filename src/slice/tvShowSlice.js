import { createSlice } from "@reduxjs/toolkit";
import { fetchGenresTvShowsAction, fetchOnTheAirTvShowsAction, fetchPopularTvShowsAction, fetchTopRatingTvShowsAction } from "../actions/tvShows";

// function rejectAction  (state) {
//   state.loading = false
// }

const initialState = {
  popularTvShows: {
    loading: true,
    list: [],
    pagination: {}
  },
  topRatingTvShows: {
    loading: true,
    list: [],
    pagination: {}
  },
  onTheAirTvShows: {
    loading: true,
    list: [],
    pagination: {}
  },
  genresTvShows: {
    loading: true,
    list: [],
    pagination: {}
  },
};

export const tvShowSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
   
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopularTvShowsAction.fulfilled, (state, action) => {
      state.popularTvShows.loading = false;
      state.popularTvShows.list = action.payload.results
      state.popularTvShows.pagination = action.payload
    });
    builder.addCase(fetchPopularTvShowsAction.rejected, (state, action) => {
      state.popularTvShows.loading = false;

    });
    builder.addCase(fetchTopRatingTvShowsAction.fulfilled, (state, action) => {
      state.topRatingTvShows.loading = false;
      state.topRatingTvShows.list = action.payload.results
      state.topRatingTvShows.pagination = action.payload
    });
    builder.addCase(fetchTopRatingTvShowsAction.rejected, (state, action) => {
      state.topRatingTvShows.loading = false;

    });
    builder.addCase(fetchOnTheAirTvShowsAction.fulfilled, (state, action) => {
      state.onTheAirTvShows.loading = false;
      state.onTheAirTvShows.list = action.payload.results
      state.onTheAirTvShows.pagination = action.payload
    });
    builder.addCase(fetchOnTheAirTvShowsAction.rejected, (state, action) => {
      state.onTheAirTvShows.loading = false;

    });
    // genres
    builder.addCase(fetchGenresTvShowsAction.fulfilled, (state, action) => {
      state.genresTvShows.loading = false;
      state.genresTvShows.list = action.payload.genres
    });
    builder.addCase(fetchGenresTvShowsAction.rejected, (state, action) => {
      state.genresTvShows.loading = false;

    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = tvShowSlice.actions;

export default tvShowSlice.reducer;
