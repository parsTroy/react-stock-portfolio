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
        let stockTotal = 0;
        let weight = 0

        stocks.forEach((s) => {
            if (!isNaN(Number(s.lastDiv))) {
                stockTotal += Number(s.quantity);
                weight = Number(s.quantity)/stockTotal;
                console.log(weight);
                yieldTotal += Number(s.lastDiv);
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

    const yieldOnCostTotalCalculator = (stocks) => {
        let yieldOnCostTotal = 0;

        stocks.forEach((s) => {
            if (!isNaN(Number(s.price))) {
                yieldOnCostTotal += 1007
            }
        });

        return yieldOnCostTotal.toFixed(2);
    };

    const annualIncomeCalculator = (stocks) => {
        let annualIncomeTotal = 0;

        stocks.forEach((s) => {
            if (!isNaN(Number(s.price))) {
                annualIncomeTotal += (s.currentPrice*s.lastDiv)*s.quantity;
            }
        });

        return annualIncomeTotal.toFixed(2);
    };

    return (
        <div className={style.containerHeader}>
            <div className={style.portfolioValue}>${valueTotalCalculator(stocks)}</div>
            <div className={style.yield}>Portfolio Yield: {yieldTotalCalculator(stocks)}%</div>
            <div className={style.yieldOnCost}>Yield on Cost: {yieldOnCostTotalCalculator(stocks)}%</div>
            <div className={style.annualIncome}>Annual Income: ${annualIncomeCalculator(stocks)}</div>
            <div className={style.beta}>Portfolio Beta: {`0.72`}</div>
        </div>
    );
};

export default PortfolioStats;
