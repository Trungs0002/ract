import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onCategoryChange, selectedCategory }) => {
  const categories = ['All', 'Electronics', 'Clothing', 'Shoes'];

  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="sidebar-filters">
        <h3>Price Range</h3>
        <div className="price-filter">
          <input type="range" min="0" max="2000" />
          <p>$0 - $2000</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
