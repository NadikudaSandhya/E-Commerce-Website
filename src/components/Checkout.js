import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = ({ cartItems }) => {
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  const handleConfirmOrder = () => {
    alert('Order placed successfully!');
    navigate('/products');
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <div className="checkout-summary">
        <h3 className="summary-title">Cart Summary</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="checkout-list">
            {cartItems.map((item, index) => (
              <li key={index} className="checkout-item">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price} Rs.</span>
                <span className="item-quantity">x{item.quantity}</span>
              </li>
            ))}
            <li className="checkout-total">
              <span className="total-label">Total Price:</span>
              <span className="total-price">{calculateTotalPrice()} Rs.</span>
            </li>
          </ul>
        )}
        <button onClick={handleConfirmOrder} className="confirm-button">Confirm Order</button>
      </div>
    </div>
  );
};

export default Checkout;
