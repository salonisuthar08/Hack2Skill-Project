import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleHomeClick = () => {
        navigate('/');
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
    };

    const handleDropdownClick = (dropdownName) => {
        if (window.innerWidth <= 768) {
            setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
        }
    };

    return (
        <nav className='navbar'>
            {/* Hamburger Menu Button */}
            <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Left: Logo + Menu */}
            <div className={`nav-left ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="logo-container">
                    <img src={logo} alt="SoulCraft Logo" className="logo" />
                </Link>
                <ul className="nav-menu">
                    <li><button onClick={handleHomeClick} className="nav-link">Home</button></li>
                    <li><button className="nav-link">Browse Products</button></li>
                    <li className="dropdown">
                        <button 
                            className="nav-link dropdown-btn"
                            onClick={() => handleDropdownClick('buyers')}
                        >
                            Buyers
                        </button>
                        <div className={`dropdown-content ${activeDropdown === 'buyers' ? 'active' : ''}`}>
                            <Link to="/buyer-login">Continue with Google (Buyer)</Link>
                            
                        </div>
                    </li>
                    <li className="dropdown">
                        <button 
                            className="nav-link dropdown-btn"
                            onClick={() => handleDropdownClick('sellers')}
                        >
                            Sellers
                        </button>
                        <div className={`dropdown-content ${activeDropdown === 'sellers' ? 'active' : ''}`}>
                            <Link to="/register-seller">Continue with Google (Artist)</Link>
                            
                        </div>
                    </li>
                </ul>
            </div>

            {/* Right: Search + Cart */}
            <div className="nav-right">
                <div className="search-container">
                    <input type="text" placeholder="Search products..." />
                </div>
                <span className="cart">🛒  ccc</span>
            </div>
        </nav>
    );
};

export default Navbar;
