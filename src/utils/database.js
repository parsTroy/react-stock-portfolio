import { Axios } from "axios";

const apiKey = "0b92bda5d2f297a72d359be292be3991";

export const dividendAmount = () => {
    Axios.get("https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/AAPL?apikey=0b92bda5d2f297a72d359be292be3991").then(
        (response) => {
            console.log("pressed!")
            let dividendAmountValue = response.data.historical[0].dividend;
            return dividendAmountValue;
        }
    );
};

const url = 'https://financialmodelingprep.com/api/v3/quote-short/QYLD?apikey=0b92bda5d2f297a72d359be292be3991';

let setPrice = [];
let price = [];
let priceValueReal;

export const fetchData = () => {
    fetch(url) // URL TO USE
      .then(response => {
        return response.json();
      })
      .then(data => {
        setPrice(data)
      })
}

// Control Writing Ability with Firebase Permissions

const DATABASE = 'react-dividend-tracker-default-rtdb.firebaseio.com/stocks';

export default DATABASE;