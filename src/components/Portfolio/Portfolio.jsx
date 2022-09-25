import React from "react";
import styles from './Portfolio.module.css'

const Portfolio = () => {

    const data = [
        {
            ticker: 'APPL', 
            name: 'Apple Inc.', 
            price: 192.00, 
            dividend : 0.4, 
            pH : 194.00, 
            pL : 190.00, 
            rating : 'Buy'
        },
        {
            ticker: 'META', 
            name: 'Facebook Inc.', 
            price: 492.00, 
            dividend : 0.2, 
            pH : 494.00, 
            pL : 490.00, 
            rating : 'Sell'
        },
        {
            ticker: 'COST', 
            name: 'Costco Wholesale Inc.', 
            price: 592.00, 
            dividend : 0.5, 
            pH : 594.00, 
            pL : 590.00, 
            rating : 'Buy'
        },
    ]

  return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Portfolio</h1>
                <h2 className={styles.subTitle}>Stock Portfolio Tracking Simplified</h2>
                <div className={styles.stockContainer}>
                    <div className={styles.stockDiv} key={data}>
                        <table className={styles.table}>
                            {/* <tr>
                                <th className={styles.head}>Rating</th>
                            </tr> */}
                            <div className={styles.tables}>
                                <div className={styles.tableColumn}>
                                    <th className={styles.head}>Ticker</th>
                                    {data.map(stock => {
                                        return (
                                            <>
                                                <tr>
                                                    {stock.ticker}
                                                </tr>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={styles.tableColumn}>
                                    <th className={styles.head}>Company Name</th>
                                    {data.map(stock => {
                                        return (
                                            <>
                                                <tr>
                                                    {stock.name}
                                                </tr>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={styles.tableColumn}>
                                    <th className={styles.head}>Price</th>
                                    {data.map(stock => {
                                        return (
                                            <>
                                                <tr>
                                                    {stock.price}
                                                </tr>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={styles.tableColumn}>
                                    <th className={styles.head}>Dividend</th>
                                    {data.map(stock => {
                                        return (
                                            <>
                                                <tr>
                                                    {stock.dividend}
                                                </tr>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={styles.tableColumn}>
                                    <th className={styles.head}>Daily High</th>
                                    {data.map(stock => {
                                        return (
                                            <>
                                                <tr>
                                                    {stock.pH}
                                                </tr>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={styles.tableColumn}>
                                    <th className={styles.head}>Daily Low</th>
                                    {data.map(stock => {
                                        return (
                                            <>
                                                <tr>
                                                    {stock.pL}
                                                </tr>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className={styles.tableColumn}>
                                    <th className={styles.head}>Rating</th>
                                    {data.map(stock => {
                                        return (
                                            <>
                                                <tr>
                                                    {stock.rating}
                                                </tr>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;