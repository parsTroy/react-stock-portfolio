import React, { useContext, useEffect, useState } from "react";
import styles from './Dashboard.module.css';
import Search from "./Search/Search";
import StockChart from "./StockChart/StockChart";
import StockData from "./StockData/StockData";
import { fetchQuote, fetchStockDetails } from '../../api/api'
import StockContext from '../../context/StockContext'

const Dashboard = () => {

  const { stockSymbol } = useContext(StockContext);

  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      }
      catch(error) {
        setStockDetails({});
        console.log(error);
      }
    }
    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      }
      catch(error) {
        setQuote({});
        console.log(error);
      }
    }

    updateStockDetails();
    updateStockOverview();

  }, [stockSymbol])

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <h1 className={styles.stockSearch}>Stock Search</h1>
        <Search />
      </div>
        <div className={styles.infoContainer}>
          <div className={styles.chart}>
            <h1 className={styles.chartTitle}>
              Stock Chart
            </h1>
            <StockChart />
          </div>
          <div className={styles.stockData}>
          <div className={styles.search}>
          </div>
          <div className={styles.stockStats}>
            <h1 className={styles.chartTitle}>
              Stock Details
            </h1>
            <StockData />
          </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
