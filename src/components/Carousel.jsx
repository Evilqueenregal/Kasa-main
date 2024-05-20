import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carousel">
        <button className="carousel-button prev-button" onClick={prevImage}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
        <button className="carousel-button next-button" onClick={nextImage}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
        <div className="carousel-counter">
          {currentIndex + 1} / {pictures.length}
        </div>
    </div>
  );
};

Carousel.propTypes = {
   pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
