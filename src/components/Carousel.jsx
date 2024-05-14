// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// const Carousel = ({ pictures }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
//   };

//   const prevImage = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
//   };

//   return (
//     <div className="carousel">
//       <button onClick={prevImage}>Previous</button>
//       <img src={pictures[currentIndex]} alt={`Slide ${currentIndex}`} />
//       <button onClick={nextImage}>Next</button>
//     </div>
//   );
// };

// Carousel.propTypes = {
//   pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
// };

// export default Carousel;

