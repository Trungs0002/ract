import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import './Products.css';

const Products = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products/json');
        const data = await response.json();

        const normalizedProducts = data.map((product) => ({
          ...product,
          image: product.image?.startsWith('/images')
            ? `http://localhost:5000${product.image}`
            : product.image
        }));

        setProducts(normalizedProducts);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products-page">
      <div className="products-content">
        <ProductList products={products} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
};

export default Products;
