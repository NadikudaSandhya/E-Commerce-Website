// src/components/Cart.js
import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems = [], onUpdateQuantity, onRemoveItem }) => {
  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price} Rs.</span>
              <span className="item-quantity">
                <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
                {item.quantity}
                <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
              </span>
              <button onClick={() => onRemoveItem(item.id)} className="remove-button">Remove</button>
            </li>
          ))}
        </ul>
      )}
        <Link to="/checkout" className="checkout-button">Go to Checkout</Link>
    </div>
  );
};

export default Cart;
