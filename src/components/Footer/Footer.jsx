
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>About Us</h3>
          <p>
            Preserving the essence of handmade local crafts and 
            connecting artisans with people who value tradition.
          </p>
        </div>

        {/* <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Collection</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div> */}

        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: support@localcrafts.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Local Crafts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
