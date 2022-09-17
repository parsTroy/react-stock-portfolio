import React from "react";
import styles from './Dashboard.module.css';
import Search from "./Search/Search";
import StockChart from "./StockChart/StockChart";
import StockData from "./StockData/StockData";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <Search />
        {/* <h1 className={styles.stockSearch}>Stock Search</h1>
        <input className={styles.input} type="text" placeholder="Search ticker..." /> */}
      </div>
        <div className={styles.infoContainer}>
          <div className={styles.chart}>
            <h1>
              Stock Chart
            </h1>
            <StockChart />
          </div>
          <div className={styles.stockData}>
          <div className={styles.search}>
          </div>
          <div className={styles.stockStats}>
            <h1>
              Stock Data
            </h1>
            <StockData />
          </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
