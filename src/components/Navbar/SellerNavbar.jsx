import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

const SellerNavbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleHomeClick = () => {
        navigate('/');
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
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


                </ul>
            </div>

        </nav>
    );
};

export default SellerNavbar;
