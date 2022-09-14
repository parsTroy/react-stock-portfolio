import React from "react";
import styles from './StockChart.module.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const StockChart = () => {

  const data = [
    {
      name: 'Jan',
      price: 400, 
      pv: 2400, 
      amt: 2400
    },
    {
      name: 'Feb',
      price: 200, 
      pv: 2200, 
      amt: 2000
    },
    {
      name: 'Mar',
      price: 300, 
      pv: 2100, 
      amt: 2300
    },
    {
      name: 'Apr',
      price: 500, 
      pv: 2500, 
      amt: 2600
    },
    {
      name: 'May',
      price: 450, 
      pv: 2450, 
      amt: 2420
    },
    {
      name: 'Jun',
      price: 150, 
      pv: 1900, 
      amt: 1800
    },
    {
      name: 'Jul',
      price: 230, 
      pv: 2000, 
      amt: 1800
    },
    {
      name: 'Aug',
      price: 260, 
      pv: 2000, 
      amt: 2250
    },
    {
      name: 'Sep',
      price: 450, 
      pv: 2200, 
      amt: 2100
    },
    {
      name: 'Oct',
      price: 340, 
      pv: 2200, 
      amt: 2450
    },
    {
      name: 'Nov',
      price: 330, 
      pv: 2100, 
      amt: 2250
    },
    {
      name: 'Dec',
      price: 410, 
      pv: 2400, 
      amt: 2400
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <BarChart width={800} height={400} data={data}>
          <XAxis dataKey="name" stroke={"var(--accent-2-color)"} />
          <YAxis />
          <Tooltip wrapperStyle={{ color: 'var(--accent-2-color)', width: 100, backgroundColor: 'var(--bg-color)' }} />
          <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: 'var(--bg-color)', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
          <CartesianGrid stroke="var(--accent-2-color)" strokeDasharray="5 5" />
          <Bar dataKey="price" fill="var(--a-color)" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
};

export default StockChart;
