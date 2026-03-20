import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:5000/cars');
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }

        const data = await response.json();
        setCars(data);
      } catch (err) {
        setError(err.message || 'Unexpected error');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <section className="home">
      <div className="main-content">
        <h2>Welcome to TStore</h2>
        <p>Danh sach xe duoc lay tu MongoDB (db: cars, collection: car).</p>

        {loading && <p>Loading cars...</p>}
        {error && <p className="error-text">Error: {error}</p>}

        {!loading && !error && (
          <div className="cars-list">
            {cars.map((car) => (
              <div className="car-item" key={car._id || car.id}>
                <h3>{car.ten || car.name || car.model || 'Unnamed car'}</h3>
                <p>Model: {car.model || 'N/A'}</p>
                <p>Year: {car.nam_sx || car.year || 'N/A'}</p>
                <p>Price: {car.gia || car.price || 'N/A'}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
