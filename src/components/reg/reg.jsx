import React, { useState } from 'react';
import './reg.css';

const RegisterSeller = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    shopName: '',
    craftCategory: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="register-seller-container">
      <h2>Register as a Seller</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            name="shopName"
            placeholder="Shop Name"
            value={formData.shopName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <select
            name="craftCategory"
            value={formData.craftCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select Craft Category</option>
            <option value="pottery">Pottery</option>
            <option value="jewelry">Jewelry</option>
            <option value="sculpture">Sculpture</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <textarea
            name="description"
            placeholder="Tell us about your craft..."
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default RegisterSeller;