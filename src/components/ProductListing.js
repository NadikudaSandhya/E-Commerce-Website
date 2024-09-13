import React, { useState, useEffect } from 'react';
import './ProductListing.css';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products from JSON Server
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  const addToCart = (product) => {
    // Get existing cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      // Update quantity if item is already in the cart
      existingItem.quantity += 1;
    } else {
      // Add new item to the cart
      cart.push({ ...product, quantity: 1 });
    }

    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Item added to cart!');
  };

  return (
    <div className="product-listing-container">
      <h2 className="product-listing-title">Product Listing</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products"
        className="product-search-input"
      />
      <div className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img
              src={product.image || 'https://via.placeholder.com/200'}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price} Rs.</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
      <button onClick={() => window.location.href = '/cart'} className="view-cart-button">View Cart</button>
    </div>
  );
};

export default ProductListing;
