import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MeltandBoil = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="meltingPoint" fill="#8884d8" />
        <Bar dataKey="boilingPoint" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};


export default MeltandBoil;
