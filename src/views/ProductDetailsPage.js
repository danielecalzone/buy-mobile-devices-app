import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { addToCart, getProductDetails } from '../hooks/Api';
import Description from '../components/Description';
import Image from '../components/Image';
import { saveDataToCache } from '../utils/Cache';
import Loader from "../components/Loader";

const ProductDetailsPage = ({ onCartUpdate }) => {
    const location = useLocation();
    const productId = location.pathname.split('/').pop();
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product details when the component mounts
        async function fetchProductDetails() {
            try {
                const response = await getProductDetails(productId);
                setProduct(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product details:', error);
                setLoading(false);
            }
        }

        fetchProductDetails();
    }, [productId]);

    const onAddToCart = async (cartItem) => {
        try {
            // Add product to the cart
            const cartCount = await addToCart(cartItem);
            // Save cart count to cache
            saveDataToCache(cartCount, 'cart');
            // Update the cart count in the parent component
            onCartUpdate(cartCount);
            // Show success message or redirect to cart page

            // Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (error) {
            console.error('Error adding product to cart:', error);
            // Show error message
        }
    };

    if (loading) {
        return <Loader />
    }

    if (!product) {
        return <p>Error loading product details.</p>;
    }

    return (
        <div className="details-container">
            <div className="item-details">
                <Image imgUrl={product.imgUrl} alt={product.brand} />
            </div>
            <div className="description-container">
                <Description product={product} onAddToCart={onAddToCart} />
            </div>
        </div>
    );
};

export default ProductDetailsPage;