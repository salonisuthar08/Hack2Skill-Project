import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };
  return (
    <nav className='navbar'>
      {/* Left: Logo + Menu */}
      <div className="nav-left">
        <Link to="/"><img src="/hack.bg.png" alt="Seller Logo" className="logo" /></Link>
        <ul className="nav-menu">
          <li><button onClick={handleHomeClick} className="nav-link">Home</button></li>
          <li>  <Link to="/register-seller" className="register-seller-btn"> <button className='nav-link' >Register as Seller</button> </Link></li>
          <li><button className='nav-link'> Browse products </button></li>
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
