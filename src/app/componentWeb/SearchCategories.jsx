import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { COUNTRIES, SORT_MOVIES, SORT_TV_SHOWS } from "../../constanst.js";
import { selectGenresMovies } from "../../selector/movieSelector";
import { renderYearList } from "../../ultis/index.js";
import Select from "../common/Select";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useGetGenresTvShows } from "../../hooks/tvShow.js";

const YEAR_LIST = renderYearList().map((x) => ({ id: x, name: x.toString() }));

function SearchCategories({ queryUrl = {}, onSubmit }) {
  let { id: categoryId } = useParams();
  const isTvShow = Number(categoryId) === 0;

  const { list: genresMovieList } = useSelector((state) =>
    selectGenresMovies(state)
  );
  const { list: genresTvShowList = [] } = useGetGenresTvShows(isTvShow);
  const [queryFilter, setqueryFilter] = useState(queryUrl);

  const sortOptionSelect = useMemo(
    () => (isTvShow ? SORT_TV_SHOWS : SORT_MOVIES),
    [isTvShow]
  );
  const genresOptionSelect = useMemo(
    () => (isTvShow ? genresTvShowList : genresMovieList),
    [isTvShow, genresTvShowList, genresMovieList]
  );

  useEffect(() => {
    setqueryFilter(queryUrl);
  }, [queryUrl]);

  const handleChangeSelect = useCallback(
    (val, name) => {
      setqueryFilter({
        ...queryFilter,
        [name]: val,
      });
    },
    [queryFilter]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(queryFilter);
  };

  return (
    <div className="search-categories">
      <form className="form-filter flex-a-c" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-filter__item">
          <Select
            name="sort_by"
            id="sort_by"
            options={sortOptionSelect}
            placeholder="Sắp xếp"
            onChange={(val) => handleChangeSelect(val, "sort_by")}
            value={queryFilter.sort_by || ""}
            isTvShow={isTvShow}
          />
        </div>
        <div className="form-filter__item">
          <Select
            name="genre"
            id="genre"
            options={genresOptionSelect}
            placeholder="Thể Loại"
            onChange={(val) => handleChangeSelect(val, "with_genres")}
            value={queryFilter.with_genres || ""}
          />
        </div>
        <div className="form-filter__item">
          <Select
            name="country"
            id="country"
            options={COUNTRIES}
            placeholder="Quốc gia"
            onChange={(val) => handleChangeSelect(val, "region")}
            value={queryFilter.region || ""}
          />
        </div>
        <div className="form-filter__item">
          <Select
            name="year"
            id="year"
            options={YEAR_LIST}
            placeholder="Năm"
            className="form-filter__select--year"
            onChange={(val) => handleChangeSelect(val, "year")}
            value={queryFilter.year || ""}
          />
        </div>
        <button type="submit" className="form-filter__btn btn">
          Lọc phim
        </button>
      </form>
    </div>
  );
}

SearchCategories.prototype = {
  queryUrl: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default SearchCategories;
