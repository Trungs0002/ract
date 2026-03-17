import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      <h2>Store</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <Link to={`/products/${product.id}`} className="product-link">
                <h3>{product.name}</h3>
              </Link>
              <p className="product-description">{product.description}</p>
              <p className="product-category">{product.category}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => onAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
