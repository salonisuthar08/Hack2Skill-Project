import React, { useState } from "react";
import styles from "./sellerProfile.module.css";
import { NavLink } from 'react-router-dom';
import SellerLayout from './SellerLayout';

function SellerProfile() {
  const [formData, setFormData] = useState({
    name: "Elena",
    email: "elena@example.com",
    phone: "+91 9876543210",
    storeName: "Elena's Artworks",
    address: "Jaipur, Rajasthan",
    bank: "XXXX-1234",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated!");
  };

  return (
    <SellerLayout>
      {/* Profile Content */}
      <div className={styles.profileContent}>
        <h1>Profile & Settings</h1>
        <form onSubmit={handleSubmit} className={styles.profileForm}>
          <label>
            Full Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Store Name:
            <input
              type="text"
              name="storeName"
              value={formData.storeName}
              onChange={handleChange}
            />
          </label>

          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </label>

          <label>
            Bank Details:
            <input
              type="text"
              name="bank"
              value={formData.bank}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </SellerLayout>
  );
}

export default SellerProfile;
