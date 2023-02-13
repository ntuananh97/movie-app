import React, { useRef } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { useState } from "react";

function Slide({ children, options = {} }) {
  const [index, setIndex] = useState(options.initialSlide || 0);
  
  const beforeChange = (_, next) => {
  setIndex(next)
  }

  const slideRef = useRef();
  const settings = {
    ...options,
    arrows: false,
    beforeChange
  };

  const infinite = slideRef.current?.props?.infinite;
  const slidesToShow = slideRef.current?.props?.slidesToShow || 1;
  const lengthSlide = slideRef.current?.props?.children?.length;

  return (
    <div className="slider-slick">
      <Slider {...settings} ref={slideRef}> 
        {children}
      </Slider>
      <div className="slider-slick__nav">
        <button
          className="button slider-slick__nav-button prev"
          onClick={() => slideRef.current.slickPrev()}
          style={{
            display: !infinite && index === 0 ? "none" : "block"
          }}
        >
          <i className="fa-solid fa-angle-left" />
        </button>
        <button
          className="button slider-slick__nav-button next"
          onClick={() => slideRef.current.slickNext()}
          style={{
            display: !infinite && index === lengthSlide-slidesToShow ? "none" : "block"
          }}
        >
          <i className="fa-solid fa-angle-right" />
        </button>
      </div>
    </div>
  );
}

Slide.prototype = {
  options: PropTypes.object,
  children: PropTypes.element,
};

export default React.memo(Slide);
