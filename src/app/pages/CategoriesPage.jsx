import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import BreadCrumb from "../componentWeb/BreadCrumb";
import SearchCategories from "../componentWeb/SearchCategories";
import LayoutWithTopMovie from "../Layout/LayoutWithTopMovie";
import Pagination from "../common/Pagination";
import { useCurrentPath, useGetQueryParams } from "../../hooks";
import { dicoveryMovies, fetchNowPlayingMovies } from "../../services/movieServices";
import { useNavigate, useParams } from "react-router-dom";
import {
  linkToCountriesMoviePage,
  linkToGenresMoviePage,
  linkToNewMoviePage,
  linkToOnPlayingMoviePage,
} from "../../ultis/convertRouters";
import MovieBox from "../componentWeb/MovieBox";
import { dicoverTvShows } from "../../services/tvShowServices";
import { NAME_PAGES, ROUTER_PATH, TYPE_API } from "../../constanst.js";
import { convertOptionSearch } from "../../ultis";

const nameBreadcrumb = (nameCategory, isMovie, currentPath) => {
  let name = nameCategory;
  switch (currentPath) {
    case ROUTER_PATH.COUNTRIES:
      name = `Phim ${name}`;
      break;
    case ROUTER_PATH.NEW_MOVIE:
      name = `Phim mới`;
      break;
    case ROUTER_PATH.SINGLE_MOVIE:
      name = `Phim lẻ`;
      break;
    case ROUTER_PATH.ON_PLAYING_MOVIE:
      name = `Phim chiếu rạp`;
      break;

    default:
      break;
  }

  return isMovie ? name : `Phim ${name}`;
};

function CategoriesPage() {
  const queryUrl = useGetQueryParams();
  const currentPath = useCurrentPath();

  let { name: nameCategory } = queryUrl;
  let { id: categoryId } = useParams();
  const navigate = useNavigate();

  const [resultMovies, setResultMovies] = useState([]);
  const [pagination, setPagination] = useState({});
  const isMovie = Number(categoryId) !== 0;
  if (!isMovie) nameCategory = NAME_PAGES.TV_SHOW
  const breadcrumb = useRef([
    {
      name: "",
    },
  ]);

  const fetchSearchMovies = () => {
    let getDiscoverApi = isMovie ? dicoveryMovies : dicoverTvShows;
    let options = {
      ...queryUrl,
      typeApi: isMovie ? TYPE_API.MOVIE : TYPE_API.TV_SHOWS,
    };
    switch (currentPath) {
      case ROUTER_PATH.COUNTRIES:
        options = {
          ...options,
          region: categoryId,
        };
        break;
      case ROUTER_PATH.NEW_MOVIE:
        break;
      case ROUTER_PATH.SINGLE_MOVIE:
        break;
      case ROUTER_PATH.ON_PLAYING_MOVIE:
        getDiscoverApi = fetchNowPlayingMovies
        break;

      default:
        options = {
          ...options,
          with_genres:
            (isMovie ? categoryId : "") +
            (queryUrl.with_genres ? `,${queryUrl.with_genres}` : ""),
        };
        break;
    }
    getDiscoverApi(convertOptionSearch(options, true)).then((data) => {
      setResultMovies(data.results);
      setPagination({
        page: data.page,
        total_results: data.total_results,
        total_pages: data.total_pages,
      });
    });
  };

  useLayoutEffect(() => {
    breadcrumb.current = [
      {
        name: nameBreadcrumb(nameCategory, isMovie, currentPath),
      },
    ];
    fetchSearchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, queryUrl, currentPath, isMovie, currentPath]);

  const handleChangePage = useCallback(
    (targetPage, querySubmit) => {
      let linkConvert = "";
      const newQuery = querySubmit ? querySubmit : queryUrl;

      const options = convertOptionSearch({
        ...newQuery,
        page: targetPage || newQuery.page,
        with_genres: newQuery?.with_genres || "",
        typeApi: isMovie ? TYPE_API.MOVIE : TYPE_API.TV_SHOWS,
      });

      switch (currentPath) {
        case ROUTER_PATH.COUNTRIES:
          linkConvert = linkToCountriesMoviePage(nameCategory, categoryId, {
            ...options,
            name: nameCategory,
          });
          break;
        case ROUTER_PATH.NEW_MOVIE:
          linkConvert = linkToNewMoviePage({
            ...options,
            name: nameCategory,
          });
          break;
        case ROUTER_PATH.SINGLE_MOVIE:
          linkConvert = linkToNewMoviePage({
            ...options,
          });
          break;
        case ROUTER_PATH.ON_PLAYING_MOVIE:
          linkConvert = linkToOnPlayingMoviePage({
            ...options,
          });
          break;

        default:
          linkConvert = linkToGenresMoviePage(nameCategory, categoryId, {
            ...options,
            name: nameCategory,
          });
          break;
      }


      navigate(linkConvert);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [categoryId, nameCategory, queryUrl, currentPath, isMovie]
  );

  const { page, total_pages } = pagination;

  return (
    <>
      <BreadCrumb listLink={breadcrumb.current} />
      <LayoutWithTopMovie>
        <SearchCategories
          queryUrl={queryUrl}
          onSubmit={(val) => handleChangePage(undefined, val)}
        />
        <section className="categories-page cate-movie">
          <div className="row row-grid">
            {resultMovies.map((item) => (
              <MovieBox
                className="col-6 col-sm-4 col-lg-3 col-grid"
                key={item.id}
                id={item.id}
                pathImage={item.poster_path}
                name={item.title || item.name}
                voteAverage={item.vote_average}
                isTvShow={!isMovie}
              />
            ))}
          </div>

          <Pagination
            page={page}
            total={total_pages}
            onChangePage={handleChangePage}
          />
        </section>
      </LayoutWithTopMovie>
    </>
  );
}

export default CategoriesPage;
