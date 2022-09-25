import React, { useState } from 'react';
import DATABASE from '../../utils/database';
import style from './PortfolioForm.module.css';

//Initial state of our form
const INITIAL_STATE = {
    ticker: '',
    position: 'BUY',
    quantity: 10,
    price: 50,
};

export default function PortfolioForm({ setStocks, setInputVisibility }) {
    //This is the initial state of our inputs
    const [formValues, setFormValues] = useState(INITIAL_STATE);

    //Function that handles the inputs and their new values
    const handleChange = (event) => {
        setFormValues((formValues) => ({
            ...formValues,
            [event.target.name]: event.target.value,
        }));
    };

    //Function that handles the new stock additions to our portfolio
    const handleSubmitNewStock = async (e) => {
        //Prevents the default behavior of the event to refresh the page
        e.preventDefault();
        try {
            //Basic validation if user entered a ticker, price and quantity above 0
            if (
                formValues.ticker &&
                formValues.price > 0 &&
                formValues.quantity > 0
            ) {
                const newStock = {
                    ticker: formValues.ticker,
                    position: formValues.position,
                    quantity: formValues.quantity,
                    price: formValues.price,
                };

                //POST request to the database to add a new stock
                const response = await fetch(`https://${DATABASE}.json`, {
                    method: 'POST',
                    'Content-Type': 'application/json',
                    body: JSON.stringify(newStock),
                });

                const data = await response.json();

                //Validates the stock is saved
                if (data.name) {
                    //Updates state with the new stock
                    setStocks((stocks) => [
                        ...stocks,
                        { id: data.name, ...newStock },
                    ]);
                    setFormValues(INITIAL_STATE);
                    setInputVisibility(false);
                }
            }
        } catch (error) {
            /*The option how to handle the error is totally up to you. 
            Ideally, you can send notification to the user */
            console.log(error);
        }
    };

    return (
        <div className={style.addmorewrapper}>
            <form className={style.addmoreform}>
                <div className={style.addmorerow}>
                    <label for='ticker'>Ticker</label>
                    <input
                        id='ticker'
                        type='text'
                        name='ticker'
                        value={formValues.ticker}
                        onChange={handleChange}
                        spellCheck='false'
                    />
                </div>
                <div className={style.addmorerow}>
                    <div>Action</div>
                    <select
                        name='position'
                        onChange={handleChange}
                        value={formValues.position}
                    >
                        <option value='BUY'>BUY</option>
                        <option value='SELL'>SELL</option>
                    </select>
                </div>
                <div className={style.addmorerow}>
                    <label for='quantity'>Quantity</label>
                    <input
                        id='quantity'
                        type='number'
                        name='quantity'
                        min='0'
                        value={formValues.quantity}
                        onChange={handleChange}
                    />
                </div>
                <div className={style.addmorerow}>
                    <label for='price'>Price</label>
                    <input
                        id='price'
                        type='number'
                        name='price'
                        min='0'
                        value={formValues.price}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className={style.addnewstockbutton}
                    onClick={handleSubmitNewStock}
                >
                    <span className='m-2'>+</span>
                </button>
            </form>
        </div>
    );
}