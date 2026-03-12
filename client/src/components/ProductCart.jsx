import React from 'react';
import './ProductCart.css';

const ProductCart = ({ cartItems, onRemoveFromCart, isOpen, onClose }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
      <div className="cart-content">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close cart">&times;</button>
        </div>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p className="empty-cart">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button 
                  className="remove-btn"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
