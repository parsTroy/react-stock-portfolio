import { useEffect } from 'react';
import stockFetcher from '../../utils/stockFetcher';
import style from './PortfolioStats.module.css';

const PortfolioStats = ({ stocks, setStocks }) => {

    useEffect(() => {
        //Fetches prices and updates the state with current prices and profit or loss for the position
        stockFetcher(stocks, setStocks);
    }, []);

    const yieldTotalCalculator = (stocks) => {
        let yieldTotal = 0;

        console.log(stocks);

        stocks.forEach((s) => {
            if (!isNaN(Number(s.yield))) {
                yieldTotal += Number(s.lastDiv[0]);
            }
        });

        return yieldTotal.toFixed(2);
    };

    const valueTotalCalculator = (stocks) => {
        let valueTotal = 0;

        stocks.forEach((s) => {
            if (!isNaN(Number(s.currentPrice))) {
                valueTotal += (Number(s.currentPrice)*s.quantity)
            }
        });

        return valueTotal.toFixed(2);
    };

    // const yieldOnCostTotalCalculator = (stocks) => {
    //     let valueTotal = 100;

    //     stocks.forEach((s) => {
    //         if (!isNaN(Number(s.currentPrice))) {
    //             valueTotal += (Number(s.currentPrice)*s.quantity)
    //         }
    //     });

    //     return valueTotal.toFixed(2);
    // };

    return (
        <div className={style.containerHeader}>
            <div className={style.portfolioValue}>${valueTotalCalculator(stocks)}</div>
            <div className={style.yield}>Portfolio Yield: ${yieldTotalCalculator(stocks)}</div>
            <div className={style.yieldOnCost}>Yield on Cost: {`11.98%`}</div>
            <div className={style.annualIncome}>Annual Income: {`$2,400.12`}</div>
            <div className={style.beta}>Portfolio Beta: {`0.72`}</div>
        </div>
    );
};

export default PortfolioStats;
