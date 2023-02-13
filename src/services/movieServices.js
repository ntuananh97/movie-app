import { converToUrlAPi } from "../api/apiConfig"
import getApi from "../api/apiService"


export const fetchPopularMovies = (options) => getApi(converToUrlAPi('movie/popular', options))

export const fetchUpcomingMovies = (options) => getApi(converToUrlAPi('movie/upcoming', options))

export const fetchGenresMovies = (options) => getApi(converToUrlAPi('genre/movie/list', options))

export const fetchNowPlayingMovies = (options) => getApi(converToUrlAPi('movie/now_playing', options))

export const searchMovies = (options) => getApi(converToUrlAPi('search/movie', options))

export const dicoveryMovies = (options) => getApi(converToUrlAPi('discover/movie', options))