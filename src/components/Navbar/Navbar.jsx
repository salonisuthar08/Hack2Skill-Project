import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* Left: Logo + Menu */}
      <div className="nav-left">
        <img src="/hack.bg.png" alt="Seller Logo" className="logo" />
        <ul className="nav-menu">
          <li><a href="#features">Upload Product</a></li>
          <li><a href="#preview">Preview Listing</a></li>
          <li><a href="#product">Manage Products</a></li>
        </ul>
      </div>

      {/* Right: AI Button + Search + Cart */}
      <div className="nav-right">
        <button className="btn-ai">AI Enhancer</button>
        <input type="text" placeholder="Search products..." />
        <span className="cart">🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;
