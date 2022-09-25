import React, { useState } from "react";
import PortfolioStats from '../PortfolioStats/PortfolioStats';
import style from './PortfolioDashboard.module.css';
import PortfolioMonitor from '../PortfolioMonitor/PortfolioMonitor';
import Portfolio from '../Portfolio/Portfolio'

const Dashboard = () => {

  // const url = `https://financialmodelingprep.com/api/v3/quote-short/${tickerArr}?apikey=0b92bda5d2f297a72d359be292be3991`;
  // // const url2 = 'https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/QYLD?apikey=0b92bda5d2f297a72d359be292be3991';
  // // const url2 = 'https://6300f6439a1035c7f8fb8068.mockapi.io/api/div/stock-data';

  //State of the stocks
  const [stocks, setStocks] = useState([]);
  //State of Portfolio or PortfolioMonitor component to be shown
  const [isPortfolioReady, setIsPortfolioReady] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.headingContainer}>
        <PortfolioStats />
      </div>
      <div className={style.portfolio}>
            <div className={style.ticker}>
                 {/* If user is ready with portfolio shows PortfolioMonitor */}
                {!isPortfolioReady ? (
                    <div className={style.portfolioconfiguration}>
                        <Portfolio stocks={stocks} setStocks={setStocks} />
                        <div className={style.portfoliobuttoncontinuewrapper}>
                            <button
                                className={style.portfoliobuttoncontinue}
                                onClick={() => setIsPortfolioReady(true)}
                            >
                                <span>Continue</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={style.ticker}>
                        <PortfolioMonitor
                            stocks={stocks}
                            setStocks={setStocks}
                        />
                        <div className={style.portfoliobuttonbackwrapper}>
                            <button
                                className={style.portfoliobuttonback}
                                onClick={() => setIsPortfolioReady(false)}
                            >
                                <span>Update Portfolio</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
