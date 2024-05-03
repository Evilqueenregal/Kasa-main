import React from 'react';

function Banner({ imagePath, altText, title }) {
    return (
        <div className="banner">
            <img src={imagePath} alt={altText} />
            <h1>{title}</h1>
        </div>
    );
}

export default Banner;
