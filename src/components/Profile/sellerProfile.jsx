import React, { useEffect, useState } from "react";
import styles from "./sellerProfile.module.css";
import { NavLink } from 'react-router-dom';
import SellerLayout from './SellerLayout';
import { db, auth } from "../../firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function SellerProfile() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    storeName: "",
    address: "",
    bank: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      try {
        if (!user) {
          setLoading(false);
          return;
        }
        const ref = doc(db, "sellers", user.uid);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          // Map Firestore keys -> form fields
          setFormData({
            name: data.fullname || "",
            email: data.email || user.email || "",
            phone: data.phone || "",
            storeName: data.storename || "",
            address: data.address || "",
            bank: data.bankDetails || "",
          });
        } else {
          // Seed from auth for first-time profiles
          const email = user.email || "";
          const displayName = user.displayName || "";
          const nameFromEmail = (emailPart) => {
            const local = (emailPart.split("@")[0] || "").replace(/[._-]+/g, " ");
            return local
              .split(" ")
              .filter(Boolean)
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(" ");
          };
          const initialName = displayName || nameFromEmail(email);
          setFormData((prev) => ({
            ...prev,
            email,
            name: initialName || prev.name,
          }));
        }
      } catch {
        setError("Failed to load profile. Please try again.");
      } finally {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = auth.currentUser;
      if (!user) {
        alert("Please sign in to save your profile.");
        return;
      }
      const ref = doc(db, "sellers", user.uid);
      // Map form fields -> Firestore keys
      const payload = {
        fullname: formData.name,
        email: user.email || formData.email,
        phone: formData.phone,
        storename: formData.storeName,
        address: formData.address,
        bankDetails: formData.bank,
      };
      const existing = await getDoc(ref);
      if (existing.exists()) {
        await setDoc(ref, { ...payload, updatedAt: serverTimestamp() }, { merge: true });
        alert("Profile updated!");
      } else {
        await setDoc(ref, { ...payload, createdAt: serverTimestamp() }, { merge: true });
        alert("Profile created!");
      }
    } catch (err) {
      console.error("Failed to save seller profile:", err);
      alert(err?.message || "Failed to update profile. Please try again.");
    }
  };

  return (
    <SellerLayout>
      {/* Profile Content */}
      <div className={styles.profileContent}>
        <h1>Profile & Settings</h1>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
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
