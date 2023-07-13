import axios from 'axios';
import { saveDataToCache, getDataFromCache } from '../utils/Cache';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Get the list of products
export const getProducts = async () => {
    try {
        const cacheKey = 'products';
        const cachedData = getDataFromCache(cacheKey);
        if (cachedData) {
            // Return the cached data if available
            return cachedData;
        } else {
            // Fetch the data from the API
            const response = await axios.get(`${API_BASE_URL}/api/product`);
            const products = response.data;
            // Save the data to cache
            saveDataToCache(products, cacheKey);
            return products;
        }
    } catch (error) {
        throw new Error('Error fetching products');
    }
};

// Get the details of a specific product
export const getProductDetails = async (productId) => {
    try {
        const cacheKey = `product_${productId}`;
        const cachedData = getDataFromCache(cacheKey);
        if (cachedData) {
            // Return the cached data if available
            return cachedData;
        } else {
            // Fetch the data from the API
            const response = await axios.get(`${API_BASE_URL}/api/product/${productId}`);
            const productDetails = response.data;
            // Save the data to cache
            saveDataToCache(productDetails, cacheKey);
            return productDetails;
        }
    } catch (error) {
        throw new Error('Error fetching product details');
    }
};

// Add a product to the cart
export const addToCart = async (cartItem) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/cart`, cartItem)
        const cartCount = response.data.count;
        return cartCount;
    } catch (error) {
        throw new Error('Error adding product to cart');
    }
};