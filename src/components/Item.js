import React from 'react';
import Image from "./Image";

const Item = ({ product }) => {
    return (
        <div className="item">
            {/* Render the product image */}
            <Image imgUrl={product.imgUrl} alt={product.brand} />
            <div>
                {/* Render the product brand */}
                <p>{product.brand}</p>
                {/* Render the product model */}
                <p data-testid="product-model">{product.model}</p>
                {/* Render the product price if available, otherwise display a message */}
                {product.price !== "" ? <p>{product.price}€</p> : <p>Price not available</p>}
            </div>
        </div>
    );
}

export default Item;