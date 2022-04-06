import React, { useEffect, useState } from 'react'
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    LineChart,
    Line,
  } from "recharts";
const Dashboard = () => {
    const [chart, setChart] = useState([]);
    const getChart = async () => {
      const respnose = await fetch("chart.json");
      setChart(await respnose.json());
    };
    useEffect(() => {
        getChart();
      }, []);
  return (
<>
<div className='grid grid-cols-1 md:grid-cols-2 gap-16 px-[15%] my-16'>
<div className='p-10 rounded shadow-xl shadow-slate-200 '>
    <h1 className='text-center text-xl my-5'>Investment Vs Revenue</h1>
<ResponsiveContainer width="100%" aspect={3}>
                <BarChart width={500} height={300} data={chart}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="investment" fill="#8884d8" />
                  <Bar dataKey="revenue" fill="#82ca" />
                </BarChart>
              </ResponsiveContainer>
</div>
<div className='p-10 rounded shadow-xl shadow-slate-200 '>
    <h1 className='text-center text-xl my-5'>Sell Vs Revenue</h1>
    <ResponsiveContainer width="100%" aspect={3}>
                <LineChart
                  width={500}
                  height={300}
                  data={chart}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                  <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
</div>
 </div>
</>
  )
}

export default Dashboard