import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const SalaryTrends = () => {
  const data = [
    { city: 'San Diego', 2022: 120000, 2021: 115000, 2020: 110000 },
    { city: 'San Francisco', 2022: 140000, 2021: 130000, 2020: 125000 },
    { city: 'Los Angeles', 2022: 130000, 2021: 120000, 2020: 115000 },
    { city: 'Portland', 2022: 110000, 2021: 108000, 2020: 105000 },
  ];

  return (
    <div style={{ width: '100%', height: 500 }}>
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="2022" fill="#8884d8" />
          <Bar dataKey="2021" fill="#82ca9d" />
          <Bar dataKey="2020" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalaryTrends;
