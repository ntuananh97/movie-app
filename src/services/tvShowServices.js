import { converToUrlAPi } from "../api/apiConfig"
import getApi from "../api/apiService"


export const fetchPopularTvShows = (options) => getApi(converToUrlAPi('tv/popular', options))

export const fetchTopRatingTvShows = (options) => getApi(converToUrlAPi('tv/top_rated', options))

export const fetchOnTheAirTvShows = (options) => getApi(converToUrlAPi('tv/on_the_air', options))

export const dicoverTvShows = (options) => getApi(converToUrlAPi('discover/tv', options))