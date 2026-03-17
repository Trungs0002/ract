import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-page">
      <h2 className="cart-page-title">Cart</h2>

      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-page-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-page-item">
                <img src={item.image} alt={item.name} className="cart-page-image" />
                <div className="cart-page-details">
                  <h4>{item.name}</h4>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  className="cart-page-remove"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h3 className="cart-page-total">Total: ${totalPrice.toFixed(2)}</h3>
        </>
      )}
    </section>
  );
};

export default Cart;
