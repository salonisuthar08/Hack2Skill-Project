import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SellerDashboard.module.css';

function SellerLayout({ children }) {
  return (
    <div className={styles.dashboardContainer}>
      <nav className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarHeading}>Creator Studio</h2>
        </div>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/ArtistDashboard" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-artworks" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
              My Artworks
            </NavLink>
          </li>
          <li>
            <NavLink to="/sales-history" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
              Sales History
            </NavLink>
          </li>
          <li>
            <NavLink to="/upload-new-art" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
              Upload New Art
            </NavLink>
          </li>
          <li>
            <NavLink to="/sellerprofile" className={({ isActive }) => `${styles.navItem} ${isActive ? styles.active : ''}`}>
              Profile & Settings
            </NavLink>
          </li>
        </ul>
        <div className={styles.sidebarFooter}>
          <p>Logged in as Elena</p>
        </div>
      </nav>

      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}

export default SellerLayout;

