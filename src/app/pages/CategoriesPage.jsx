import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import BreadCrumb from "../componentWeb/BreadCrumb";
import SearchCategories from "../componentWeb/SearchCategories";
import LayoutWithTopMovie from "../Layout/LayoutWithTopMovie";
import Pagination from "../common/Pagination";
import { useGetQueryParams } from "../../hooks";
import { dicoveryMovies } from "../../services/movieServices";
import { useNavigate, useParams } from "react-router-dom";
import { linkToGenresMoviePage } from "../../ultis/convertRouters";
import MovieBox from "../componentWeb/MovieBox";
import { dicoverTvShows } from "../../services/tvShowServices";

const convertOptionSearch = ({ sort_by, region, year, with_genres, page }) => {
  let optionSearch = {};
  if (sort_by) optionSearch.sort_by = sort_by;
  if (with_genres) optionSearch.with_genres = with_genres;
  if (page) optionSearch.page = page;
  if (region) optionSearch.region = region;
  if (year) optionSearch.year = Number(year);
  return optionSearch;
};

function CategoriesPage() {
  const queryUrl = useGetQueryParams();
  const { name: nameCategory } = queryUrl;
  let { id: categoryId } = useParams();
  const navigate = useNavigate();
  console.log('categoryId', categoryId);

  const [resultMovies, setResultMovies] = useState([]);
  const [pagination, setPagination] = useState({});

  const breadcrumb = useRef([
    {
      name: nameCategory,
    },
  ]);

  const fetchSearchMovies = () => {
    console.log('categoryId', categoryId);
    const getDiscoverApi = categoryId !== '0' ? dicoveryMovies : dicoverTvShows
    getDiscoverApi(
      convertOptionSearch({
        ...queryUrl,
        with_genres: categoryId + (queryUrl.with_genres ?  `,${queryUrl.with_genres}`: ""),
      })
    ).then((data) => {
      setResultMovies(data.results);
      setPagination({
        page: data.page,
        total_results: data.total_results,
        total_pages: data.total_pages,
      });
    });
  };

  useLayoutEffect(() => {
    fetchSearchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId, queryUrl]);

  const handleChangePage = useCallback((targetPage) => {
    navigate(linkToGenresMoviePage(nameCategory, categoryId, {
      ...convertOptionSearch({
        ...queryUrl,
        page: targetPage,
        with_genres: queryUrl?.with_genres || "",
      }),
      name: nameCategory,
    }))
    // window.location.href = linkToGenresMoviePage(nameCategory, categoryId, {
    //   ...convertOptionSearch({
    //     ...queryUrl,
    //     page: targetPage,
    //     with_genres: queryUrl?.with_genres || "",
    //   }),
    //   name: nameCategory,
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { page, total_pages } = pagination;

  return (
    <>
      <BreadCrumb listLink={breadcrumb.current} />
      <LayoutWithTopMovie>
        <SearchCategories
          queryUrl={queryUrl}
          convertOptionSearch={convertOptionSearch}
        />
        <section className="categories-page cate-movie">
          <div className="row row-grid">
            {resultMovies.map((item) => (
              <MovieBox
                className="col-6 col-sm-4 col-lg-3 col-grid"
                key={item.id}
                id={item.id}
                pathImage={item.poster_path}
                name={item.title}
                voteAverage={item.vote_average}
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
