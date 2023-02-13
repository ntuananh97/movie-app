import React, { useState } from "react";
import { useSelector } from "react-redux";
import { COUNTRIES, SORT_MOVIES } from "../../constanst.js";
import { selectGenresMovies } from "../../selector/movieSelector";
import { renderYearList } from "../../ultis/index.js";
import Select from "../common/Select";
import PropTypes from "prop-types";
import { linkToGenresMoviePage } from "../../ultis/convertRouters.js";
import { useParams } from "react-router-dom";

const YEAR_LIST = renderYearList().map(x => ({id: x, name: x.toString()}));

function SearchCategories({queryUrl = {}, convertOptionSearch}) {
  const { list: genreList } = useSelector((state) => selectGenresMovies(state));
  const [queryFilter, setqueryFilter] = useState(queryUrl)
  let { id: categoryId } = useParams();

  const handleChangeSelect = (val, name) => {
    setqueryFilter({
      ...queryFilter,
      [name]: val
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = linkToGenresMoviePage(queryFilter.name, categoryId, {
      ...convertOptionSearch({
        ...queryFilter,
        with_genres: queryFilter?.with_genres || "",
      }),
      name: queryFilter.name,
    });
  }

  return (
    <div className="search-categories">
      <form className="form-filter flex-a-c" onSubmit={e => handleSubmit(e)}>
        <div className="form-filter__item">
          <Select
            name="sort_by"
            id="sort_by"
            options={SORT_MOVIES}
            placeholder="Sắp xếp"
            onChange={val => handleChangeSelect(val, 'sort_by')}
            value={queryFilter.sort_by || ""}
          />
        </div>
        <div className="form-filter__item">
          <Select
            name="genre"
            id="genre"
            options={genreList}
            placeholder="Thể Loại"
            onChange={val => handleChangeSelect(val, 'with_genres')}
            value={queryFilter.with_genres || ""}
          />
        </div>
        <div className="form-filter__item">
          <Select
            name="country"
            id="country"
            options={COUNTRIES}
            placeholder="Quốc gia"
            onChange={val => handleChangeSelect(val, 'region')}
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
            onChange={val => handleChangeSelect(val, 'year')}
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
  convertOptionSearch: PropTypes.func,
  queryUrl: PropTypes.object,
}

export default SearchCategories;
