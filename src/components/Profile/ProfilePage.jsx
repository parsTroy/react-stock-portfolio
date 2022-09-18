import React from "react";
import styles from './ProfilePage.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
          <h1 className={styles.title}>Profile</h1>
          <h2 className={styles.subTitle}>Stock Portfolio Tracking Simplified</h2>
      </div>
    </div>
  );
};

export default Profile;
