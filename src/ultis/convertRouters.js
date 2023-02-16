import { objectToParmas } from "."
import { encodeUrl } from "./encodeUrl"

/**
 * @param {string} name
 * @param {number} id
 * @returns {string}
 */
export const linkToDetailMoviePage = (name, id) => `/phim/${(encodeUrl(name))}/${id}`

/**
 * @param {string} name
 * @param {number} id
 * @returns {string}
 */
export const linkToDetailTvShowsPage = (name, id) => `/tvShow/${(encodeUrl(name))}/${id}`

/**
 * @param {{query: string, page: number}} options
 * @returns {string}
 */
export const linkToSearchMoviePage = (options) => `/tim-kiem?${objectToParmas(options)}`

/**
 * @param {string} name
 * @param {string} code
 * @returns {string}
 */
export const linkToCountriesMoviePage = (name, id, options = {}) => {
    const query = objectToParmas(options)
    return `/quoc-gia/${(encodeUrl(name))}/${id}${query ? '?' : ''}${query}`
}

/**
 * @param {Object} options
 * @returns {string} 
 */
export const linkToNewMoviePage = (options = {}) => {
    const query = objectToParmas(options)
    return `/phim-moi${query ? '?' : ''}${query}`
}

/**
 * @param {Object} options
 * @returns {string} 
 */
export const linkToOnPlayingMoviePage = (options = {}) => {
    const query = objectToParmas(options)
    return `/phim-chieu-rap${query ? '?' : ''}${query}`
}

/**
 * @param {Object} options
 * @returns {string} 
 */
export const linkToMoviesPage = (options = {}) => {
    const query = objectToParmas(options)
    return `/phim-le${query ? '?' : ''}${query}`
}

/**
 * @param {string} name
 * @param {number} id
 * @param {Object} options
 * @returns {string}
 */
export const linkToGenresMoviePage = (name, id, options = {}) => {
    const query = objectToParmas(options)
    return `/the-loai/${(encodeUrl(name))}/${id}${query ? '?' : ''}${query}`
}