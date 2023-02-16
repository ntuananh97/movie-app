import { createSlice } from "@reduxjs/toolkit";
import { fetchGenresMoviesAction, fetchNowPlayingMoviesAction, fetchPopularMoviesAction, fetchUpcomingMoviesAction, getDetailMovieOrTvShowAction } from "../actions/movie";

// function rejectAction  (state) {
//   state.loading = false
// }

const initialState = {
  popularMovies: {
    loading: true,
    list: [],
    pagination: {}
  },
  upcomingMovies: {
    loading: true,
    list: [],
    pagination: {}
  },
  nowPlayingMovies: {
    loading: true,
    list: [],
    pagination: {}
  },
  genresMovies: {
    loading: true,
    list: [],
  },
  detailMovieOrTvShow: {
    loading: true,
    detail: {},
  },
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
   
  },
  extraReducers: (builder) => {
    // popularMovies
    builder.addCase(fetchPopularMoviesAction.fulfilled, (state, action) => {
      state.popularMovies.loading = false;
      state.popularMovies.list = action.payload.results
      state.popularMovies.pagination = action.payload
    });
    builder.addCase(fetchPopularMoviesAction.rejected, (state, action) => {
      state.popularMovies.loading = false;

    });
    // upcomingMovies
    builder.addCase(fetchUpcomingMoviesAction.fulfilled, (state, action) => {
      state.upcomingMovies.loading = false;
      state.upcomingMovies.list = action.payload.results
      state.upcomingMovies.pagination = action.payload
    });
    builder.addCase(fetchUpcomingMoviesAction.rejected, (state, action) => {
      state.upcomingMovies.loading = false;

    });
    // nowPlayingMovies
    builder.addCase(fetchNowPlayingMoviesAction.fulfilled, (state, action) => {
      state.nowPlayingMovies.loading = false;
      state.nowPlayingMovies.list = action.payload.results
      state.nowPlayingMovies.pagination = action.payload
    });
    builder.addCase(fetchNowPlayingMoviesAction.rejected, (state, action) => {
      state.nowPlayingMovies.loading = false;

    });
    // genresMovies
    builder.addCase(fetchGenresMoviesAction.fulfilled, (state, action) => {
      state.genresMovies.loading = false;
      state.genresMovies.list = action.payload.genres
    });
    builder.addCase(fetchGenresMoviesAction.rejected, (state, action) => {
      state.genresMovies.loading = false;

    });
    // get detail movie or tv show
    builder.addCase(getDetailMovieOrTvShowAction.fulfilled, (state, action) => {
      state.detailMovieOrTvShow.loading = false;
      state.detailMovieOrTvShow.detail = action.payload
    });
    builder.addCase(getDetailMovieOrTvShowAction.rejected, (state, action) => {
      state.detailMovieOrTvShow.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = movieSlice.actions;

export default movieSlice.reducer;
