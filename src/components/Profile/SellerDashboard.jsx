import React from 'react';

// Step 1: Import the CSS Module file.
// We'll call the imported object 'styles'.
import styles from './SellerDashboard.module.css';




// Reusable card component for our stats
const StatCard = ({ title, value, icon }) => {
  return (
    <div className={styles.statCard}>
      <div className={styles.statIcon}>{icon}</div>
      <div className={styles.statInfo}>
        <p className={styles.statTitle}>{title}</p>
        <h3 className={styles.statValue}>{value}</h3>
      </div>
    </div>
  );
};

// Main Artist Dashboard Component
const AdminDashboard = () => {
  const artistName = "Elena"; // The artist's name

  return (
    <div className={styles.dashboardContainer}>
      
      {/* Sidebar Navigation */}
      <nav className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarHeading}>Creator Studio</h2>
        </div>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.active}`}>Dashboard</li>
          <li className={styles.navItem}>My Artworks</li>
          <li className={styles.navItem}>Sales History</li>
          <li className={styles.navItem}>Upload New Art</li>
          <li className={styles.navItem}>Profile & Settings</li>
        </ul>
        <div className={styles.sidebarFooter}>
          <p>Logged in as {artistName}</p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Creator Dashboard</h1>
          <p className={styles.headerSubtitle}>Welcome back, {artistName}!</p>
        </header>

        {/* Grid for Artist's Statistics */}
        <div className={styles.statsGrid}>
          <StatCard title="Total Earnings" value="₹1,50,000" icon="💰" />
          <StatCard title="Artworks Sold" value="78" icon="🎨" />
          <StatCard title="Profile Views (Month)" value="8,921" icon="👁️" />
          <StatCard title="Unread Messages" value="4" icon="✉️" />
        </div>
        
        <div className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>Recent Sales</h2>
          <div className={styles.activityFeed}>
            {/* You could map over real sales data here */}
            <p><strong>'Cosmic Dreams'</strong> was sold to user 'artlover99'.</p>
            <p><strong>'Jaipur Sunset'</strong> was sold to user 'wanderlust22'.</p>
            <p><strong>'Monsoon Echoes'</strong> was sold to user 'gallery_owner'.</p>
          </div>
        </div>

      </main>
    </div>
  );
};


export default AdminDashboard;