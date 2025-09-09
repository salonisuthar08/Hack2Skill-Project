import { Link, useNavigate } from 'react-router-dom';
import './artist.css';
import React from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import logo from '../../assets/logo.png';


const RegisterSeller = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Logged in user:", user);
      navigate("/ArtistDashboard"); // redirect after login
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Continue as seller(Artist)</h2>
        
        <div className="auth-methods">
          <button className="google-auth-btn" onClick={handleGoogleSignIn}>
            <img src="https://accounts.google.com/favicon.ico" alt="Google" />
            Continue with Google (Artist)
          </button>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const navigate = useNavigate();

  const handleGoogleAuth = async (type) => {
    // Simulate Google auth - replace with actual Google auth
    const success = true; // This will come from Google auth response
    
    if (success) {
      if (type === 'buyer') {
        navigate('/buyer-onboarding');
      } else if (type === 'artist') {
        navigate('/artist-dashboard');
      }
    }
  };

  return (
    <nav className='navbar'>
      <div className="nav-left">
        <Link to="/" className="logo-container">
          <img src={logo} alt="SoulCraft Logo" className="logo" />
        </Link>
        <ul className="nav-menu">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li className="dropdown">
            <button className="nav-link dropdown-btn">Buyers</button>
            <div className="dropdown-content">
              <button onClick={() => handleGoogleAuth('buyer')}>
                Continue with Google (Buyer)
              </button>
            </div>
          </li>
          <li className="dropdown">
            <button className="nav-link dropdown-btn">Artists</button>
            <div className="dropdown-content">
              <button onClick={() => handleGoogleAuth('artist')}>
                Continue with Google (Artist)
              </button>
            </div>
          </li>
        </ul>
      </div>
      {/* ...existing code... */}
    </nav>
  );
};

export default RegisterSeller;