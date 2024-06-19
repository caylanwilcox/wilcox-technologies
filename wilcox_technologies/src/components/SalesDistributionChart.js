// src/components/SalesDistributionChart.js

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const SalesDistributionChart = ({ webSales, socialMediaSales, walkinSales }) => {
  const data = [
    { name: 'Web Sales', value: webSales },
    { name: 'Social Media Sales', value: socialMediaSales },
    { name: 'Walk-in Sales', value: walkinSales }
  ];

  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie data={data} cx="50%" cy="50%" outerRadius={100} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SalesDistributionChart;
