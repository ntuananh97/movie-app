import { objectToParmas } from "."
import { encodeUrl } from "./encodeUrl"

/**
 * @param {string} name
 * @param {number} id
 * @returns {string}
 */
export const linkToDetailMoviePage = (name, id) => `/phim/${(encodeUrl(name))}/${id}`

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
export const linkToCountriesMoviePage = (name, code) => `/quoc-gia/${(encodeUrl(name))}/${code}`

/**
 * @returns {string}
 */
export const linkToNewMoviePage = () => `/phim-moi`

/**
 * @returns {string}
 */
export const linkToMoviesPage = () => `/phim-le`

/**
 * @returns {string}
 */
export const linkToOnPlayingMoviePage = () => `/phim-chieu-rap`

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