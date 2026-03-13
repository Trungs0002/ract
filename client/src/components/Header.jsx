import React from 'react';
import './Header.css';

const Header = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <span className="logo-icon" aria-hidden="true">&#10022;</span>
          <span className="logo-name">TStore</span>
        </a>
        <div className="search-bar">
          <span className="search-icon" aria-hidden="true">&#128269;</span>
          <input
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchQuery || ''}
            onChange={e => onSearchChange && onSearchChange(e.target.value)}
            aria-label="Tìm kiếm sản phẩm"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
