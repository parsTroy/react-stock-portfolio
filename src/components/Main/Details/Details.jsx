import React from 'react'
import styles from './Details.module.css'

const Details = ({ details }) => {


    const detailsList = {
        name: "Name",
        country: "Country",
        currency: "Currency",
        exchange: "Exchange",
        ipo: "IPO Date",
        marketCapitalization: "Market Capitalization",
        finnhubIndustry: "Industry"
    }

    const convertMillionToBillion = (number) => {
        return (number / 1000).toFixed(2);
    }

  return (
        <ul className='-ml-9'>
            {Object.keys(detailsList).map((item) => {
                return (
                    <li key={item} className={styles.data}>
                        <span className={styles.key}>{detailsList[item]}:</span>
                        <span className={styles.value}>{item === 'marketCapitalization' ? `${convertMillionToBillion(details[item])}B` : details[item]}</span>
                    </li>
                )
            })}
        </ul> 
  )
}

export default Details