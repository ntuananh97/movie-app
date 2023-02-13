import { linkToCountriesMoviePage, linkToGenresMoviePage, linkToMoviesPage, linkToNewMoviePage, linkToOnPlayingMoviePage } from "../ultis/convertRouters";

export const TV_SHOWS_TAB = {
    POPULAR: 'popular',
    TOP_RATED: 'topRated',
    ON_AIR: 'onTheAir'
}

export const NUMBER_DISPLAY_HOME = 12;

export const COUNTRIES = [
    {
        id: 'VN',
        name: 'Việt Nam'
    },
    {
        id: 'CN',
        name: 'Trung Quốc'
    },
    {
        id: 'KR',
        name: 'Hàn Quốc'
    },
    {
        id: 'TH',
        name: 'Thái Lan'
    },
    {
        id: 'JP',
        name: 'Nhật Bản'
    },
    {
        id: 'IN',
        name: 'Ấn Độ'
    },
    {
        id: 'US',
        name: 'Mỹ'
    },
]

export const TYPE_NAVIGATION = {
    categories: 'the-loai',
    countries: 'quoc-gia',
    year: 'year'
}

export const NAVIGATION = [
    {
        id: 1,
        name: "Trang chủ",
        linkParent: '/',
    },
    {
        id: 2,
        name: "Thể loại",
        linkParent: '',
        hasChildren: true,
        specialListChildClassPC: 'span-1',
        attributesChild: {
            id: 'id',
            name: 'name',
            link: linkToGenresMoviePage
        },
        type: TYPE_NAVIGATION.categories
    },
    {
        id: 3,
        name: "Quốc gia",
        linkParent: '',
        hasChildren: true,
        specialListChildClassPC: 'span-2',
        attributesChild: {
            id: 'id',
            name: 'name',
            link: linkToCountriesMoviePage
        },
        type: TYPE_NAVIGATION.countries
    },
    {
        id: 4,
        name: "Phim mới",
        linkParent: linkToNewMoviePage(),
        hasChildren: true,
        specialListChildClassPC: 'span-3',
        attributesChild: {
            id: '',
            name: '',
            link: linkToNewMoviePage
        },
        type: TYPE_NAVIGATION.year
    },
    {
        id: 5,
        name: "Phim lẻ",
        linkParent: linkToMoviesPage,
    },
    {
        id: 6,
        name: "Phim chiếu rạp",
        linkParent: linkToOnPlayingMoviePage,
    },
    {
        id: 7,
        name: "TV Show",
        linkParent: linkToGenresMoviePage("TV Show", 0),
    },
]

export const SORT_MOVIES = [
    {
        name: 'Năm sản xuất',
        id: 'release_date.desc'
    },
    {
        name: 'Đánh giá',
        id: 'vote_average.desc'
    },
    {
        name: 'Độ phổ biến',
        id: 'popularity.desc'
    },
    {
        name: 'Doanh thu',
        id: 'revenue.desc'
    },
]




