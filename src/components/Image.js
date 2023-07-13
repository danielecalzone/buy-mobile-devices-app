import React from 'react';

const Image = ({ imgUrl, alt }) => {
    return (
        <div>
            {/* Image component */}
            <img src={imgUrl} alt={alt} className="image-details" />
        </div>
    );
}

export default Image;