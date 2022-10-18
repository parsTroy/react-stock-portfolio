import React from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styles from './FutureValue.module.css';

const FutureValue = () => {

// Need to complete calculations

  const p = document.querySelector('#initial');
  const pmt = document.querySelector('#ongoing');
  const t = document.querySelector('#term');
  const r = document.querySelector('#rate');
  const n = 12;
  const totalV = document.querySelector('#total'); //Total Value Displayed
  
  const submitValues = () => {

    let pV = 0;
    let rV = 0;
    let pmtV = 0;
    let tV = 0;

    if (p !== 0 && r !== 0 && pmt !== 0 && t !== 0) {
      pV = p?.value;
      rV = r?.value;
      pmtV = pmt?.value;
      tV = t?.value;
    }

      console.log(`Principle Value is ${p.value}`)
      console.log(`Contribution Value is ${pmt.value}`)
      console.log(`Years Value is ${t.value}`)
      console.log(`Rate Value is ${r.value}`)
      console.log(`Compound Value is ${n}`)
      
      let fv = ((pmtV*n)+pV*((1+rV)/100)**tV).toFixed(2) //Formula without contribution

      console.log(`Future Value is ${fv}`);
      
      totalV.textContent = `Total Investment Value: $ ${fv}`;
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
