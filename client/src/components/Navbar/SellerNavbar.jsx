import React, { useState } from 'react';
import './Navbar.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SmartNavLink from '../common/SmartNavLink';
import logo from '../../assets/logo.png';

const SellerNavbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const handleHomeClick = () => {
        if (location.pathname === '/') {
            navigate('/', { replace: true });
        } else {
            navigate('/');
        }
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
                <SmartNavLink to="/" className="logo-container">
                    <img src={logo} alt="SoulCraft Logo" className="logo" />
                </SmartNavLink>
                <ul className="nav-menu">
                    <li><button onClick={handleHomeClick} className="nav-link">Home</button></li>
                    <li><button className="nav-link">Browse Products</button></li>


                </ul>
            </div>

        </nav>
    );
};

export default SellerNavbar;
