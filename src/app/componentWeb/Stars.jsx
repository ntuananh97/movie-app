import React from "react";
import starOnImage from "../../assets/images/star-on.png";
import starOffImage from "../../assets/images/star-off.png";
import PropTypes from "prop-types";

function Stars({number = 0, total = 0}) {
  return (
    <>
      {[...Array(number)].map((_, i) => (
        <img src={starOnImage} alt="star-on" key={i} />
      ))}
      {[...Array(total - number)].map((_, i) => (
        <img src={starOffImage} alt="star-off" key={i} />
      ))}
    </>
  );
}

Stars.prototype = {
    number: PropTypes.number,
    total: PropTypes.number,
};
  
export default Stars;
