import React from 'react';
import './Header.css';

const Header = ({ cartCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1><span className="logo-icon" aria-hidden="true">&#10022;</span> TStore</h1>
        </div>
        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="cart-icon" type="button" onClick={onCartClick} aria-label="Open cart">
          <span className="cart-symbol" aria-hidden="true">&#128722;</span>
          <span className="cart-count">{cartCount}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
