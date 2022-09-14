import React from "react";
import styles from './StockData.module.css';

const StockData = () => {
  return (
        <div className={styles.container}>
            <div className={styles.key}>
                <p className={styles.data}>Name: </p>
                <p className={styles.data}>Ticker: </p>
                <p className={styles.data}>Price: </p>
                <p className={styles.data}>Dividend: </p>
                <p className={styles.data}>Dividend P/$1000: </p>
                <p className={styles.data}>Sector: </p>
                <p className={styles.data}>Desription: </p>
            </div>
            <div className={styles.value}>
                <p className={styles.data}>Apple Inc.</p>
                <p className={styles.data}>AAPL</p>
                <p className={styles.data}>$150.00</p>
                <p className={styles.data}>0.15</p>
                <p className={styles.data}>$149.85</p>
                <p className={styles.data}>Technology</p>
                <p className={styles.data}>
                    Apple is a prominent hardware and software company best known for its series of personal computers, 
                    the iPod and its innovative marketing strategies for its products.
                </p>
            </div>
        </div>
    );
};

export default StockData;
