import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styles from './FutureValue.module.css';

const FutureValue = () => {

  const initialV = document.getElementById('initial').value;
  const ongoingV = document.getElementById('ongoing').value;
  const termV = document.getElementById('term').value;
  const rateV = document.getElementById('rate').value;

  const totalV = document.getElementById('total');

  const submitValues = () => {
    console.log(initialV*((1+rateV)/100));
    totalV.innerHTML = 'Total Investment Value:' + ' ' + ' ' + '$' + initialV*((1+rateV)/100);
  }

    const data = [
        {
          name: '2023',
          PortfolioValue: 10000,
        },
        {
          name: '2024',
          PortfolioValue: 11450,
        },
        {
          name: '2025',
          PortfolioValue: 12570,
        },
        {
          name: '2026',
          PortfolioValue: 13780,
        },
        {
          name: '2027',
          PortfolioValue: 15890,
        },
        {
          name: '2028',
          PortfolioValue: 19390,
        },
        {
          name: '2029',
          PortfolioValue: 23490,
        },
      ];
    
    return ( 
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Future Value</h1>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.inputContainer}>
                    <input className={styles.input} id="initial" />
                    <label htmlFor="initial">Initial Contribution</label>
                    <input className={styles.input} id="ongoing" />
                    <label htmlFor="recurring">Recurring Contribution</label>
                    <input className={styles.input} id="term" />
                    <label htmlFor="term">Investment Term</label>
                    <input className={styles.input} id="rate" />
                    <label htmlFor="rate">Expected Rate of Return (%)</label>
                    <button className={styles.button} onClick={submitValues} >Submit</button>
                </div>
                <div className={styles.chart}>
                    <ResponsiveContainer>
                        <AreaChart data={data}>
                        <defs>
                            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={'#BB86FC'} stopOpacity={0.8}/>
                                <stop offset="95%" stopColor={'#BB86FC'} stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                            <Area 
                                type='monotone' 
                                dataKey='PortfolioValue' 
                                stroke='#312e81' 
                                fillOpacity={1}
                                strokeWidth={0.5}
                                fill='url(#chartColor)'
                                />
                            {/* \/ Adds ant lines around the graph \/ */}
                            {/* <CartesianGrid strokeDasharray="5 5" /> */}
                            <Tooltip 
                                contentStyle={{backgroundColor: '#111827'}}
                                itemStyle={{color:'#818cf8'}}
                                />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
                <div>
                    <h1 className={styles.total} id="total">Total Investment Value:</h1>
                </div>
        </div>
    );
};

export default FutureValue;
