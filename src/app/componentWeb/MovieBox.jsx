import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { renderImage } from "../../ultis";
import {
  linkToDetailMoviePage,
  linkToDetailTvShowsPage,
} from "../../ultis/convertRouters";
import { fileSizeImageConfig } from "../../api/apiConfig";

function MovieBox({
  className = "",
  name = "",
  pathImage = "",
  id,
  voteAverage = 0,
  isTvShow,
}) {
  return (
    <div className={className}>
      <Link
        to={
          isTvShow
            ? linkToDetailTvShowsPage(name, id)
            : linkToDetailMoviePage(name, id)
        }
        className="movie-box movie-special"
      >
        <div className="movie-box__img">
          <img
            src={renderImage(pathImage, fileSizeImageConfig[300])}
            alt={name}
            className="img-objc"
          />
        </div>

        <div className="movie-sub">{Math.round(voteAverage * 10)}% vote</div>
        <h2 className="movie-box-title" title={name}>
          {name}
        </h2>
        <i className="icon-play"></i>
      </Link>
    </div>
  );
}

MovieBox.prototype = {
  item: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string,
  pathImage: PropTypes.string,
  voteAverage: PropTypes.number,
  id: PropTypes.number,
};

export default React.memo(MovieBox);
