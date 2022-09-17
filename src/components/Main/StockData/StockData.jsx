import React, { useContext, useEffect, useState } from "react";
import Details from "../Details/Details";
import styles from './StockData.module.css';
import StockContext from '../../../context/StockContext'
import { fetchQuote, fetchStockDetails } from '../../../api/api'

const StockData = ({ details }) => {

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
        <div>
            <Details details={stockDetails} />
        </div>
    );
};

export default StockData;
