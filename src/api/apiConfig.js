import { objectToParmas } from "../ultis";

export const fileSizeImageConfig = {
    500: 'w500',
    400: 'w400',
    300: 'w300',
    200: 'w200',
    original: 'original'
}

const config = {
    prefixApi: 'https://api.themoviedb.org/3',
    apiKey: 'b0621145cfcd95f80d0a5b2faf030b3a',
    prefixImage: 'https://image.tmdb.org/t/p',
    fileSizeImage: fileSizeImageConfig[500] // original | w500 | w400 | w300 | w200
}


export const converToUrlAPi = (typeApi = "", option = {}) => {
    let queryString = objectToParmas(option);
    if (Object.keys(option).length > 0) {
        queryString = `&${queryString}`
    }
    return `${config.prefixApi}/${typeApi}?api_key=${config.apiKey}` + queryString
}

export default config