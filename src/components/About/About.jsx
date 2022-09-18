import React from "react";
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>About us</h1>
        <h2 className={styles.subTitle}>Stock Portfolio Tracking Simplified</h2>
      </div>
    </div>
  );
};

export default About;
