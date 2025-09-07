import React from 'react';
import styles from './SellerDashboard.module.css';
import { Link, NavLink } from 'react-router-dom';
import SellerLayout from './SellerLayout';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";




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
const SellerDashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // stores email, uid etc
    });

    return () => unsubscribe(); // cleanup
  }, []);

  if (!user) {
    return <p>Loading...</p>; // while checking auth
  }

  return (
    <SellerLayout>
      {/* Main Content Area */}
      <div>
        <header className={styles.header}>
          <h1 className={styles.headerTitle}>Creator Dashboard</h1>
          <p className={styles.headerSubtitle}>Welcome back, {user.email.split("@")[0]}!</p>
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
      </div>
    </SellerLayout>
  );
};


export default SellerDashboard;