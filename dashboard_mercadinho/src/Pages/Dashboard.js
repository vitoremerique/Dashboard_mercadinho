import * as React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Janeiro', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Fevereiro', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Março', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Abril', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Maio', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Junho', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Julho', uv: 3490, pv: 4300, amt: 2100 },
];
const Dashboard = () => {
  return (
  <div style={styles.container}>  
      <div style={styles.texto}>Dashboard</div>
    <LineChart width={600} height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="pv" stroke="#8884d8" />
    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
  </LineChart>
  </div>
  );
};

export default Dashboard;



const styles = {
  container:{
    
    backgroundColor: "white",
    
    width: '100%',
    height: '100vh'
  },
  texto:{
    textAlign: 'center',
    borderBottom: '1px solid black',
    marginBottom: '15px'
  }
}