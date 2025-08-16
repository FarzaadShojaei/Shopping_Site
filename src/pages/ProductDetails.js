import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const [compareAdded, setCompareAdded] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="page">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '3rem' }}>
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist.</p>
            <Link to="/products" className="btn btn-primary">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
  };

  const handleAddToWishlist = () => {
    setWishlistAdded(true);
    setTimeout(() => setWishlistAdded(false), 3000);
  };

  const handleAddToCompare = () => {
    setCompareAdded(true);
    setTimeout(() => setCompareAdded(false), 3000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={index < rating ? "fas fa-star" : "far fa-star"}
        style={{ color: '#fbbf24' }}
      />
    ));
  };

  const averageRating = product.reviews ? 
    product.reviews.reduce((sum, review) => sum + review.rating, 0) / product.reviews.length : 5;

  return (
    <div className="page">
      <div className="container">
        {/* Breadcrumb */}
        <div style={{ marginBottom: '2rem', color: '#64748b' }}>
          <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
          <span> / </span>
          <Link to="/products" style={{ color: '#64748b', textDecoration: 'none' }}>Products</Link>
          <span> / </span>
          <span>{product.name}</span>
        </div>

        <Link to="/products" className="btn btn-secondary" style={{ marginBottom: '2rem' }}>
          <i className="fas fa-arrow-left"></i> Back to Products
        </Link>

        {/* Product Overview Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Product Images */}
          <div>
            <div className="product-image" style={{ height: '400px', fontSize: '8rem', marginBottom: '1rem' }}>
              <i className={product.icon}></i>
            </div>
            
            {/* Image Thumbnails */}
            {product.images && (
              <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
                {product.images.map((_, index) => (
                  <div
                    key={index}
                    className={`product-image ${selectedImage === index ? 'selected' : ''}`}
                    style={{
                      width: '80px',
                      height: '80px',
                      fontSize: '2rem',
                      cursor: 'pointer',
                      border: selectedImage === index ? '3px solid #667eea' : '2px solid #e2e8f0'
                    }}
                    onClick={() => setSelectedImage(index)}
                  >
                    <i className={product.icon}></i>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'center' }}>
              <button
                className={`btn ${wishlistAdded ? 'btn-success' : 'btn-secondary'}`}
                onClick={handleAddToWishlist}
                style={{ flex: 1 }}
              >
                <i className={wishlistAdded ? 'fas fa-check' : 'fas fa-heart'}></i> 
                {wishlistAdded ? 'Added!' : 'Wishlist'}
              </button>
              <button
                className={`btn ${compareAdded ? 'btn-success' : 'btn-secondary'}`}
                onClick={handleAddToCompare}
                style={{ flex: 1 }}
              >
                <i className={compareAdded ? 'fas fa-check' : 'fas fa-balance-scale'}></i> 
                {compareAdded ? 'Added!' : 'Compare'}
              </button>
              <button className="btn btn-secondary" style={{ flex: 1 }}>
                <i className="fas fa-share-alt"></i> Share
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="page-title" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              {product.name}
            </h1>
            
            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>{renderStars(Math.round(averageRating))}</div>
              <span style={{ color: '#64748b' }}>
                ({averageRating.toFixed(1)}) {product.reviews ? product.reviews.length : 0} reviews
              </span>
            </div>

            <p className="product-price" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              ${product.price.toFixed(2)}
            </p>

            <p className="product-description" style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              {product.detailedDescription || product.description}
            </p>

            {/* Key Features */}
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Key Features:</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                {product.features.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <i className="fas fa-check-circle" style={{ color: '#48bb78' }}></i>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div style={{ marginBottom: '2rem' }}>
              {product.inStock ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: '#48bb78', fontWeight: '600' }}>
                    <i className="fas fa-check-circle"></i> In Stock
                  </span>
                  <span style={{ color: '#64748b' }}>• Ready to ship</span>
                </div>
              ) : (
                <span style={{ color: '#f56565', fontWeight: '600' }}>
                  <i className="fas fa-times-circle"></i> Out of Stock
                </span>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            {product.inStock && (
              <div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <div>
                    <label className="form-label">Quantity</label>
                    <div className="quantity-controls">
                      <button
                        className="quantity-btn"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        min="1"
                      />
                      <button
                        className="quantity-btn"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <button
                    className="btn btn-primary"
                    onClick={handleAddToCart}
                    style={{ flex: 2 }}
                  >
                    <i className="fas fa-cart-plus"></i> Add to Cart
                  </button>
                  <button className="btn btn-success" style={{ flex: 1 }}>
                    <i className="fas fa-bolt"></i> Buy Now
                  </button>
                </div>
              </div>
            )}

            {/* Shipping & Warranty Info */}
            <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px', fontSize: '0.9rem' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <i className="fas fa-truck" style={{ color: '#667eea', marginRight: '0.5rem' }}></i>
                {product.shipping || "Free shipping on orders over $50"}
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <i className="fas fa-shield-alt" style={{ color: '#667eea', marginRight: '0.5rem' }}></i>
                {product.warranty || "1 year manufacturer warranty"}
              </div>
              <div>
                <i className="fas fa-undo" style={{ color: '#667eea', marginRight: '0.5rem' }}></i>
                30-day return policy
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="scrollable-content" style={{ minHeight: '60vh' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <button
                className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('overview')}
              >
                <i className="fas fa-info-circle"></i> Overview
              </button>
              <button
                className={`btn ${activeTab === 'specifications' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('specifications')}
              >
                <i className="fas fa-cogs"></i> Specifications
              </button>
              <button
                className={`btn ${activeTab === 'reviews' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('reviews')}
              >
                <i className="fas fa-star"></i> Reviews
              </button>
              <button
                className={`btn ${activeTab === 'qa' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('qa')}
              >
                <i className="fas fa-question-circle"></i> Q&A
              </button>
              <button
                className={`btn ${activeTab === 'shipping' ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setActiveTab('shipping')}
              >
                <i className="fas fa-shipping-fast"></i> Shipping
              </button>
            </div>

            <div className="form" style={{ maxWidth: 'none' }}>
              {activeTab === 'overview' && (
                <div>
                  <h3 style={{ marginBottom: '1.5rem' }}>Product Overview</h3>
                  <div style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                      {product.detailedDescription || product.description}
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                      This {product.name.toLowerCase()} represents the perfect blend of quality, 
                      functionality, and style. Whether you're a professional or an enthusiast, 
                      this product delivers exceptional performance that exceeds expectations.
                    </p>
                    
                    <h4 style={{ marginBottom: '1rem', marginTop: '2rem' }}>Why Choose This Product?</h4>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                      <li>Premium quality materials and construction</li>
                      <li>Cutting-edge technology for superior performance</li>
                      <li>Ergonomic design for maximum comfort</li>
                      <li>Excellent customer reviews and ratings</li>
                      <li>Comprehensive warranty and support</li>
                    </ul>

                    <h4 style={{ marginBottom: '1rem' }}>Perfect For:</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                      <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                        <i className="fas fa-users" style={{ fontSize: '2rem', color: '#667eea', marginBottom: '0.5rem' }}></i>
                        <p><strong>Professionals</strong></p>
                        <p>High-performance solution for work</p>
                      </div>
                      <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                        <i className="fas fa-home" style={{ fontSize: '2rem', color: '#667eea', marginBottom: '0.5rem' }}></i>
                        <p><strong>Home Use</strong></p>
                        <p>Perfect for everyday activities</p>
                      </div>
                      <div style={{ padding: '1rem', background: '#f8f9fa', borderRadius: '8px', textAlign: 'center' }}>
                        <i className="fas fa-gift" style={{ fontSize: '2rem', color: '#667eea', marginBottom: '0.5rem' }}></i>
                        <p><strong>Gifts</strong></p>
                        <p>Ideal present for loved ones</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 style={{ marginBottom: '1.5rem' }}>Technical Specifications</h3>
                  {product.specifications ? (
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          padding: '1rem', 
                          background: '#f8f9fa', 
                          borderRadius: '8px',
                          alignItems: 'center'
                        }}>
                          <strong style={{ color: '#2d3748' }}>{key}:</strong>
                          <span style={{ color: '#64748b' }}>{value}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <div style={{ display: 'grid', gap: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
                          <strong>Category:</strong>
                          <span>{product.category}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
                          <strong>Model:</strong>
                          <span>{product.name}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#f8f9fa', borderRadius: '8px' }}>
                          <strong>Price:</strong>
                          <span>${product.price.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#e3f2fd', borderRadius: '8px' }}>
                    <h4 style={{ marginBottom: '1rem' }}>Need Help?</h4>
                    <p style={{ marginBottom: '1rem' }}>Our technical support team is here to help you with any questions about specifications.</p>
                    <button className="btn btn-primary">
                      <i className="fas fa-headset"></i> Contact Support
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h3>Customer Reviews</h3>
                    <button className="btn btn-primary">
                      <i className="fas fa-edit"></i> Write Review
                    </button>
                  </div>
                  
                  {/* Rating Summary */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', marginBottom: '2rem', padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
                    <div style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '3rem', fontWeight: '700', color: '#667eea', marginBottom: '0.5rem' }}>
                        {averageRating.toFixed(1)}
                      </div>
                      <div style={{ marginBottom: '0.5rem' }}>
                        {renderStars(Math.round(averageRating))}
                      </div>
                      <div style={{ color: '#64748b' }}>
                        Based on {product.reviews ? product.reviews.length : 0} reviews
                      </div>
                    </div>
                    <div>
                      {[5, 4, 3, 2, 1].map(rating => {
                        const count = product.reviews ? product.reviews.filter(r => r.rating === rating).length : 0;
                        const percentage = product.reviews ? (count / product.reviews.length) * 100 : 0;
                        return (
                          <div key={rating} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <span>{rating}</span>
                            <i className="fas fa-star" style={{ color: '#fbbf24' }}></i>
                            <div style={{ flex: 1, background: '#e2e8f0', borderRadius: '4px', height: '8px' }}>
                              <div style={{ background: '#fbbf24', width: `${percentage}%`, height: '100%', borderRadius: '4px' }}></div>
                            </div>
                            <span style={{ minWidth: '30px', fontSize: '0.9rem', color: '#64748b' }}>{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    {product.reviews ? product.reviews.map((review, index) => (
                      <div key={index} style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                              <span style={{ fontWeight: '600' }}>{review.name}</span>
                              <div>{renderStars(review.rating)}</div>
                            </div>
                            <div style={{ color: '#64748b', fontSize: '0.9rem' }}>
                              Verified Purchase • January 2024
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '0.5rem' }}>
                            <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>
                              <i className="fas fa-thumbs-up"></i> Helpful
                            </button>
                            <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>
                              <i className="fas fa-flag"></i> Report
                            </button>
                          </div>
                        </div>
                        <p style={{ lineHeight: '1.6' }}>{review.comment}</p>
                      </div>
                    )) : (
                      <div style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                        <i className="fas fa-star" style={{ fontSize: '3rem', marginBottom: '1rem' }}></i>
                        <h4>No reviews yet</h4>
                        <p>Be the first to review this product!</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'qa' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h3>Questions & Answers</h3>
                    <button className="btn btn-primary">
                      <i className="fas fa-question"></i> Ask Question
                    </button>
                  </div>
                  
                  <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    {[
                      { question: "Is this product compatible with my device?", answer: "Yes, this product is compatible with most modern devices. Please check the specifications tab for detailed compatibility information.", asker: "Customer", answerer: "ShopEase Team" },
                      { question: "What's included in the box?", answer: "The package includes the main product, user manual, warranty card, and any necessary accessories as listed in the product description.", asker: "John D.", answerer: "ShopEase Team" },
                      { question: "How long is the warranty period?", answer: "This product comes with a manufacturer warranty as specified in the product details. Extended warranty options are also available.", asker: "Sarah M.", answerer: "ShopEase Team" }
                    ].map((qa, index) => (
                      <div key={index} style={{ marginBottom: '2rem', padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                        <div style={{ marginBottom: '1rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <i className="fas fa-question-circle" style={{ color: '#667eea' }}></i>
                            <span style={{ fontWeight: '600' }}>Q: {qa.question}</span>
                          </div>
                          <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                            Asked by {qa.asker}
                          </div>
                        </div>
                        <div style={{ paddingLeft: '1.5rem', borderLeft: '3px solid #667eea' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                            <i className="fas fa-check-circle" style={{ color: '#48bb78' }}></i>
                            <span style={{ fontWeight: '600' }}>A: {qa.answer}</span>
                          </div>
                          <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
                            Answered by {qa.answerer}
                          </div>
                        </div>
                        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                          <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>
                            <i className="fas fa-thumbs-up"></i> Helpful
                          </button>
                          <button className="btn btn-secondary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>
                            <i className="fas fa-share"></i> Share
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'shipping' && (
                <div>
                  <h3 style={{ marginBottom: '1.5rem' }}>Shipping Information</h3>
                  
                  <div style={{ display: 'grid', gap: '1.5rem' }}>
                    <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
                      <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="fas fa-truck" style={{ color: '#667eea' }}></i>
                        Standard Shipping
                      </h4>
                      <p><strong>Delivery Time:</strong> 3-5 business days</p>
                      <p><strong>Cost:</strong> $9.99 (Free on orders over $50)</p>
                      <p><strong>Tracking:</strong> Provided via email</p>
                    </div>

                    <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
                      <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="fas fa-bolt" style={{ color: '#f59e0b' }}></i>
                        Express Shipping
                      </h4>
                      <p><strong>Delivery Time:</strong> 1-2 business days</p>
                      <p><strong>Cost:</strong> $19.99</p>
                      <p><strong>Tracking:</strong> Real-time tracking available</p>
                    </div>

                    <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
                      <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <i className="fas fa-calendar" style={{ color: '#10b981' }}></i>
                        Scheduled Delivery
                      </h4>
                      <p><strong>Delivery Time:</strong> Choose your preferred date</p>
                      <p><strong>Cost:</strong> $14.99</p>
                      <p><strong>Available:</strong> Within 7 days of order</p>
                    </div>
                  </div>

                  <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#e3f2fd', borderRadius: '8px' }}>
                    <h4 style={{ marginBottom: '1rem' }}>Return Policy</h4>
                    <p style={{ marginBottom: '1rem' }}>
                      We offer a 30-day return policy for all products. Items must be in original condition 
                      with all packaging and accessories included.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <button className="btn btn-primary">
                        <i className="fas fa-info-circle"></i> Return Policy Details
                      </button>
                      <button className="btn btn-secondary">
                        <i className="fas fa-undo"></i> Start Return
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ marginBottom: '2rem' }}>Related Products</h3>
          <div className="scrollable-content" style={{ maxHeight: '400px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
              {products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4).map(relatedProduct => (
                <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`} style={{ textDecoration: 'none' }}>
                  <div className="product-card" style={{ height: '100%' }}>
                    <div className="product-image" style={{ height: '120px', fontSize: '3rem' }}>
                      <i className={relatedProduct.icon}></i>
                    </div>
                    <h4 className="product-name" style={{ fontSize: '1rem' }}>{relatedProduct.name}</h4>
                    <p className="product-price" style={{ fontSize: '1.2rem' }}>${relatedProduct.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;