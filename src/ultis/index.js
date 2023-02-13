import dayjs from "dayjs";
import configApi from "../api/apiConfig";

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
