import { configureStore } from '@reduxjs/toolkit'
import movieReducer from '../slice/movieSlice'
import tvShowReducer from '../slice/tvShowSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    tvShows: tvShowReducer
  },
})