import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = products
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || product.category === selectedCategory)
    )
    .sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    // Search is already handled by the filter effect
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Our Products</h1>
        
        {/* Search and Filter Section */}
        <div className="form" style={{ marginBottom: '2rem' }}>
          <form onSubmit={handleSubmitSearch}>
            <div className="form-group">
              <label className="form-label">Search Products</label>
              <input
                type="text"
                className="form-input"
                placeholder="Search for products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group">
                <label className="form-label">Category</label>
                <select
                  className="form-input"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label">Sort By</label>
                <select
                  className="form-input"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                </select>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary btn-full">
              <i className="fas fa-search"></i> Search Products
            </button>
          </form>
        </div>

        {/* Products Results */}
        <div className="scrollable-content">
          {filteredProducts.length > 0 ? (
            <>
              <p style={{ marginBottom: '1rem', color: '#64748b' }}>
                Showing {filteredProducts.length} products
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              </p>
              <div className="products-grid">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#64748b' }}>
              <i className="fas fa-search" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
              <h3>No products found</h3>
              <p>Try adjusting your search criteria or browse all categories.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
