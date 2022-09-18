import React from "react";
import styles from './Portfolio.module.css'

const Portfolio = () => {
  return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Portfolio</h1>
                <h2 className={styles.subTitle}>Stock Portfolio Tracking Simplified</h2>
            </div>
        </div>
    );
};

export default Portfolio;
