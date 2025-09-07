import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SmartNavLink from '../common/SmartNavLink';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import styles from './SellerDashboard.module.css';

function SellerLayout({ children }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmed = window.confirm('Are you sure you want to log out?');
    if (!confirmed) return;
    try {
      await signOut(auth);
      navigate('/', { replace: true });
    } catch {
      // Optional: surface error
      alert('Failed to log out. Please try again.');
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <nav className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarHeading}>Creator Studio</h2>
        </div>
        <ul className={styles.navList}>
          <li>
            <SmartNavLink to="/ArtistDashboard" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
              Dashboard
            </SmartNavLink>
          </li>
          <li>
            <SmartNavLink to="/my-artworks" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
              My Artworks
            </SmartNavLink>
          </li>
          <li>
            <SmartNavLink to="/sales-history" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
              Sales History
            </SmartNavLink>
          </li>
          <li>
            <SmartNavLink to="/upload-new-art" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
              Upload New Art
            </SmartNavLink>
          </li>
          <li>
            <SmartNavLink to="/sellerprofile" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
              Profile & Settings
            </SmartNavLink>
          </li>
        </ul>
        <div className={styles.sidebarFooter}>
          <button type="button" onClick={handleLogout} className={`${styles.navItem} ${styles.logoutButton}`}>
            Logout
          </button>
        </div>
      </nav>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}

export default SellerLayout;

