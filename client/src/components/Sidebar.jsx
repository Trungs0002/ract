import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const navItems = [
    { label: 'Home', to: '/home' },
    { label: 'Products', to: '/products' },
    { label: 'About', to: '/about' },
    { label: 'Cart', to: '/cart' }
  ];

  return (
    <aside className="sidebar">
      <h3>Navigation</h3>
      <ul className="route-list">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `route-link${isActive ? ' active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
