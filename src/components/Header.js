import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartItemsCount } = useCart();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            ShopEase
          </Link>
          
          <nav>
            <ul className="nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
            </ul>
          </nav>
          
          <Link to="/checkout" className="cart-icon">
            <i className="fas fa-shopping-cart"></i>
            {getCartItemsCount() > 0 && (
              <span className="cart-count">{getCartItemsCount()}</span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
