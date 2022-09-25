import React, { useEffect } from 'react';
import stockFetcher from '../../utils/stockFetcher';
import './PortfolioMonitor.css';



export default function PortfolioMonitor({ stocks, setStocks }) {

    useEffect(() => {
        //Fetches prices and updates the state with current prices and profit or loss for the position
        stockFetcher(stocks, setStocks, profitLossCalculator);
    }, []);

    //Calculates the profit or loss for a single position
    const profitLossCalculator = (price, currentPrice, position, quantity) => {
        let profitLoss = 0;

        if (currentPrice) {
            if (position === 'BUY') {
                profitLoss = (currentPrice - price) * quantity;
            } else {
                profitLoss = (price - currentPrice) * quantity;
            }
        }
        return profitLoss.toFixed(2);
    };

    //Calculates the profit or loss for the whole portfolio
    const profitLossTotalCalculator = (stocks) => {
        let profitLossTotal = 0;

        stocks.forEach((s) => {
            if (!isNaN(Number(s.profitLoss))) {
                profitLossTotal += Number(s.profitLoss);
            }
        });
        return profitLossTotal.toFixed(2);
    };

    // Calculates the yield or loss for the whole portfolio
    const yieldTotalCalculator = (stocks) => {
        let yieldTotal = 0;

        stocks.forEach((s) => {
            if (!isNaN(Number(s.yield))) {
                yieldTotal += Number(s.lastDiv[0]);
            }
        });

        return yieldTotal.toFixed(2);
    };

    const fetchPrices = () => {
        //Fetches prices and updates the state with current prices and profit or loss for the position
        stockFetcher(stocks, setStocks, profitLossCalculator);
    };

    return (
            <div className="monitorpage">
                <div className="monitormainrowwrapper">
                    <div className="monitormainrow">Ticker</div>
                    <div className="monitormainrow">Position</div>
                    <div className="monitormainrow">Quantity</div>
                    <div className="monitormainrow">Price</div>
                    <div className="monitormainrow">Current Price</div>
                    <div className="monitormainrow">Dividend</div>
                    <div className="monitormainrow">Profit/Loss</div>
                </div>
                {/* For each stock in a portfolio prints a row with info */}
                {stocks.map((s) => {
                    return (
                        <div key={s.id}>
                            <div className="monitorrowwrapper">
                                <div className="monitorrow">{s.ticker}</div>
                                <div className="monitorrow">{s.position}</div>
                                <div className="monitorrow">{s.quantity}</div>
                                <div className="monitorrow">{s.price}</div>
                                <div className="monitorrow">
                                    {s.currentPrice ? s.currentPrice : null}
                                </div>
                                <div className="monitorrow">{s.lastDiv}</div>
                                <div
                                    className={`${
                                        s.profitLoss > 0 ? 'profitrow' : 'lossrow'
                                    } monitorrow`}
                                >
                                   ${s.profitLoss ? s.profitLoss : null}
                                </div>
                                <div className="monitorrow">
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="monitorsummaryrowwrapper">
                    <div className="monitorsummaryrow">Total:</div>
                    <div className="monitorrow"></div>
                    <div className="monitorrow"></div>
                    <div className="monitorrow"></div>
                    <div className="monitorrow"></div>
                    <div className="monitorrow"></div>
                    {/* <div
                        className={`${
                            yieldTotalCalculator(stocks)
                                ? 'profitrow'
                                : 'lossrow'
                        } monitorsummaryrow`}
                    >
                        {yieldTotalCalculator(stocks)}
                    </div> */}
                    <div
                        className={`${
                            profitLossTotalCalculator(stocks)
                                > 0
                                ? 'profitrow'
                                : 'lossrow'
                        } monitorsummaryrow`}
                    >
                       ${profitLossTotalCalculator(stocks)}
                    </div>
                </div>
                <div className="rightshift">
                <button className="monitorfetchprices" onClick={fetchPrices}>
                    <span>Update Prices</span>
                </button>
                </div>
            </div>
        )
}
