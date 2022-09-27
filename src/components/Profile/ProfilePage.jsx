import React from "react";
import styles from './ProfilePage.module.css';

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
          <h1 className={styles.title}>Profile</h1>
          <div className="grid grid-cols-2">
            <div className="mr-10">
              Left Side
            </div>
            <div className="ml-10">
              Right Side
            </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;
