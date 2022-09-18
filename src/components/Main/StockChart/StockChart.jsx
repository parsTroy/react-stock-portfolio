import React, { useContext, useEffect, useState } from "react";
import styles from './StockChart.module.css';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, AreaChart, Area } from 'recharts';
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

          // console.log(startTimestampUnix)

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
              <ul className='flex absolute top-80 ml-20 left-1/3'>
            {Object.keys(chartConfig).map((item) => {
                return (
                    <li key={item}>
                        <ChartFilter text={item} active={filter === item} onClick={() => {
                            setFilter(item)
                        }} />
                    </li>
                )
            })}
        </ul>
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
                    dataKey='value' 
                    stroke='#312e81' 
                    fillOpacity={1}
                    strokeWidth={0.5}
                    fill='url(#chartColor)'
                />
                <Tooltip 
                    contentStyle={{backgroundColor: '#111827'}}
                    itemStyle={{color:'#818cf8'}}
                />
                <XAxis dataKey={"date"} />
                <YAxis domain={["dataMin", "dataMax"]} />
            </AreaChart>
        </ResponsiveContainer>
        {/* <ul className='z-40'>
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
          <XAxis dataKey="name" stroke={"var(--a-color)"} />
          <YAxis />
          <Tooltip wrapperStyle={{ color: 'var(--accent-2-color)', width: 100, backgroundColor: 'var(--bg-color)' }} />
          <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: 'var(--bg-color)', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
          <CartesianGrid stroke="var(--accent-2-color)" strokeDasharray="5 5" />
          <Bar dataKey="price" fill="var(--a-color)" barSize={30} />
        </BarChart>
      </div> */}
    </div>
  );
};

export default StockChart;
