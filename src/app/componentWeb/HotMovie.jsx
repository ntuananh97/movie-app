import React from "react";
import { Link } from "react-router-dom";
import { useGetPopularMovies } from "../../hooks/movie";
import { renderImage } from "../../ultis";
import { linkToDetailMoviePage } from "../../ultis/convertRouters";
import Slide from "./Slide";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};

function HotMovie() {
  const { list } = useGetPopularMovies();

  return (
    <div className="hot-movie">
      <h1 className="title-section">Phim hot</h1>

      <div className="hot-movie-content">
        <Slide options={settings}>
          {list.map((item) => (
            <Link
              to={linkToDetailMoviePage(item.title, item.id)}
              className="movie-box"
              key={item.id}
            >
              <div className="movie-box__img">
                <img
                  src={renderImage(item.poster_path)}
                  alt={item.title}
                  className="img-objc"
                />
              </div>

              <div className="movie-sub">{item.vote_average * 10}% vote</div>
              <h2 className="movie-box-title" title={item.title}>{item.title}</h2>
              <i className="icon-play"></i>
            </Link>
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default HotMovie;
