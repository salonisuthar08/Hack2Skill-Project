import React from 'react';
import homepage from '../../assets/bg.homemade.jpeg';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      
      <div className="hero">
        <img src={homepage} alt="Marketplace Banner" className='banner-img' />
        <div className="hero-content">
          <h1>Sell Your Handcrafted Crafts</h1>
          <h2>Connect With Art Lovers Worldwide</h2>
          <p>
            Showcase your unique handmade creations and reach thousands of buyers. 
            Join our community of artisans and turn your passion into profit.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Start Selling</button>
            <button className="btn-secondary">Browse Marketplace</button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>2000+</strong><br />Active Sellers
            </div>
            <div>
              <strong>50k+</strong><br />Products Listed
            </div>
            <div>
              <strong>100k+</strong><br />Happy Customers
            </div>
          </div>
        </div>
      </div>

      <div className="cta-seller">
        <h3>Ready to Sell?</h3>
        <p>Sign up today and showcase your handmade crafts to a global audience.</p>
        <button className="btn-primary">Register as Seller</button>
      </div>
    </div>
  );
}

export default Home;
