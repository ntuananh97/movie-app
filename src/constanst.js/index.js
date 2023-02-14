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

export const NAME_PAGES = {
    HOME: 'Trang chủ',
    GENRES: 'Thể loại',
    COUNTRIES: 'Quốc gia',
    NEW_MOVIE: 'Phim mới',
    SINGLE_MOVIE: 'Phim lẻ',
    ON_PLAYING_MOVIE: 'Phim chiếu rạp',
    TV_SHOW: 'Tv Show',
}


export const TYPE_NAVIGATION = {
    categories: 'the-loai',
    countries: 'quoc-gia',
    year: 'year'
}

export const NAVIGATION = [
    {
        id: 1,
        name: NAME_PAGES.HOME,
        linkParent: '/',
    },
    {
        id: 2,
        name: NAME_PAGES.GENRES,
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
        name: NAME_PAGES.COUNTRIES,
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
        name: NAME_PAGES.NEW_MOVIE,
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
        name: NAME_PAGES.SINGLE_MOVIE,
        linkParent: linkToMoviesPage(),
    },
    {
        id: 6,
        name: NAME_PAGES.ON_PLAYING_MOVIE,
        linkParent: linkToOnPlayingMoviePage,
    },
    {
        id: 7,
        name: NAME_PAGES.TV_SHOW,
        linkParent: linkToGenresMoviePage(NAME_PAGES.TV_SHOW, 0),
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

export const SORT_TV_SHOWS = [
    {
        name: 'Năm sản xuất',
        id: 'first_air_date.desc'
    },
    {
        name: 'Đánh giá',
        id: 'vote_average.desc'
    },
    {
        name: 'Độ phổ biến',
        id: 'popularity.desc'
    }
   
]

export const TYPE_API = {
    MOVIE: 'movie',
    TV_SHOWS: 'tv_shows'
}

export const ROUTER_PATH = {
    HOME: '/',
    CATEGORIES: '/the-loai/:name/:id',
    SEARCH: '/tim-kiem',
    DETAIL_MOVIE: '/phim/:name/:id',
    COUNTRIES: '/quoc-gia/:name/:id',
    NEW_MOVIE: '/phim-moi',
    SINGLE_MOVIE: '/phim-le',
    ON_PLAYING_MOVIE: '/phim-chieu-rap',
    WATCH_MOVIE: '/xem-phim',
    ACTOR: '/dien-vien',
    DIRECTOR: '/dao-dien',
    TAGS: '/tags',
}





