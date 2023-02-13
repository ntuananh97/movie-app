import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import BreadCrumb from "../componentWeb/BreadCrumb";
import LayoutWithTopMovie from "../Layout/LayoutWithTopMovie";
import Pagination from "../common/Pagination";
import { useGetQueryParams } from "../../hooks";
import { searchMovies } from "../../services/movieServices";
import MovieBox from "../componentWeb/MovieBox";
import { linkToSearchMoviePage } from "../../ultis/convertRouters";

function SearchPage() {
  const { query: nameMovie, page: pageQuery} = useGetQueryParams();

  const [resultMovies, setResultMovies] = useState([]);
  const [pagination, setPagination] = useState({});
  const breadcrumb = useRef([
    {
      name: `Kết quả tìm kiếm: "${nameMovie}"`,
    },
  ]);

  const fetchSearchMovies = () => {
    searchMovies({
      query: nameMovie,
      page: pageQuery || 1,
    }).then((data) => {
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
  }, []);

  const handleChangePage = useCallback((targetPage) => {
    window.location.href = (linkToSearchMoviePage({
      query: nameMovie,
      page: targetPage
    }))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { page, total_pages } = pagination;

  return (
    <>
      <BreadCrumb listLink={breadcrumb.current} />
      <LayoutWithTopMovie>
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

export default SearchPage;
