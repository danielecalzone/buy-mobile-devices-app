import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../components/Item';
import Search from '../components/Search';
import { getProducts } from '../hooks/Api';
import Loader from "../components/Loader";

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the list of products when the component mounts
        async function fetchProducts() {
            try {
                // Get the products from the API
                const response = await getProducts();
                setProducts(response);
                setFilteredProducts(response);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        }
        fetchProducts();
    }, []);

    if (loading) {
        return <Loader />
    }

    const handleSearch = (searchText) => {
        // Filter the products based on the search text
        const filtered = products.filter(
            (product) =>
                product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
                product.model.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="container">
            <div className="product-header">
                <h2>Product List</h2>
                <div className="search">
                    {/* Search component for filtering the product list */}
                    <Search onSearch={handleSearch} />
                </div>
            </div>
            <div className="product-list">
                {/* Render each product as an Item component */}
                {filteredProducts.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <Item product={product} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductListPage;