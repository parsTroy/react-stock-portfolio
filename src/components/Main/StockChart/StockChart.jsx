import React, { useContext, useEffect, useState } from "react";
import styles from './StockChart.module.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import { fetchHistoricalData } from '../../../api/api';
import StockContext from '../../../context/StockContext';
import ChartFilter from '../ChartFilter/ChartFilter';
import { chartConfig } from '../../../constants/config';
import { convertUnixTimestampToDate, convertDateToUnixTimestamp, createDate } from '../../../helpers/date-helpers';

const StockChart = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1W");

  const { stockSymbol } = useContext(StockContext);

  const formatData = (data) => {
      return data.c.map((item, index) => {
          return {
              value: item.toFixed(2),
              date: convertUnixTimestampToDate(data.t[index]),
          }
      })
  }

  useEffect(() => {
      const getDateRange = () => {
          const { days, weeks, months, years } = chartConfig[filter];

          const endDate = new Date();
          const startDate = createDate(endDate, -days, -weeks, -months, -years);

          const startTimestampUnix = convertDateToUnixTimestamp(startDate);
          const endTimestampUnix = convertDateToUnixTimestamp(endDate);

          console.log(startTimestampUnix)

          return {startTimestampUnix, endTimestampUnix};
      };
      const updateChartData = async () => {
          try {
              const { startTimestampUnix, endTimestampUnix } = getDateRange();
              const resolution = chartConfig[filter].resolution;
              const result = await fetchHistoricalData(stockSymbol, resolution, startTimestampUnix, endTimestampUnix);
              setData(formatData(result));
          }
          catch(error) {
              setData([]);
              console.log(error);
          }
      };

      updateChartData();
  }, [stockSymbol, filter]);

  return (
    <div className={styles.container}>
        <ul className='flex absolute top-2 right-2 z-40'>
          {Object.keys(chartConfig).map((item) => {
            return (
              <li key={item}>
                <ChartFilter text={item} active={filter === item} onClick={() => {
                  setFilter(item)
                  }} 
                />
              </li>
            )
          })}
        </ul>
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
