import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, AreaChart, Area, ResponsiveContainer } from 'recharts';

const barChartData = [
  { categoria: 'Alimentos', vendas: 4000 },
  { categoria: 'Bebidas', vendas: 3000 },
  { categoria: 'Limpeza', vendas: 2000 },
  { categoria: 'Higiene', vendas: 1500 },
  { categoria: 'Outros', vendas: 1000 },
  { categoria: 'Eletrônicos', vendas: 3500 },
  { categoria: 'Roupas', vendas: 2500 },
  { categoria: 'Cosméticos', vendas: 1800 },
  { categoria: 'Brinquedos', vendas: 1200 },
  { categoria: 'Papelaria', vendas: 900 },
];

const pieChartData = [
  { name: 'Alimentos', vendas: 4000 },
  { name: 'Bebidas', vendas: 3000 },
  { name: 'Limpeza', vendas: 2000 },
  { name: 'Higiene', vendas: 1500 },
  { name: 'Outros', vendas: 1000 },
  { name: 'Eletrônicos', vendas: 3500 },
  { name: 'Roupas', vendas: 2500 },
  { name: 'Cosméticos', vendas: 1800 },
  { name: 'Brinquedos', vendas: 1200 },
  { name: 'Papelaria', vendas: 900 },
];

const areaChartData = [
  { date: '2024-01-01', vendas: 1000 },
  { date: '2024-02-01', vendas: 2000 },
  { date: '2024-03-01', vendas: 3000 },
  { date: '2024-04-01', vendas: 2500 },
  { date: '2024-05-01', vendas: 2800 },
  { date: '2024-06-01', vendas: 3500 },
  { date: '2024-07-01', vendas: 4000 },
  { date: '2024-08-01', vendas: 4200 },
  { date: '2024-09-01', vendas: 3800 },
  { date: '2024-10-01', vendas: 3500 },
  { date: '2024-11-01', vendas: 3200 },
  { date: '2024-12-01', vendas: 3000 },
  { date: '2025-01-01', vendas: 3200 },
  { date: '2025-02-01', vendas: 3500 },
  { date: '2025-03-01', vendas: 3800 },
];

function Sales() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
      <div style={{ flex: 1 }}>
        <h2>Gráfico de Barras por categoria</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="categoria" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="vendas" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div style={{ flex: 1 }}>
        <h2>Gráfico de Pizza por categoria</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={pieChartData} dataKey="vendas" nameKey="name" fill="#2196f3" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div style={{ flex: 1 }}>
        <h2>Gráfico de Área </h2>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={areaChartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="vendas" fill="#82ca9d" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Sales;
