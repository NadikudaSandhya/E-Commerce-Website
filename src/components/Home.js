// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Ensure to create this CSS file if you want to style the Home component

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our E-Commerce Site</h1>
      <div className="home-links">
        <Link to="/login" className="home-link">Login</Link>
        <Link to="/products" className="home-link">Browse Products</Link>
        <Link to="/cart" className="home-link">View Cart</Link>
        <Link to="/checkout" className="home-link">Checkout</Link>
      </div>
    </div>
  );
};

export default Home;
