import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        // Update the search text state
        setSearchText(event.target.value);
        // Call the onSearch function passed from the parent component
        // and pass the updated search text as the argument
        onSearch(event.target.value);
    };

    return (
        <div>
            {/* Render an input field */}
            <input
                type="text"
                placeholder="Search products..."
                value={searchText}
                onChange={handleInputChange}
            />
        </div>
    );
}

export default Search;