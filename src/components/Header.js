import React from 'react';

const Header = ({ itemCount }) => {
    return (
        <header>
            {/* Title or application icon */}
            <h1>App to buy mobile devices</h1>

            {/* Breadcrumbs */}
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>

                    {/* Add additional breadcrumbs if necessary */}
                </ul>
            </nav>

            {/* Number of items in the cart */}
            <div className="cart">
                {/* Link to the cart page */}
                    {/* Cart icon */}
                    <span className="cart-icon" />

                    {/* Cart text */}
                    <span className="cart-text">Cart</span>

                    {/* Cart item count */}
                    <span className="cart-count">{itemCount}</span>
            </div>
        </header>
    );
}

export default Header;