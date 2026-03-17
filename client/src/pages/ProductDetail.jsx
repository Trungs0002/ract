import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('http://localhost:5000/products/json');
        const data = await response.json();
        const foundProduct = data.find((item) => item.id === Number(id));

        if (foundProduct) {
          setProduct({
            ...foundProduct,
            image: foundProduct.image?.startsWith('/images')
              ? `http://localhost:5000${foundProduct.image}`
              : foundProduct.image
          });
        }
      } catch (error) {
        console.error('Failed to fetch product detail:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <section className="product-detail-page"><p>Loading...</p></section>;
  }

  if (!product) {
    return <section className="product-detail-page"><p>Khong tim thay san pham.</p></section>;
  }

  return (
    <section className="product-detail-page">
      <h2 className="product-detail-title">{product.name}</h2>
      <img className="product-detail-image" src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
    </section>
  );
};

export default ProductDetail;
