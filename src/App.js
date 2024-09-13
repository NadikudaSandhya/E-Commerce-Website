import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Admin from './components/Admin';
import Home from './components/Home';
import Login from './components/login';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems(prevCartItems => {
      const existingItem = prevCartItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCartItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.id !== itemId)
    );
  };

  const handleUpdateQuantity = (itemId, delta) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + delta } : item
      ).filter(item => item.quantity > 0)
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductListing onAddToCart={handleAddToCart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveFromCart}
            />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout cartItems={cartItems} />}
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;
