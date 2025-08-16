import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Welcome to ShopEase</h1>
          <p className="hero-subtitle">
            Discover amazing products at unbeatable prices. Your one-stop shopping destination.
          </p>
          <Link to="/products" className="btn btn-secondary">
            <i className="fas fa-shopping-bag"></i> Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <div className="container">
        <h2 className="page-title">Featured Products</h2>
        <div className="scrollable-content">
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/products" className="btn btn-primary">
            View All Products <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        {/* Features Section */}
        <section style={{ marginTop: '4rem', padding: '3rem 0' }}>
          <h2 className="page-title">Why Choose ShopEase?</h2>
          <div className="products-grid">
            <div className="product-card" style={{ textAlign: 'center' }}>
              <div className="product-image">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3 className="product-name">Fast Shipping</h3>
              <p className="product-description">
                Get your orders delivered quickly with our express shipping options.
              </p>
            </div>
            <div className="product-card" style={{ textAlign: 'center' }}>
              <div className="product-image">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="product-name">Secure Payment</h3>
              <p className="product-description">
                Shop with confidence using our secure and encrypted payment system.
              </p>
            </div>
            <div className="product-card" style={{ textAlign: 'center' }}>
              <div className="product-image">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="product-name">24/7 Support</h3>
              <p className="product-description">
                Our customer support team is available round the clock to help you.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
