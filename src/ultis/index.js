import dayjs from "dayjs";
import configApi from "../api/apiConfig";
import { TYPE_API } from "../constanst.js";

/**
 * @param {string} path
 * @param {string} prefixImage
 * @returns {string}
 */
export const renderImage = (path, fileSizeImage) => {
    return `${configApi.prefixImage}/${fileSizeImage || configApi.fileSizeImage}${path}`
}

/**
 * @returns {Array}
 */
export const renderYearList = () => {
    const listYears = [];
    const currentYear = dayjs().year();
    for (let i = currentYear; i >= currentYear - 10; i--) {
      listYears.push(i);
    }
    return listYears;
};

/**
 * @param {Object} obj
 * @returns {string}
 */
export const objectToParmas = (obj) => Object.entries(obj).map(([key, val]) => `${key}=${val}`).join('&')

/**
 * @returns {string}
 */
// Random id
export function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

/**
 * @param {{sort_by: string, region: string, year: number | string, with_genres: string,
 * typeApi: string, page: number, name: string}} options
 * @param {boolean} isReturnOptions
 * @returns {Object}
 */
export const convertOptionSearch = (options, isReturnOptions) => {
  const { sort_by, region, year, with_genres, page, typeApi,  } = options
  const isMovieType = TYPE_API.MOVIE  === typeApi;
  const optionSearchKey = {
    year: isMovieType ? 'year' : 'first_air_date_year',
    sort_by: 'sort_by',
    page: 'page',
    with_genres: 'with_genres',
    name: 'name',
    region: isMovieType ? 'region' : 'watch_region'
  }

  let optionSearch = {};
  if (sort_by) optionSearch[optionSearchKey.sort_by] = sort_by;
  if (with_genres && with_genres !== "0") optionSearch[optionSearchKey.with_genres] = with_genres;
  if (page) optionSearch[optionSearchKey.page] = page;
  if (region) optionSearch[optionSearchKey.region] = region.toLocaleUpperCase();
  // if (name && isMovieType) optionSearch[optionSearchKey.name] = name;
  if (year) optionSearch[optionSearchKey.year] = Number(year);

  // if you need option to pass param
  if (isReturnOptions) return optionSearch;

  // In tv show, If you need link to navigate
  // we always search country is region key and year is year key
  if (!isMovieType && optionSearch[optionSearchKey.region]) {
    optionSearch.region = optionSearch[optionSearchKey.region];
    delete optionSearch[optionSearchKey.region]
  }
  if (!isMovieType && optionSearch[optionSearchKey.year]) {
    optionSearch.year = optionSearch[optionSearchKey.year];
    delete optionSearch[optionSearchKey.year]
  }

  return optionSearch;
};
