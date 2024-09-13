import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    'https://via.placeholder.com/800x600?text=Slide+1',
    'https://via.placeholder.com/800x600?text=Slide+2',
    'https://via.placeholder.com/800x600?text=Slide+3',
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const handleLogout = () => {
    alert('You have logged out successfully!');
    navigate('/', { replace: true });
  };

  return (
    <div
      className="admin-container"
      style={{ backgroundImage: `url(${slides[currentSlide]})` }}
    >
      <header className="admin-header">
        <h2>Admin Dashboard</h2>
      </header>
      <div className="admin-content">
        <div className="admin-links">
          <Link to="/products" className="admin-link">Go to Products</Link>
          <Link to="/cart" className="admin-link">Go to Cart</Link>
        </div>
        <div className="admin-logout-container">
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
