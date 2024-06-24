'use client'

import { ResponsiveContainer, PieChart, Pie } from 'recharts';
import styles from './pieChart.module.css';


const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
];



const PieChartGraph = () => {
  return (
    <div className={styles.container}>
        <ResponsiveContainer aspect={ 1 / 1 } style={{display: 'flex', alignItems: 'center'}}>
            <PieChart>
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" label />
            </PieChart>
        </ResponsiveContainer>
    </div>
  )
}

export default PieChartGraph
