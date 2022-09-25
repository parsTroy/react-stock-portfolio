// eslint-disable-next-line
import { STOCK_API, STOCK_API_DIVIDEND } from './stockAPI';
// eslint-disable-next-line
import { TOKEN, DIVIDEND_TOKEN } from './stockAPI';


//Function which fetches the current prices and updates our state with current prices and profit/loss
const stockFetcher = (stocks, setStocks, profitLossCalculator) => {
    stocks.forEach(async (s) => {
        try {
            const stockName = s.ticker.replace('', '');
            const response = await fetch(
                // `${STOCK_API}/quote?symbol=${stockName}&token=${TOKEN}`
                `${STOCK_API_DIVIDEND}${stockName}${DIVIDEND_TOKEN}`
            );

            const data = await response.json();

            const profitLoss = profitLossCalculator(
                s.price,
                // data.c,
                data[0].price,
                s.position,
                s.quantity,
            );

            // const yields = yieldCalculator(
            //     data[0].lastDiv,
            //     s.quantity,
            // );

            const stockWithPrice = {
                ...s,
                // currentPrice: data.c.toFixed(2),
                currentPrice: data[0].price.toFixed(2),
                profitLoss,
                lastDiv: data[0].lastDiv.toFixed(3),
            };

            const indexOfStock = stocks.indexOf(s);
            setStocks((stocks) => [
                ...stocks.slice(0, indexOfStock),
                stockWithPrice,
                ...stocks.slice(indexOfStock + 1),
            ]);
        } catch (error) {
            console.log(error);
        }
    });
};

export default stockFetcher;