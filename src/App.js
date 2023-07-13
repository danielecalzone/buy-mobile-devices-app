import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import ProductListPage from './views/ProductListPage';
import ProductDetailsPage from './views/ProductDetailsPage';
import {getDataFromCache} from "./utils/Cache";

const App = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        // Retrieve the cart count from the cache
        const cachedCartCount = getDataFromCache('cart');
        if (cachedCartCount !== null) {
            setCartCount(cachedCartCount);
        }
    }, []);

    // Callback function to update the cart count
    const onCartUpdate = (cartCount) => {
        setCartCount(cartCount);
    };

    return (
        <Router>
            <div>
                {/* Render the header component and pass the cart count as a prop */}
                <Header itemCount={cartCount} />

                {/* Define the routes */}
                <Routes>
                    {/* Render the product list page when the path is '/' */}
                    <Route path="/" element={<ProductListPage />} />
                    {/* Render the product details page when the path is '/product/:id' */}
                    {/* Pass the onCartUpdate callback function to the product details page */}
                    <Route path="/product/:id" element={<ProductDetailsPage onCartUpdate={onCartUpdate} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;