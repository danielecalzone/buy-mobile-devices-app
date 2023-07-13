import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import ProductListPage from "./views/ProductListPage";
import Description from "./components/Description";

describe('Header', () => {
  test('renders the header component', () => {
    render(
        <Router>
          <Header itemCount={3} />
        </Router>
    );

    // Verify that the header text is rendered
    expect(screen.getByText('App to buy mobile devices')).toBeInTheDocument();

    // Verify that the cart count is rendered correctly
    expect(screen.getByText('Cart')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });
});

describe('ProductListPage', () => {
  test('renders the product list page', async () => {
    render(
        <Router>
          <ProductListPage />
        </Router>
    );

    // Wait for the page title to be rendered
    await waitFor(() => {
      expect(screen.getByText('Product List')).toBeInTheDocument();
    });

    // Wait for the search input to be rendered
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Search products...')).toBeInTheDocument();
    });

    // Wait for the product items to be rendered
    await waitFor(() => {
      const productItems = screen.getAllByTestId('product-model');
      expect(productItems.length).toBeGreaterThan(0);
    });
  });
});

describe('Description', () => {
  test('renders the description component', async () => {
    const product = {
      brand: 'Acer',
      model: 'Iconia Talk S',
      price: 170,
      // Add other relevant properties
    };

    render(<Description product={product} onAddToCart={() => {}} />);

    // Wait for the component to finish rendering with the default data
    await waitFor(() => {
      // Verify that the brand, model, and price are rendered
      expect(screen.getByText('Acer')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Iconia Talk S')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Price: 170€')).toBeInTheDocument();
    });

    // Wait for other properties to render
    // Add separate waitFor blocks for each property

    // Verify that the "Add to Cart" button is rendered
    expect(screen.getByRole('button', { name: 'Add to Cart' })).toBeInTheDocument();
  });
});