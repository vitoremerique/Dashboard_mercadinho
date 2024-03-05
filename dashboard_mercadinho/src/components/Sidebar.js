import * as React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <aside >
      <Link to="/">Dashboard</Link>
      <Link to="/sales">Vendas</Link>
      <Link to="/products">Produtos</Link>
      <Link to="/registerProduct">Cadastrar produto</Link>
      
    </aside>
  );
};

export default Sidebar;
