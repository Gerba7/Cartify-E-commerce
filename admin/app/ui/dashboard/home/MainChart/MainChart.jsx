'use client'

import {
    AreaChart,
    Area,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import styles from './mainChart.module.css';





const data = [
    {
      "name": "JAN",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "FEB",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "MAR",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "APR",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "MAY",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "JUN",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "JUL",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ]
  
                              
  

const MainChart = () => {


    const formatYAxis = (tick) => {
        // Only display tick if it's not zero
        return tick !== 0 ? tick : '';
    };


  return (
    <div className={styles.container}>
        <ResponsiveContainer aspect={ 3 / 1 }>
            <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="75%" stopColor="#8884d8" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="75%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
                </defs>
                <XAxis dataKey="name" tick={{ fontSize: 10 }} axisLine={false}  tickLine={false} tickFormatter={formatYAxis} />
                <YAxis tick={{ fontSize: 10 }} axisLine={false}  tickLine={false} tickFormatter={formatYAxis} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#dfe1e4" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" strokeWidth={2} fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    </div>
  )
}



export default MainChart
