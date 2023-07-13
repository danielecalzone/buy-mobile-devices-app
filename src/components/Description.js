import React from 'react';
import Actions from "./Actions";

const Description = ({ product, onAddToCart }) => {

    // Destructure the required properties from the product object
    const {
        brand,
        model,
        price,
        cpu,
        ram,
        os,
        chipset,
        displayType,
        displayResolution,
        battery,
        primaryCamera,
        secondaryCamera,
        dimensions,
        weight,
    } = product;


    // Helper function to render a property value
    const renderPropertyValue = (property, value) => {
        // Check if the value is empty or not available
        if (!value || value === '') {
            return <p>{property}: Not Available</p>;
        }

        // Check if the property is Weight and append "grams" to the value
        if (property === 'Weight') {
            return <p>{property}: {value} grams</p>;
        }
        // Render the property and its value
        return <p>{property}: {value}</p>;
    };



    return (
        <div className="description-container">
            <div className="description-content">
                {/* Render the brand name */}
                <h2>{brand}</h2>

                {/* Render the model name */}
                <h3 data-testid="product-model">{model}</h3>

                {/* Render the price */}
                <p className="price">Price: {price}€</p>

                {/* Render the list of properties */}
                <div className="property-list">
                    {renderPropertyValue('CPU', cpu)}
                    {renderPropertyValue('RAM', ram)}
                    {renderPropertyValue('OS', os)}
                    {renderPropertyValue('Chipset', chipset)}
                    {renderPropertyValue('Display Type', displayType)}
                    {renderPropertyValue('Screen Resolution', displayResolution)}
                    {renderPropertyValue('Battery', battery)}
                    {renderPropertyValue('Primary Camera', Array.isArray(primaryCamera) && primaryCamera.join(' '))}
                    {renderPropertyValue('Secondary Camera', Array.isArray(secondaryCamera) && secondaryCamera.join(' '))}
                    {renderPropertyValue('Dimensions', dimensions)}
                    {renderPropertyValue('Weight', weight)}

                    {/* Render the Actions component */}
                    <Actions product={product} onAddToCart={onAddToCart} />
                </div>
            </div>
        </div>
    );
};

export default Description;