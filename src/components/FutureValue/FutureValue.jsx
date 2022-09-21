import React from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import styles from './FutureValue.module.css';

const FutureValue = () => {


    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
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
                    <button className={styles.button} >Submit</button>
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
                                dataKey='uv' 
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
                    <h1 className={styles.total}>Total Investment Value:</h1>
                </div>
        </div>
    );
};

export default FutureValue;
