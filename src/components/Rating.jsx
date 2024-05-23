import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Rating = ({ rating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    onRatingChange(index);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          className={`star ${index <= (hoverRating || rating) ? 'filled' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
        >
          <i className="fa-solid fa-star"></i>
        </span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.string.isRequired,
  onRatingChange: PropTypes.string.isRequired,
};

export default Rating;

