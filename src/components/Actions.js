import React, { useState } from 'react';

const Actions = ({ product, onAddToCart }) => {
    // Initialize the selectedColor state with the code of the first color option
    const [selectedColor, setSelectedColor] = useState(product?.options?.colors[0]?.code);

    // Initialize the selectedStorage state with the code of the first storage option
    const [selectedStorage, setSelectedStorage] = useState(product?.options?.storages[0]?.code);

    // Event handler for color selection change
    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };

    // Event handler for storage selection change
    const handleStorageChange = (event) => {
        setSelectedStorage(event.target.value);
    };

    // Event handler for adding the selected product to the cart
    const handleAddToCart = () => {
        // Create a cart item object with the selected color and storage codes
        const cartItem = {
            id: product.id,
            colorCode: selectedColor,
            storageCode: selectedStorage,
        };

        // Call the onAddToCart function and pass the cart item object
        onAddToCart(cartItem);
    };

    return (
        <div className="actions-container">
            {/* Render the color selection dropdown */}
            <select value={selectedColor} onChange={handleColorChange} className="select-color">
                {/* Map over the color options and render each option */}
                {product?.options?.colors.map((color) => (
                    <option key={color.code} value={color.code}>
                        {color.name}
                    </option>
                ))}
            </select>

            {/* Render the storage selection dropdown */}
            <select value={selectedStorage} onChange={handleStorageChange} className="select-storage">
                {/* Map over the storage options and render each option */}
                {product?.options?.storages.map((storage) => (
                    <option key={storage.code} value={storage.code}>
                        {storage.name}
                    </option>
                ))}
            </select>

            {/* Render the "Add to Cart" button */}
            <button onClick={handleAddToCart} className="add-to-cart-button">
                Add to Cart
            </button>
        </div>
    );
};

export default Actions;