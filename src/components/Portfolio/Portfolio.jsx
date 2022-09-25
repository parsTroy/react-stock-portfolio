import React, { useEffect, useState } from "react";
import DATABASE from "../../utils/database";
import PortfolioForm from "../PortfolioForm/PortfolioForm";
import styles from './Portfolio.module.css'

const Portfolio = ({ stocks, setStocks }) => {

const [inputVisibility, setInputVisibility] = useState(false);

useEffect(() => {
    //GET request to the database to fetch the stock which are already in our portfolio
    const fetchData = async () => {
        try {
            const response = await fetch(`https://${DATABASE}.json`);
            const data = await response.json();

            //Validates that the database is not empty
            if (data) {
                //If not empty modifies the data with fetched results and updates state
                const dataModified = Object.keys(data).map((key) => ({
                    id: key,
                    ticker: data[key]['ticker'],
                    position: data[key]['position'],
                    quantity: data[key]['quantity'],
                    price: data[key]['price'],
                }));
                setStocks(dataModified);
            }
        } catch (error) {
            /*The option how to handle the error is totally up to you. 
            Ideally, you can send notification to the user */
            // console.log(error);
        }
    };

    fetchData();
}, [setStocks]);

//Function that removes the stock from portfolio
const handleRemoveStock = async (stockId) => {
    try {
        //DELETE request to the database to delete specific stock by id
        await fetch(`https://${DATABASE}/${stockId}.json`, {
            method: 'DELETE',
            'Content-Type': 'application/json',
        });

        //Updates state by removing this stock
        setStocks((stocks) => stocks.filter((s) => s.id !== stockId));
    } catch (error) {
        /*The option how to handle the error is totally up to you. 
        Ideally, you can send notification to the user */
        // console.log(error);
    }
};

  return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Portfolio</h1>
                <div className={styles.stockContainer}>
                </div>
                <div className='grid grid-cols-4 text-left'>
                    <h2>Ticker</h2>
                    <h2>Action</h2>
                    <h2>Quantity</h2>
                    <h2>Price</h2>
                </div>
                    {/* For each stock in database renders a row with info */}
                    {stocks.map((s) => {
                        return (
                            <div className={styles.portfoliorowwrapper} key={s.id}>
                                <div className={styles.portfoliorow}>{s.ticker}</div>
                                <div className={styles.portfoliorow}>{s.position}</div>
                                <div className={styles.portfoliorow}>{s.quantity}</div>
                                <div className={styles.portfoliorow}>{s.price}</div>
                                <button
                                    className={styles.removestockbutton}
                                    onClick={() => handleRemoveStock(s.id)}
                                >
                                    <span>-</span>
                                </button>
                            </div>
                        );
                    })}
                    {/* Form to add new stock to the portfolio */}
                    {inputVisibility ? (
                        <PortfolioForm
                            setStocks={setStocks}
                            setInputVisibility={setInputVisibility}
                        />
                    ) : null}
                    <button
                        className={styles.addmorebutton}
                        onClick={() => setInputVisibility(!inputVisibility)}
                    >
                        <span>Add New Stock</span>
                    </button>
            </div>
        </div>
    );
};

export default Portfolio;