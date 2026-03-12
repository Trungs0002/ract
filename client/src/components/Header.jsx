import React from 'react';
import './Header.css';

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>?? MyStore</h1>
        </div>
        <nav className="nav-menu">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="cart-icon">
          <span className="material-icons">???</span>
          <span className="cart-count">{cartCount}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
